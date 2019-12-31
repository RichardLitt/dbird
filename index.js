const fs = require('fs').promises
const _ = require('lodash')
const Papa = require('papaparse')
const moment = require('moment')

function removeSpuh (arr) {
  const newArr = []
  for (var i in arr) {
    // TODO Mixed results comparing MyEBirdData and Audio and Video data
    if (arr[i]['Scientific Name'] &&
      !arr[i]['Scientific Name'].includes('sp.') &&
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

async function getData (opts) {
  let data = await fs.readFile(opts.input, 'utf8')
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

async function biggestTime (timespan) {
  const dateFormat = parseDateformat(timespan)
  const data = await getData()
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

  const biggest = createPeriodArray(dataByDate)[0]
  console.log(`Your biggest ${timespan} was ${biggest.Date} with ${biggest.SpeciesTotal} species.`)
  // console.log(`With these species: ${_.map(biggest.Species, 'Scientific Name').join(', ')}.`)
}

function locationFilter (list, opts) {
  // TODO Make State and Country and County work
  if (!opts.state) {
    return list
  }
  return list.filter(x => {
    return x.State === opts.state
  })
}

async function firstTimes (timespan) {
  const dateFormat = parseDateformat(timespan)
  const data = orderByDate(await getData()) // Sort by the date, instead
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

  const biggest = createPeriodArray(dataByDate)[0]
  console.log(`Your newest ${timespan} was ${biggest.Date} with ${biggest.SpeciesTotal} new species.`)
  // console.log(`With these species: ${_.map(biggest.Species, 'Scientific Name').join(', ')}.`)
}

function orderByDate (arr) {
  return _.orderBy(arr, (e) => { moment(e.Date, momentFormat(e.Date)) }).reverse()
}

async function firstTimeList (opts) {
  const dateFormat = parseDateformat('day')
  const data = locationFilter(orderByDate(await getData(opts)), opts) // Sort by the date, instead
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
      console.log(`${i} | ${specie['Common Name']} - ${specie['Scientific Name']} | ${(specie.County) ? specie.County + ', ' : ''}${specie.State}, ${specie.Country} | ${e.Date}`)
      i++
    })
  })
}

module.exports = async function (opts) {
  // await biggestTime('year')
  // await biggestTime('month')
  // await biggestTime('day')
  // await firstTimes('year')
  // await firstTimes('month')
  // await firstTimes('day')
  await firstTimeList(opts)
}
