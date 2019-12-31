#!/usr/bin/env node
'use strict'

const meow = require('meow')
const main = require('./index')

const cli = meow(`
  Usage
    $ node cli.js <input> [opts]

  Options
    --input, -i The input file
    --country   Search by country
    --state     Search by state
    --county    Search by county
    --year      Limit results to a given year
    --quad      Find quad birds

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
    quad: {
      type: 'boolean'
    }
  }
})

// TODO Make Country, State, and County mutually exclusive
// TODO Make input automatic based on file location

main(cli.flags)
