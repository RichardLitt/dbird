const fs = require('fs').promises
const _ = require('lodash')
const Papa = require('papaparse')
const moment = require('moment')
const GeoJsonGeometriesLookup = require('geojson-geometries-lookup');

function removeSpuh (arr) {
  const newArr = []
  for (var i in arr) {
    // TODO Mixed results comparing MyEBirdData and Audio and Video data
    if (arr[i]['Scientific Name'] &&
      !arr[i]['Scientific Name'].includes('sp.') &&
      !arr[i]['Scientific Name'].includes(' x ') && // Get rid of hybrids
      !arr[i]['Scientific Name'].includes('Domestic type') && // Get rid of Domestic types
      !arr[i]['Scientific Name'].split(' ').slice(0, 2).join(' ').includes('/') // No Genus-level splits
      // !arr[i]['Scientific Name'].includes('[') &&
      // !arr[i]['Scientific Name'].match(/.* .* .*/g) &&
      // !arr[i]['Scientific Name'].includes('/')
    ) {
      // Remove subspecies only entries
      const specie = arr[i]
      specie['Scientific Name'] = specie['Scientific Name'].split(' ').slice(0, 2).join(' ')
      newArr.push(arr[i])
    } else {
      // Use this to find excluded entries
      // console.log(arr[i]['Scientific Name'])
    }
  }
  return _.uniq(newArr)
}

async function getData (input) {
  let data = await fs.readFile(input, 'utf8')
  data = Papa.parse(data, { header: true })

  return removeSpuh(data.data)
}

function parseDateformat (timespan) {
  let dateFormat
  if (timespan === 'year') {
    dateFormat = 'YYYY'
  } else if (timespan === 'month') {
    dateFormat = 'YYYY-MM'
  } else if (timespan === 'day') {
    dateFormat = 'YYYY-MM-DD'
  } else if (timespan) {
    throw new Error('Unable to parse timespan. Must be: year, month, or day.')
  }
  return dateFormat
}

function momentFormat (dateStr) {
  if (dateStr.includes('-')) {
    return 'YYYY-MM-DD'
  } else if (dateStr.includes('/')) {
    return 'MM/DD/YYYY'
  } else {
    throw new Error('Invalid Date String')
  }
}

function createPeriodArray (data) {
  const periodArray = []
  for (const period in data) {
    periodArray.push({
      Date: period,
      SpeciesTotal: removeSpuh(_.uniqBy(data[period], 'Scientific Name')).length,
      Species: removeSpuh(_.uniqBy(data[period], 'Scientific Name'))
    })
  }
  return _.sortBy(periodArray, 'SpeciesTotal').reverse()
}

function locationFilter (list, opts) {
  // TODO Make State and Country and County and Town work
  if (!opts.state) {
    return list
  }


  return list.filter(x => {
    // TODO Add a mapping from Vermont to US-VT, for all states and provinces
    if (x["State/Province"] === 'US-VT') {
      x.State = 'Vermont'
    }
    if (x.State) {
      return x.State === opts.state
    }
  })
}

function dateFilter (list, opts) {
  // TODO Make month and day work
  if (!opts.year) {
    return list
  }
  return list.filter(x => {
    return moment(x.Date, momentFormat(x.Date)).format('YYYY') === opts.year
  })
}

function orderByDate (arr) {
  return _.orderBy(arr, (e) => moment(e.Date, momentFormat(e.Date)).format())
}

async function biggestTime (timespan, opts) {
  const dateFormat = parseDateformat(timespan)
  const data = await getData(opts.input)
  const dataByDate = {}

  // Sort by the amount of unique entries per day
  data.forEach((e) => {
    const period = moment(e.Date, momentFormat(e.Date)).format(dateFormat)
    if (!dataByDate[period]) {
      dataByDate[period] = [e]
    } else {
      dataByDate[period].push(e)
    }
  })

  return createPeriodArray(dataByDate)[0]
}

async function firstTimes (timespan, opts) {
  const dateFormat = parseDateformat(timespan)
  const data = orderByDate(await getData(opts.input)) // Sort by the date, instead
  const dataByDate = {}
  const speciesIndex = {}

  // Sort by the amount of unique entries per day
  data.forEach((e) => {
    const period = moment(e.Date, momentFormat(e.Date)).format(dateFormat)
    if (!speciesIndex[e['Scientific Name']]) {
      if (!dataByDate[period]) {
        dataByDate[period] = [e]
      } else {
        dataByDate[period].push(e)
      }
      // TODO Use scientific name
      speciesIndex[e['Scientific Name']] = e.Date
    }
  })

  return createPeriodArray(dataByDate)[0]
}

