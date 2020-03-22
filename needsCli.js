const dbird = require('./needs.js')
const _ = require('lodash')
const colors = require('colors')

function sortNeeds (needs) {
  let str = ''
  if (needs.photo) {
    str = str + '📷'
  }
  if (needs.audio) {
    str = str + '🎤'
  }
  if (needs.sighting) {
    str = '🔭📷🎤'
  }
  return str
}

async function go () {
  const list = await dbird()
  if (process.argv[2] === 'web') {
    console.log(`## Washington County, Vermont Needs
      `)
  }

  _.forEach(
    _.sortBy(list, [(n) => n.rarity]).reverse(), (v, k) => {
      if (process.argv[2] === 'web') {
        console.log(`* ${colors.yellow(v.rarity.toFixed(2) + '%')}\t${sortNeeds(v.needs)}\t${colors.blue(v.common)} - ${colors.italic(v.scientific)}`)
      } else {
        console.log(`${colors.yellow(v.rarity.toFixed(2) + '%')}\t${sortNeeds(v.needs)}\t${colors.blue(v.common)} - ${colors.italic(v.scientific)}`)
      }
    }
  )
}

go()
