const dbird = require('./index.js')
const _ = require('lodash')
const colors = require('colors')

function sortNeeds (need) {
  let str = ''
  if (need.audio) {
    str = str + '🎤'
  } else if (need.photo) {
    str = str + '📷'
  } else if (need.sighting) {
    str = str + '🔭'
  }
  return str
}

async function go () {
  const list = await dbird()

  _.forEach(
    _.sortBy(list, [(n) => n.rarity]).reverse(), (v, k) => {
      console.log(`${colors.yellow(v.rarity.toFixed(2) + '%')}\t${sortNeeds(v.needs)}\t${colors.blue(v.common)} - ${colors.italic(v.scientific)}`)
    }
  )
}

go()