async function firstTimeList (opts) {
  const dateFormat = parseDateformat('day')
  const data = orderByDate(dateFilter(locationFilter(await getData(opts.input), opts), opts))
  const dataByDate = {}
  const speciesIndex = {}

  // Sort by the amount of unique entries per day
  data.forEach((e) => {
    const period = moment(e.Date, momentFormat(e.Date)).format(dateFormat)
    const specie = e['Scientific Name']
    if (!speciesIndex[specie]) {
      if (!dataByDate[period]) {
        dataByDate[period] = [e]
      } else {
        dataByDate[period].push(e)
      }
      speciesIndex[specie] = e.Date
    }
  })

  let i = 1
  // TODO Doesn't work for MyEBirdData for some reason
  _.sortBy(createPeriodArray(dataByDate), 'Date').forEach((e) => {
    e.Species.forEach((specie) => {
      console.log(`${i} | ${specie['Common Name']} - ${specie['Scientific Name']} | ${(specie.County) ? specie.County + ', ' : ''}${specie['State/Province']} | ${e.Date}`)
      i++
    })
  })
}

/* node cli.js count -i=MyEBirdData.csv --town="Fayston" --state=Vermont
As this is set up, it will currently return only the first time I saw species in each town provided, in Vermont */
async function count (opts) {
  const geojson = JSON.parse(await fs.readFile('VT_Data__Town_Boundaries.geojson', 'utf8'))
  const glookup = new GeoJsonGeometriesLookup(geojson)
  opts.state = 'Vermont'
  const dateFormat = parseDateformat('day')
  let data = orderByDate(locationFilter(await getData(opts.input), opts), opts)
  const dataByDate = {}
  const speciesIndex = {}

  data = data.filter(x => {
    let point = {type: "Point", coordinates: [x.Longitude, x.Latitude]}
    let town = glookup.getContainers(point)
    if (town.features[0].properties.TOWNNAMEMC) {
      return town.features[0].properties.TOWNNAMEMC === opts.town
    }
  })

  // Sort by the amount of unique entries per day
  data.forEach((e) => {
    const period = moment(e.Date, momentFormat(e.Date)).format(dateFormat)
    const specie = e['Scientific Name']
    if (!speciesIndex[specie]) {
      if (!dataByDate[period]) {
        dataByDate[period] = [e]
      } else {
        dataByDate[period].push(e)
      }
      speciesIndex[specie] = e.Date
    }
  })

  let i = 1
  // TODO Doesn't work for MyEBirdData for some reason
  _.sortBy(createPeriodArray(dataByDate), 'Date').forEach((e) => {
    e.Species.forEach((specie) => {
      console.log(`${i} | ${specie['Common Name']} - ${specie['Scientific Name']} | ${opts.town}, ${(specie.County) ? specie.County + ', ' : ''}${specie['State']} | ${e.Date}`)
      i++
    })
  })
}

async function quadBirds (opts) {
  if (!opts.year) {
    opts.year = moment().format('YYYY')
  }
  const files = opts.input.split(',')
  let data = []
  await Promise.all(files.map(async (file) => {
    const contents = await getData(file)
    data = data.concat(contents)
  }))
  data = orderByDate(dateFilter(locationFilter(data, opts), opts))
  const speciesIndex = {}
  let completionDates = []

  // Sort by the amount of unique entries per day
  data.forEach((e) => {
    const specie = e['Scientific Name']
    if (!speciesIndex[specie]) {
      speciesIndex[specie] = {
        seen: undefined,
        audio: undefined,
        photo: undefined,
        species: e
      }
    }
    if (e['Submission ID'] && !speciesIndex[specie].seen) {
      if (moment(e.Date, momentFormat(e.Date)).format('YYYY') === opts.year) {
        speciesIndex[specie].seen = moment(e.Date, momentFormat(e.Date)).format('YYYY-MM-DD')
      }
    }
    if (e.Format === 'Photo' && !speciesIndex[specie].photo) {
      speciesIndex[specie].photo = moment(e.Date, momentFormat(e.Date)).format('YYYY-MM-DD')
    }
    if (e.Format === 'Audio' && !speciesIndex[specie].audio) {
      speciesIndex[specie].audio = moment(e.Date, momentFormat(e.Date)).format('YYYY-MM-DD')
    }
    if (!speciesIndex[specie].completed &&
      speciesIndex[specie].audio &&
      speciesIndex[specie].photo &&
      speciesIndex[specie].seen) {
      if (moment(speciesIndex[specie].audio, momentFormat(speciesIndex[specie].audio)).isBefore(speciesIndex[specie].photo, momentFormat(speciesIndex[specie].audio))) {
        speciesIndex[specie].completed = speciesIndex[specie].photo
      } else {
        speciesIndex[specie].completed = speciesIndex[specie].audio
      }
      completionDates.push({ Date: speciesIndex[specie].completed, species: speciesIndex[specie].species })
    }
  })

  completionDates = orderByDate(completionDates)

  if (opts.list) {
    for (const species in completionDates) {
      console.log(`${completionDates[species].Date}: ${completionDates[species].species['Common Name']}.`)
    }
  }
  console.log(`You saw, photographed, and recorded audio for a total of ${completionDates.length} species in ${opts.year}.`)
}

async function today (opts) {
  // I want to know:
  // - Was today a big day?
  // - Did I get new world birds today?
  // - Did I get new country birds today?
  // - Did I get new state birds today?
  // - Did I get new county birds today?
  // - Did I get new photo birds today?
  // - Did I get new audio birds today?
}

module.exports = {
  firstTimes,
  biggestTime,
  firstTimeList,
  quadBirds,
  count
}
