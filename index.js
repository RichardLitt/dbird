const axios = require("axios")
const cheerio = require('cheerio')
const htmlparser2 = require('htmlparser2');
const fs = require('fs')
const _ = require('lodash')

const urls = ["photos", "audio", "species"]

const fetchData = async (url) => {
  const result = await fs.readFileSync(`html_files/${url}.html`)
  const dom = htmlparser2.parseDOM(result);
  return cheerio.load(dom);
};

const list = {}

async function scrape (url) {
  const $ = await fetchData(url);
  const arr = []

  // Populate the total list
  const speciesCode = $('h5.SpecimenHeader-joined > a')
    .each((n, elem) => {
      arr.push({'speciesCode': $(elem).data('species-code')})
      list[$(elem).data('species-code')] = {}
    })

  const targetResults = $('h5.SpecimenHeader-joined > a')
    .text()
    .toString()
    .replace(/\t/g, '')
    .split('\n')
    .filter(n => n !== '')
    .map((n, i) => {
      n = n.split(' ')
      Object.assign(arr[i], {
        'common': n.slice(0,-2).join(' '),
        'scientific': n.slice(-2).join(' '),
        'needs': {}
      })
    })

  const rarity = $('.StatsIcon-stat-count')
    .text()
    .split('%')
    .filter(n => n !== '')
    .map((n, i) => {
      Object.assign(arr[i], {
        rarity: Number(n)
      })
    })

  arr.map(n => {
    list[n.speciesCode] = n
  })

  const heading = $('#targets-category-select option[selected="selected"]').attr('value')
  if (heading === 'A') {
    arr.map(n => list[n.speciesCode].needs.audio = true)
  } else if (heading === 'P') {
    arr.map(n => list[n.speciesCode].needs.photo = true)
  } else {
    arr.map(n => list[n.speciesCode].needs.sighting = true)
  }
}

async function callAllLists() {
  for (url in urls) {
    await scrape(urls[url])
  }

  return list
}

module.exports = callAllLists