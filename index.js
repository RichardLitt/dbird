const cheerio = require('cheerio')
const htmlparser2 = require('htmlparser2')
const fs = require('fs')

const urls = ['photos', 'audio', 'species']

const fetchData = async (url) => {
  const result = await fs.readFileSync(`html_files/${url}.html`)
  const dom = htmlparser2.parseDOM(result)
  return cheerio.load(dom)
}

const list = {}

async function scrape (url) {
  const $ = await fetchData(url)
  const arr = []

  // Populate the total list
  $('h5.SpecimenHeader-joined > a')
    .each((n, elem) => {
      arr.push({ 'speciesCode': $(elem).data('species-code') })
    })

  $('h5.SpecimenHeader-joined > a')
    .text()
    .toString()
    .replace(/\t/g, '')
    .split('\n')
    .filter(n => n !== '')
    .map((n, i) => {
      n = n.split(' ')
      Object.assign(arr[i], {
        'common': n.slice(0, -2).join(' '),
        'scientific': n.slice(-2).join(' '),
        'needs': {
          'audio': false,
          'photo': false,
          'sighting': false
        }
      })
    })

  $('.StatsIcon-stat-count')
    .text()
    .split('%')
    .filter(n => n !== '')
    .map((n, i) => {
      Object.assign(arr[i], {
        rarity: Number(n)
      })
    })

  const heading = $('#targets-category-select option[selected="selected"]').attr('value')
  arr.forEach(n => {
    if (!(n.speciesCode in list)) {
      list[n.speciesCode] = n
    }
    if (heading === 'A') {
      list[n.speciesCode].needs.audio = true
    } else if (heading === 'P') {
      list[n.speciesCode].needs.photo = true
    } else {
      list[n.speciesCode].needs.audio = true
      list[n.speciesCode].needs.sighting = true
      list[n.speciesCode].needs.photo = true
    }
  })
}

async function callAllLists () {
  for (let url in urls) {
    await scrape(urls[url])
  }

  return list
}

module.exports = callAllLists
