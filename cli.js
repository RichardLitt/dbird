#!/usr/bin/env node
'use strict'

const meow = require('meow')
const main = require('./index')
const _ = require('lodash')
const moment = require('moment')

const cli = meow(`
  Usage
    $ node cli.js <input> [opts]

  Arguments
    quad          Show quad birds
    first         Show your entire first time lists
    big           Show all your biggest time periods
    big-year      Show your biggest year
    big-month     Show your biggest month
    big-day       Show your biggest day
    first-year    Show your first lists
    first-month   Show your first lists
    first-day     Show your first lists

  Options
    --input, -i The input file
    --country   Search by country
    --state     Search by state
    --county    Search by county
    --year      Limit results to a given year
    --list, -l  List all of the species

  Examples
    $ node cli.js
`, {
  flags: {
    input: {
      type: 'string',
      alias: 'i'
    },
    country: {
      type: 'string'
    },
    county: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    year: {
      type: 'string'
    },
    list: {
      type: 'boolean',
      alias: 'l'
    }
  }
})

// TODO Make Country, State, and County mutually exclusive
// TODO Make input automatic based on file location
// TODO This is ugly. Make it better.

async function run () {
  if (cli.input[0] === 'quad') {
    await main.quadBirds(cli.flags)
  } else if (cli.input[0] === 'big') {
    cli.flags.list = undefined
    let timespan = 'year'
    let biggest = await main.biggestTime(timespan, cli.flags)
    console.log(`Your biggest ${timespan} was ${biggest.Date} with ${biggest.SpeciesTotal} new species.`)
    timespan = 'month'
    biggest = await main.biggestTime(timespan, cli.flags)
    console.log(`Your biggest ${timespan} was ${moment(biggest.Date, 'YYYY-MM-DD').format('MMMM YYYY')} with ${biggest.SpeciesTotal} new species.`)
    timespan = 'day'
    biggest = await main.biggestTime(timespan, cli.flags)
    console.log(`Your biggest ${timespan} was ${moment(biggest.Date, 'YYYY-MM-DD').format('MMMM Do, YYYY')} with ${biggest.SpeciesTotal} new species.`)
  } else if (cli.input[0] === 'first') {
    cli.flags.list = undefined
    let timespan = 'year'
    let biggest = await main.firstTimes(timespan, cli.flags)
    console.log(`Your newest ${timespan} was ${biggest.Date} with ${biggest.SpeciesTotal} new species.`)
    timespan = 'month'
    biggest = await main.firstTimes(timespan, cli.flags)
    console.log(`Your newest ${timespan} was ${moment(biggest.Date, 'YYYY-MM-DD').format('MMMM YYYY')} with ${biggest.SpeciesTotal} new species.`)
    timespan = 'day'
    biggest = await main.firstTimes(timespan, cli.flags)
    console.log(`Your newest ${timespan} was ${moment(biggest.Date, 'YYYY-MM-DD').format('MMMM Do, YYYY')} with ${biggest.SpeciesTotal} new species.`)
  } else if (cli.input[0] === 'big-year') {
    const timespan = 'year'
    const biggest = await main.biggestTime(timespan, cli.flags)
    console.log(`Your biggest ${timespan} was ${biggest.Date} with ${biggest.SpeciesTotal} species.`)
    if (cli.flags.list) {
      console.log(`With these species: ${_.map(biggest.Species, 'Scientific Name').join(', ')}.`)
    }
  } else if (cli.input[0] === 'big-month') {
    const timespan = 'month'
    const biggest = await main.biggestTime(timespan, cli.flags)
    console.log(`Your biggest ${timespan} was ${moment(biggest.Date, 'YYYY-MM-DD').format('MMMM YYYY')} with ${biggest.SpeciesTotal} species.`)
    if (cli.flags.list) {
      console.log(`With these species: ${_.map(biggest.Species, 'Scientific Name').join(', ')}.`)
    }
  } else if (cli.input[0] === 'big-day') {
    const timespan = 'day'
    const biggest = await main.biggestTime(timespan, cli.flags)
    console.log(`Your biggest ${timespan} was ${moment(biggest.Date, 'YYYY-MM-DD').format('MMMM Do, YYYY')} with ${biggest.SpeciesTotal} species.`)
    if (cli.flags.list) {
      console.log(`With these species: ${_.map(biggest.Species, 'Scientific Name').join(', ')}.`)
    }
  } else if (cli.input[0] === 'first-year') {
    const timespan = 'year'
    const biggest = await main.firstTimes(timespan, cli.flags)
    console.log(`Your newest ${timespan} was ${biggest.Date} with ${biggest.SpeciesTotal} new species.`)
    if (cli.flags.list) {
      console.log(`With these species: ${_.map(biggest.Species, 'Scientific Name').join(', ')}.`)
    }
  } else if (cli.input[0] === 'first-month') {
    const timespan = 'month'
    const biggest = await main.firstTimes(timespan, cli.flags)
    console.log(`Your newest ${timespan} was ${moment(biggest.Date, 'YYYY-MM-DD').format('MMMM YYYY')} with ${biggest.SpeciesTotal} new species.`)
    if (cli.flags.list) {
      console.log(`With these species: ${_.map(biggest.Species, 'Scientific Name').join(', ')}.`)
    }
  } else if (cli.input[0] === 'first-day') {
    const timespan = 'day'
    const biggest = await main.firstTimes(timespan, cli.flags)
    console.log(`Your newest ${timespan} was ${moment(biggest.Date, 'YYYY-MM-DD').format('MMMM Do, YYYY')} with ${biggest.SpeciesTotal} new species.`)
    if (cli.flags.list) {
      console.log(`With these species: ${_.map(biggest.Species, 'Scientific Name').join(', ')}.`)
    }
  } else {
    console.log(cli.showHelp())
  }
}

run()
