import data from './vt_region_counts.json'
import vt from './Polygon_VT_Biophysical_Regions.json'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const d3 = require('d3')
const d3Geo = require('d3-geo')

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
var svg = d3.select('#map')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

// Define scale to sort data values into color buckets
var color = d3.scaleQuantize()
  .domain([0, 132])
  .range(['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'])

// Legend Stuff
var y = d3.scaleSqrt()
    .domain([0, 132])
    .range([0, 600])

// var yAxis = d3.axisLeft(y)
//     .tickValues(color.domain())

svg.append('path')
  .datum(vt)
  .attr('d', path)
  .style('stroke', '#777')
  .style('stroke-width', '1')

// Add region counts to regions
for (var i = 0; i < data.length; i++) {
  var dataRegion = data[i].region
  var speciesTotal = parseFloat(data[i].speciesTotal)

  for (var j = 0; j < vt.features.length; j++) {
    var jsonRegion = vt.features[j].properties.name
    if (dataRegion == jsonRegion) {
      vt.features[j].properties.speciesTotal = speciesTotal
      vt.features[j].properties.species = data[i].species
      break
    }
  }
}

svg.selectAll('.subunit')
  .data(vt.features)
  .enter()
  .append('path')
  .attr('d', path)
  .style('fill', function (d) {
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
      .text(`${d.properties.name}: ${d.properties.speciesTotal}`)

    d3.select(this)
      .style('fill', '#509e2f')

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    d3.select('#region')
      .text([capitalizeFirstLetter(d.properties.name.toLowerCase())])

    d3.select('#list')
      .html((d.properties.species.length > 0) ? `<li>${d.properties.species.join('</li><li>')}</li>` : 'No species logged.')
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

    d3.select('#town-name')
      .text()

    d3.select('#list')
      .text()
  })
