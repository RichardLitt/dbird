import data from './vt_town_counts.json'
import vt from './vermont.json'
const d3 = require('d3')
const d3Geo = require('d3-geo')
const topojson = require('topojson')

// Set window height + width
var width = 750
var height = 1000

// Define map projection
var projection = d3Geo
  .geoTransverseMercator()
  .rotate([72.57, -44.20])
  .translate([350, 350])
  .scale([20000])

// Define path generator
var path = d3Geo.geoPath()
  .projection(projection)

// Create SVG Element
var svg = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height)

// Define scale to sort data values into color buckets
var color = d3
  .scaleQuantize()
  .domain([0, 112])
  .range(['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'])

// Legend Stuff

var y = d3.scaleSqrt()
    .domain([0, 50000])
    .range([0, 325])
//
// var yAxis = d3.svg.axis()
//     .scale(y)
//     .tickValues(color.domain())
//     .orient('right')

// Load TopoJSON
for (var i = 0; i < data.length; i++) {
  var dataTown = data[i].town
  var dataPop = parseFloat(data[i].speciesTotal)

  for (var j = 0; j < vt.objects.vt_towns.geometries.length; j++) {
    var jsonTown = vt.objects.vt_towns.geometries[j].properties.town

    if (dataTown.toUpperCase() == jsonTown) {
      vt.objects.vt_towns.geometries[j].properties.speciesTotal = dataPop
      break
    }
  }
}

var vermont = topojson.feature(vt, vt.objects.vt_towns)

svg.append('path')
        .datum(vermont)
        .attr('d', path)
        .style('stroke', '#777')
        .style('stroke-width', '1')

var g = svg.append('g')
        .attr('class', 'key')
        .attr('transform', 'translate(320, 165)')
        // .call(yAxis)

g.selectAll('rect')
        .data(color.range().map(function (d, i) {
          return {
            y0: i ? y(color.domain()[i - 1]) : y.range()[0],
            y1: i < color.domain().length ? y(color.domain()[i]) : y.range()[1],
            z: d
          }
        }))
        .enter().append('rect')
            .attr('width', 8)
            .attr('y', function (d) { return d.y0 })
            .attr('height', function (d) { return d.y1 - d.y0 })
            .style('fill', function (d) { return d.z })

svg.selectAll('.subunit')
        .data(topojson.feature(vt, vt.objects.vt_towns).features)
        .enter()
        .append('path')
        .attr('d', path)
        .style('fill', function (d) {

          // TODO Call dbird.countAllTowns() and get a mapping of town counts to bird counts

          var speciesTotal = d.properties.speciesTotal

          if (speciesTotal) {
            return color(speciesTotal)
          } else {
            return '#ddd'
          }
        })

        .on('mouseover', function (d) {
          var xPosition = d3.mouse(this)[0]
          var yPosition = d3.mouse(this)[1] - 30

          svg.append('text')
                .attr('id', 'tooltip')
                .attr('x', xPosition)
                .attr('y', yPosition)
                .attr('text-anchor', 'middle')
                .attr('font-family', 'sans-serif')
                .attr('font-size', '11px')
                .attr('font-weight', 'bold')
                .attr('fill', 'black')
                .text(`${d.properties.town}: ${d.properties.speciesTotal}`)

          d3.select(this)
            .style('fill', '#509e2f')
        })
        .on('mouseout', function (d) {
          d3.select('#tooltip').remove()

          d3.select(this)
            .transition()
            .duration(250)
            .style('fill', function (d) {
              var speciesTotal = d.properties.speciesTotal
              if (speciesTotal) {
                return color(speciesTotal)
              } else {
                return '#ddd'
              }
            })
        })

// Color lakes
svg.append('path')
  .datum(topojson.feature(vt, vt.objects.lake))
  .attr('d', path)
  .style('stroke', '#89b6ef')
  .style('stroke-width', '1px')
  .style('fill', '#b6d2f5')
