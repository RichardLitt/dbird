/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vt_town_counts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var _vt_town_counts_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(1, 1);
/* harmony import */ var _vermont_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
var _vermont_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(2, 1);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);




const d3 = __webpack_require__(11)
const d3Geo = __webpack_require__(268)
const topojson = __webpack_require__(532)

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
var color = d3
  .scaleQuantize()
  .domain([0, 112])
  .range(['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'])

// Legend Stuff

var y = d3.scaleSqrt()
    .domain([0, 119])
    .range([600, 600])

// var yAxis = d3.axisLeft(y)
//     .tickValues(color.domain())

// Load TopoJSON
for (var i = 0; i < _vt_town_counts_json__WEBPACK_IMPORTED_MODULE_0__.length; i++) {
  var dataTown = _vt_town_counts_json__WEBPACK_IMPORTED_MODULE_0__[i].town
  var speciesTotals = parseFloat(_vt_town_counts_json__WEBPACK_IMPORTED_MODULE_0__[i].speciesTotal)

  for (var j = 0; j < _vermont_json__WEBPACK_IMPORTED_MODULE_1__.objects.vt_towns.geometries.length; j++) {
    var jsonTown = _vermont_json__WEBPACK_IMPORTED_MODULE_1__.objects.vt_towns.geometries[j].properties.town

    if (dataTown.toUpperCase() == jsonTown) {
      _vermont_json__WEBPACK_IMPORTED_MODULE_1__.objects.vt_towns.geometries[j].properties.speciesTotal = speciesTotals
      _vermont_json__WEBPACK_IMPORTED_MODULE_1__.objects.vt_towns.geometries[j].properties.species = _vt_town_counts_json__WEBPACK_IMPORTED_MODULE_0__[i].species
      break
    }
  }
}

var vermont = topojson.feature(_vermont_json__WEBPACK_IMPORTED_MODULE_1__, _vermont_json__WEBPACK_IMPORTED_MODULE_1__.objects.vt_towns)

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
        .data(topojson.feature(_vermont_json__WEBPACK_IMPORTED_MODULE_1__, _vermont_json__WEBPACK_IMPORTED_MODULE_1__.objects.vt_towns).features)
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
                .text(`${d.properties.town}: ${d.properties.speciesTotal}`)

          d3.select(this)
            .style('fill', '#509e2f')

          function capitalizeFirstLetter(string) {
              return string.charAt(0).toUpperCase() + string.slice(1);
          }

          d3.select('#town-name')
            .text([capitalizeFirstLetter(d.properties.town.toLowerCase())])

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

// Color lakes
svg.append('path')
  .datum(topojson.feature(_vermont_json__WEBPACK_IMPORTED_MODULE_1__, _vermont_json__WEBPACK_IMPORTED_MODULE_1__.objects.lake))
  .attr('d', path)
  .style('stroke', '#89b6ef')
  .style('stroke-width', '1px')
  .style('fill', '#b6d2f5')


/***/ }),
/* 1 */
/***/ (function(module) {


/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"Topology\",\"transform\":{\"scale\":[0.00020227548165437093,0.00023584023823810634],\"translate\":[-73.48783357613242,42.726960008328305]},\"objects\":{\"vt_towns\":{\"type\":\"GeometryCollection\",\"crs\":{\"type\":\"name\",\"properties\":{\"name\":\"urn:ogc:def:crs:OGC:1.3:CRS84\"}},\"geometries\":[{\"type\":\"Polygon\",\"arcs\":[[0,1,2,3]],\"properties\":{\"town\":\"CANAAN\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[4,5,6,7,8]],\"properties\":{\"town\":\"FRANKLIN\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[9,10,-5,11]],\"properties\":{\"town\":\"BERKSHIRE\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[-8,12,13,14]],\"properties\":{\"town\":\"HIGHGATE\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[15,16,17,18,-10,19]],\"properties\":{\"town\":\"RICHFORD\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[20,21,22,23]],\"properties\":{\"town\":\"ALBURGH\",\"county\":13}},{\"type\":\"Polygon\",\"arcs\":[[24,25,-3,26,27,28,29]],\"properties\":{\"town\":\"NORTON\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[30,31,32,-27,-2]],\"properties\":{\"town\":\"AVERILL\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[-25,33,34,35,36]],\"properties\":{\"town\":\"HOLLAND\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[37,38,-16,39]],\"properties\":{\"town\":\"JAY\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[40,41,42,-38,43]],\"properties\":{\"town\":\"TROY\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[44,45,-31,-1]],\"properties\":{\"town\":\"LEMINGTON\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[46,47,-21]],\"properties\":{\"town\":\"ISLE LA MOTTE\",\"county\":13}},{\"type\":\"Polygon\",\"arcs\":[[48,49,50,-28,-33]],\"properties\":{\"town\":\"AVERYS GORE\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[51,52,53,-29,-51]],\"properties\":{\"town\":\"WARRENS GORE\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[54,-34,-30,-54]],\"properties\":{\"town\":\"WARNER'S GRANT\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[55,56,57,-13,-7]],\"properties\":{\"town\":\"SHELDON\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[-53,58,59,60,-35,-55]],\"properties\":{\"town\":\"MORGAN\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[61,62,63,64,-49,-32]],\"properties\":{\"town\":\"LEWIS\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[65,66,-23,67,-14,-58,68]],\"properties\":{\"town\":\"SWANTON\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[69,70,71,-47,-24,-67]],\"properties\":{\"town\":\"NORTH HERO\",\"county\":13}},{\"type\":\"Polygon\",\"arcs\":[[72,73,-56,-6,-11,-19,74]],\"properties\":{\"town\":\"ENOSBURG\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[75,76,-17,-39,-43]],\"properties\":{\"town\":\"WESTFIELD\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[77,78,79,80,-60]],\"properties\":{\"town\":\"CHARLESTON\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[81,82,83,-70,-66],[84],[-85]],\"properties\":{\"town\":\"ST. ALBANS\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[-80,85,86,87,88,89]],\"properties\":{\"town\":\"BROWNINGTON\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[90,91,-82,-69,-57,-74,92]],\"properties\":{\"town\":\"FAIRFIELD\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[93,94,-62,-46]],\"properties\":{\"town\":\"BLOOMFIELD\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[-65,95,96,97,-78,-59,-52,-50]],\"properties\":{\"town\":\"BRIGHTON\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[-88,98,99,100,101,102]],\"properties\":{\"town\":\"IRASBURG\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[103,104,105,-76,-42,106,-101]],\"properties\":{\"town\":\"LOWELL\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[107,108,109,-93,-73,110]],\"properties\":{\"town\":\"BAKERSFIELD\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[-98,111,112,113,-86,-79]],\"properties\":{\"town\":\"WESTMORE\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[114,115,116,117,118,-96,-64]],\"properties\":{\"town\":\"FERDINAND\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[-95,119,120,-115,-63]],\"properties\":{\"town\":\"BRUNSWICK\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[121,122,123,124,-108]],\"properties\":{\"town\":\"BELVIDERE\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[125,126,-83]],\"properties\":{\"town\":\"GEORGIA\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[127,128,-104,-100,129,130]],\"properties\":{\"town\":\"ALBANY\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[131,132,133,-71,-84]],\"properties\":{\"town\":\"GRAND ISLE\",\"county\":13}},{\"type\":\"Polygon\",\"arcs\":[[-125,134,135,136,-109]],\"properties\":{\"town\":\"WATERVILLE\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[137,138,139,140,-126,-92]],\"properties\":{\"town\":\"FAIRFAX\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[-119,141,142,143,-112,-97]],\"properties\":{\"town\":\"NEWARK\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[-137,144,-138,-91,-110]],\"properties\":{\"town\":\"FLETCHER\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[145,146,-130,-99,-87,-114,147]],\"properties\":{\"town\":\"BARTON\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[-144,148,149,150,151,-148,-113]],\"properties\":{\"town\":\"SUTTON\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[152,153,154,-131,-147]],\"properties\":{\"town\":\"GLOVER\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[-141,155,156,157,158,-132,-127]],\"properties\":{\"town\":\"MILTON\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[159,160,161,-142,-118]],\"properties\":{\"town\":\"EAST HAVEN\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[-155,162,163,164,165,-128]],\"properties\":{\"town\":\"CRAFTSBURY\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[166,167,168,169,-139,-145,-136,170]],\"properties\":{\"town\":\"CAMBRIDGE\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[-152,171,-153,-146]],\"properties\":{\"town\":\"SHEFFIELD\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[172,173,-133,-159,-158]],\"properties\":{\"town\":\"SOUTH HERO\",\"county\":13}},{\"type\":\"Polygon\",\"arcs\":[[174,175,176,-160,-117]],\"properties\":{\"town\":\"GRANBY\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[177,178,179,180,-163,-154]],\"properties\":{\"town\":\"GREENSBORO\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[181,182,-149,-143,-162,183]],\"properties\":{\"town\":\"BURKE\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[-170,184,185,-156,-140]],\"properties\":{\"town\":\"WESTFORD\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[186,-171,-135,-124,187,188]],\"properties\":{\"town\":\"JOHNSON\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[-181,189,190,191,192,-164]],\"properties\":{\"town\":\"WOLCOTT\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[193,194,195,-185,-169]],\"properties\":{\"town\":\"UNDERHILL\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-151,196,197,198,-178,-172]],\"properties\":{\"town\":\"WHEELOCK\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[199,200,-176,201]],\"properties\":{\"town\":\"GUILDHALL\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[202,-184,-161,-177,203,204]],\"properties\":{\"town\":\"VICTORY\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[205,-189,206,-165,-193]],\"properties\":{\"town\":\"HYDE PARK\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[-192,207,208,-167,-187,-206]],\"properties\":{\"town\":\"MORRISTOWN\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[209,210,211,-190,-180]],\"properties\":{\"town\":\"HARDWICK\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[212,213,-179,-199]],\"properties\":{\"town\":\"STANNARD\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[-203,214,215,216,-182]],\"properties\":{\"town\":\"KIRBY\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[217,218,219,-194,-168,-209]],\"properties\":{\"town\":\"STOWE\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[-212,220,221,222,-208,-191]],\"properties\":{\"town\":\"ELMORE\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[223,-197,-150,-183,-217]],\"properties\":{\"town\":\"LYNDON\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[224,225,-210,-214]],\"properties\":{\"town\":\"WALDEN\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[226,227,-204,-201]],\"properties\":{\"town\":\"LUNENBURG\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[228,229,230,-196,231]],\"properties\":{\"town\":\"JERICHO\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-216,232,233,234,-224]],\"properties\":{\"town\":\"ST. JOHNSBURY\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[235,236,-215,-205,-228]],\"properties\":{\"town\":\"CONCORD\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[237,238,-221,-211]],\"properties\":{\"town\":\"WOODBURY\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[239,240,-218,-223]],\"properties\":{\"town\":\"WORCESTER\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[241,242,243,244,-232,-195,-220]],\"properties\":{\"town\":\"BOLTON\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[245,246,-233,-237]],\"properties\":{\"town\":\"WATERFORD\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[247,248,-240,-222,-239]],\"properties\":{\"town\":\"CALAIS\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[249,250,251]],\"properties\":{\"town\":\"ST. GEORGE\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-247,252,253,254,255,-234]],\"properties\":{\"town\":\"BARNET\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[256,257,258,259,260,-241]],\"properties\":{\"town\":\"MIDDLESEX\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-255,261,262,263,264]],\"properties\":{\"town\":\"PEACHAM\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[265,266,267,268,-243]],\"properties\":{\"town\":\"DUXBURY\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[269,270,271,272,273]],\"properties\":{\"town\":\"CHARLOTTE\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-244,-269,274,275,276,277,278]],\"properties\":{\"town\":\"HUNTINGTON\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[279,-266,-242,-219,-261]],\"properties\":{\"town\":\"WATERBURY\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[280,281,-248,282,-263,283]],\"properties\":{\"town\":\"MARSHFIELD\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-282,284,285,286,287,-257,-249]],\"properties\":{\"town\":\"EAST MONTPELIER\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-260,288,289,290,-267,-280]],\"properties\":{\"town\":\"MORETOWN\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[291,-258,-288]],\"properties\":{\"town\":\"MONTPELIER\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[292,293,294,295,296,-277]],\"properties\":{\"town\":\"STARKSBORO\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[297,298,299,300,-284,-262,301]],\"properties\":{\"town\":\"GROTON\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[-301,302,303,-285,-281]],\"properties\":{\"town\":\"PLAINFIELD\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[304,305,306,-270,307,-296]],\"properties\":{\"town\":\"MONKTON\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[308,309,310,311,-275,-268]],\"properties\":{\"town\":\"FAYSTON\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-292,-287,312,313,314,315,316,-289,-259]],\"properties\":{\"town\":\"BERLIN\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[317,318,319,320,321,-271,-307]],\"properties\":{\"town\":\"FERRISBURGH\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[-304,322,323,324,-315,325,-313,-286],[-326,-314]],\"properties\":{\"town\":\"BARRE CITY\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-312,-293,-276]],\"properties\":{\"town\":\"BUELS GORE\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-300,326,327,328,-323,-303]],\"properties\":{\"town\":\"ORANGE\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[329,330,331,332,-305,-295]],\"properties\":{\"town\":\"BRISTOL\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[333,334,-327,-299]],\"properties\":{\"town\":\"TOPSHAM\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[335,336,-320]],\"properties\":{\"town\":\"VERGENNES\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[337,338,339,-318,-306,-333]],\"properties\":{\"town\":\"NEW HAVEN\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[340,341,342,-321,-337]],\"properties\":{\"town\":\"PANTON\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[-340,343,-341,-336,-319]],\"properties\":{\"town\":\"WALTHAM\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[344,345,-330,-294,-311,346]],\"properties\":{\"town\":\"LINCOLN\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[-329,347,348,349,350,-324]],\"properties\":{\"town\":\"WASHINGTON\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[351,352,353,-342,-344]],\"properties\":{\"town\":\"ADDISON\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[-335,354,355,356,357,-348,-328]],\"properties\":{\"town\":\"CORINTH\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[358,359,360,-352,-339]],\"properties\":{\"town\":\"WEYBRIDGE\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[-350,361,362,363,364]],\"properties\":{\"town\":\"CHELSEA\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[365,366,367,-359,-338,-332]],\"properties\":{\"town\":\"MIDDLEBURY\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[368,369,370,371,-366,-331,-346]],\"properties\":{\"town\":\"RIPTON\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[372,373,374,-353,-361]],\"properties\":{\"town\":\"BRIDPORT\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[375,376,377,-373,-360,-368]],\"properties\":{\"town\":\"CORNWALL\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[378,379,-362,-349,-358]],\"properties\":{\"town\":\"VERSHIRE\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[380,381,382,383,-379,-357]],\"properties\":{\"town\":\"WEST FAIRLEE\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[384,385,-382,386]],\"properties\":{\"town\":\"FAIRLEE\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[387,388,389,-370]],\"properties\":{\"town\":\"HANCOCK\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[390,391,392,-363]],\"properties\":{\"town\":\"TUNBRIDGE\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[393,394,395,-376,-367,-372]],\"properties\":{\"town\":\"SALISBURY\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[396,397,398,399,400,-389,401,402]],\"properties\":{\"town\":\"ROCHESTER\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[403,404,405,-374,-378]],\"properties\":{\"town\":\"SHOREHAM\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[406,407,408,-391,-380,-384]],\"properties\":{\"town\":\"STRAFFORD\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[409,410,-397,411,412,413]],\"properties\":{\"town\":\"BETHEL\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-386,414,415,-407,-383]],\"properties\":{\"town\":\"THETFORD\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[416,417,418,-414,-392,-409]],\"properties\":{\"town\":\"ROYALTON\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[419,420,421,-405,422]],\"properties\":{\"town\":\"ORWELL\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[423,424,425,-399]],\"properties\":{\"town\":\"PITTSFIELD\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[426,427,428,-417,-408]],\"properties\":{\"town\":\"SHARON\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-411,429,430,431,-424,-398]],\"properties\":{\"town\":\"STOCKBRIDGE\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[432,433,-427,-416]],\"properties\":{\"town\":\"NORWICH\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-419,434,435,-430,-410]],\"properties\":{\"town\":\"BARNARD\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[436,437,438,439,-421,440,441]],\"properties\":{\"town\":\"BENSON\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[442,443,444,445,-428,-434]],\"properties\":{\"town\":\"HARTFORD\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[446,447,448,449,-425,-432]],\"properties\":{\"town\":\"KILLINGTON\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[450,451,452,453,-447,-431,-436]],\"properties\":{\"town\":\"BRIDGEWATER\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[454,455,-439]],\"properties\":{\"town\":\"WEST HAVEN\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[456,457,458,-455,-438]],\"properties\":{\"town\":\"FAIR HAVEN\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[459,460,461,462,-444]],\"properties\":{\"town\":\"HARTLAND\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[463,464,465,466,-448,-454,467,468]],\"properties\":{\"town\":\"PLYMOUTH\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[469,470,471,472,-466]],\"properties\":{\"town\":\"SHREWSBURY\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[473,-468,-453,474,475]],\"properties\":{\"town\":\"READING\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[476,477,478,-461]],\"properties\":{\"town\":\"WINDSOR\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-471,479,480,481,482,483]],\"properties\":{\"town\":\"WALLINGFORD\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[484,485,-480,-470,-465,486]],\"properties\":{\"town\":\"MOUNT HOLLY\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[487,488,489,490,491]],\"properties\":{\"town\":\"PAWLET\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[492,493,494,-487,-464,495]],\"properties\":{\"town\":\"LUDLOW\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-482,496,497,-492,498]],\"properties\":{\"town\":\"DANBY\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[-486,499,500,501,-497,-481]],\"properties\":{\"town\":\"MOUNT TABOR\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[502,503,504,505,-500,-485,-495]],\"properties\":{\"town\":\"WESTON\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[506,507,508,-503,-494]],\"properties\":{\"town\":\"ANDOVER\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[509,510,511,512]],\"properties\":{\"town\":\"SPRINGFIELD\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[513,514,515,-488,516]],\"properties\":{\"town\":\"RUPERT\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-502,517,518,519,-517,-498]],\"properties\":{\"town\":\"DORSET\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[520,521,-518,-501,-506]],\"properties\":{\"town\":\"PERU\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[522,523,-521,-505]],\"properties\":{\"town\":\"LANDGROVE\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-504,-509,524,525,526,-523]],\"properties\":{\"town\":\"LONDONDERRY\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[527,528,529,530,531]],\"properties\":{\"town\":\"GRAFTON\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-530,532,533,-525,-508,534]],\"properties\":{\"town\":\"WINDHAM\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[535,536,-515,537]],\"properties\":{\"town\":\"SANDGATE\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-522,-524,-527,538,539,540,541,-519]],\"properties\":{\"town\":\"WINHALL\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-542,542,-538,-514,-520]],\"properties\":{\"town\":\"MANCHESTER\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-534,543,544,545,-539,-526]],\"properties\":{\"town\":\"JAMAICA\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[546,547,548,549,-544,-533,-529]],\"properties\":{\"town\":\"TOWNSHEND\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[550,551,552,553,554]],\"properties\":{\"town\":\"WESTMINSTER\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[555,556,557,-536]],\"properties\":{\"town\":\"ARLINGTON\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-541,558,559,560,-556,-543]],\"properties\":{\"town\":\"SUNDERLAND\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-546,561,562,563,-559,-540]],\"properties\":{\"town\":\"STRATTON\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-553,564,565,566,-548,567]],\"properties\":{\"town\":\"BROOKLINE\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-550,568,569,-562,-545]],\"properties\":{\"town\":\"WARDSBORO\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[570,571,-557,572]],\"properties\":{\"town\":\"SHAFTSBURY\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[573,574,-573,-561]],\"properties\":{\"town\":\"GLASTENBURY\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-564,575,576,577,-574,-560]],\"properties\":{\"town\":\"SOMERSET\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-552,578,579,-565]],\"properties\":{\"town\":\"PUTNEY\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[580,581,-569,-549,-567,582]],\"properties\":{\"town\":\"NEWFANE\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-570,-582,583,584,-576,-563]],\"properties\":{\"town\":\"DOVER\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-580,585,586,587,-583,-566]],\"properties\":{\"town\":\"DUMMERSTON\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[588,589,-571,590]],\"properties\":{\"town\":\"BENNINGTON\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[591,592,593,594,-591,-575,-578]],\"properties\":{\"town\":\"WOODFORD\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[595,596,-592,-577]],\"properties\":{\"town\":\"SEARSBURG\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[597,598,599,600,-596,-585]],\"properties\":{\"town\":\"WILMINGTON\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-588,601,602,-598,-584,-581]],\"properties\":{\"town\":\"MARLBORO\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[603,604,605,-602,-587]],\"properties\":{\"town\":\"BRATTLEBORO\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[606,607,608,-593,-597,-601]],\"properties\":{\"town\":\"READSBORO\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-595,609,610,-589]],\"properties\":{\"town\":\"POWNAL\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[-609,611,-610,-594]],\"properties\":{\"town\":\"STAMFORD\",\"county\":3}},{\"type\":\"Polygon\",\"arcs\":[[612,-607,-600,613]],\"properties\":{\"town\":\"WHITINGHAM\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[614,-614,-599,-603,615]],\"properties\":{\"town\":\"HALIFAX\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[616,-616,-606,617]],\"properties\":{\"town\":\"GUILFORD\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[618,-618,-605]],\"properties\":{\"town\":\"VERNON\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-106,619,-122,-111,-75,-18,-77]],\"properties\":{\"town\":\"MONTGOMERY\",\"county\":11}},{\"type\":\"Polygon\",\"arcs\":[[-105,-129,-166,-207,-188,-123,-620]],\"properties\":{\"town\":\"EDEN\",\"county\":15}},{\"type\":\"Polygon\",\"arcs\":[[620,-202,-175,-116,-121]],\"properties\":{\"town\":\"MAIDSTONE\",\"county\":9}},{\"type\":\"Polygon\",\"arcs\":[[621,622,623,624,625,626,-173,-157]],\"properties\":{\"town\":\"COLCHESTER\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-235,-256,-265,627,-225,-213,-198]],\"properties\":{\"town\":\"DANVILLE\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[628,629,-624]],\"properties\":{\"town\":\"WINOOSKI\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-264,-283,-238,-226,-628]],\"properties\":{\"town\":\"CABOT\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-273,630,631,632,-250,633]],\"properties\":{\"town\":\"SHELBURNE\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-245,-279,634,635,-229]],\"properties\":{\"town\":\"RICHMOND\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-278,-297,-308,-274,-634,-252,636,-635]],\"properties\":{\"town\":\"HINESBURG\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-446,637,-451,-435,-418,-429]],\"properties\":{\"town\":\"POMFRET\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-445,-463,638,-475,-452,-638]],\"properties\":{\"town\":\"WOODSTOCK\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-630,640,641,642,643,644,-625]],\"properties\":{\"town\":\"BURLINGTON\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-412,-403,645,646,647,648]],\"properties\":{\"town\":\"BRAINTREE\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[-393,-413,-649,649]],\"properties\":{\"town\":\"RANDOLPH\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[650,651,-622,-186,-231]],\"properties\":{\"town\":\"ESSEX\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[652,653,654,-302,-254,655]],\"properties\":{\"town\":\"RYEGATE\",\"county\":5}},{\"type\":\"Polygon\",\"arcs\":[[656,-355,-334,-298,-655,657]],\"properties\":{\"town\":\"NEWBURY\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[-629,-623,-652,658,-632,659,-626,-645,-644,-643,-642,-641]],\"properties\":{\"town\":\"SOUTH BURLINGTON\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-230,-636,-637,-251,-633,-659,-651]],\"properties\":{\"town\":\"WILLISTON\",\"county\":7}},{\"type\":\"Polygon\",\"arcs\":[[-351,-365,660,661,-316,-325]],\"properties\":{\"town\":\"WILLIAMSTOWN\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[-650,-648,662,663,-661,-364]],\"properties\":{\"town\":\"BROOKFIELD\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[664,-387,-381,-356,-657]],\"properties\":{\"town\":\"BRADFORD\",\"county\":17}},{\"type\":\"Polygon\",\"arcs\":[[665,666,667,668,-458,669]],\"properties\":{\"town\":\"POULTNEY\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[670,-483,-499,-491,671,672,673]],\"properties\":{\"town\":\"TINMOUTH\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[-672,-490,674,-668,675]],\"properties\":{\"town\":\"WELLS\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[-673,-676,-667,676]],\"properties\":{\"town\":\"MIDDLETOWN SPRINGS\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[-462,-479,677,678,-476,-639]],\"properties\":{\"town\":\"WEST WINDSOR\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[679,680,-512,681,-531,-535,-507,-493]],\"properties\":{\"town\":\"CHESTER\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-680,-496,-469,-474,-679,682,683]],\"properties\":{\"town\":\"CAVENDISH\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[-681,-684,684]],\"properties\":{\"town\":\"BALTIMORE\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[685,-513,-685,-683,-678,-478]],\"properties\":{\"town\":\"WEATHERSFIELD\",\"county\":27}},{\"type\":\"Polygon\",\"arcs\":[[686,687,-102,-107,-41,688,689],[-694,-687,-692]],\"properties\":{\"town\":\"NEWPORT\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[-61,-81,-90,690,691,-690,692,-36]],\"properties\":{\"town\":\"DERBY\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[693,-691,-89,-103,-688]],\"properties\":{\"town\":\"COVENTRY\",\"county\":19}},{\"type\":\"Polygon\",\"arcs\":[[-664,694,695,696,-290,-317,-662]],\"properties\":{\"town\":\"NORTHFIELD\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-697,697,-309,-291]],\"properties\":{\"town\":\"WAITSFIELD\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[698,-555,699,-532,-682,-511]],\"properties\":{\"town\":\"ROCKINGHAM\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[-554,-568,-547,-528,-700]],\"properties\":{\"town\":\"ATHENS\",\"county\":25}},{\"type\":\"Polygon\",\"arcs\":[[700,-646,-402,-388,-369,-345,701]],\"properties\":{\"town\":\"GRANVILLE\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[-647,-701,702,-695,-663]],\"properties\":{\"town\":\"ROXBURY\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-702,-347,-310,-698,-696,-703]],\"properties\":{\"town\":\"WARREN\",\"county\":23}},{\"type\":\"Polygon\",\"arcs\":[[-390,-401,703,704,705,-394,-371]],\"properties\":{\"town\":\"GOSHEN\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[-396,706,707,708,-423,-404,-377]],\"properties\":{\"town\":\"WHITING\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[709,-707,-395,-706]],\"properties\":{\"town\":\"LEICESTER\",\"county\":1}},{\"type\":\"Polygon\",\"arcs\":[[-450,710,711,712,713,-704,-400,-426]],\"properties\":{\"town\":\"CHITTENDEN\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[714,-441,-420,-709,715]],\"properties\":{\"town\":\"SUDBURY\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[716,-442,-715,717]],\"properties\":{\"town\":\"HUBBARDTON\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[718,719,720,-670,-457,-437,-717]],\"properties\":{\"town\":\"CASTLETON\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[721,-674,-677,-666,-721,722]],\"properties\":{\"town\":\"IRA\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[-705,-714,723,-716,-708,-710]],\"properties\":{\"town\":\"BRANDON\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[-713,724,725,726,-719,-718,-724]],\"properties\":{\"town\":\"PITTSFORD\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[727,728,-723,-720,-727,729]],\"properties\":{\"town\":\"WEST RUTLAND\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[730,-730,-726]],\"properties\":{\"town\":\"PROCTOR\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[731,732,-728,-731,-725,-712],[-640],[639]],\"properties\":{\"town\":\"RUTLAND\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[-732,-711,-449,-467,-473,733]],\"properties\":{\"town\":\"MENDON\",\"county\":21}},{\"type\":\"Polygon\",\"arcs\":[[-484,-671,-722,-729,-733,-734,-472]],\"properties\":{\"town\":\"CLARENDON\",\"county\":21}}]},\"lake\":{\"type\":\"GeometryCollection\",\"crs\":{\"type\":\"name\",\"properties\":{\"name\":\"urn:ogc:def:crs:OGC:1.3:CRS84\"}},\"geometries\":[{\"type\":\"Polygon\",\"arcs\":[[734,735,736],[737],[738],[739],[740],[741],[742],[743],[744],[745],[746],[747],[748],[749],[750],[751],[752],[753],[754],[755]],\"properties\":{\"water_name\":\"Lake Champlain\"}}]}},\"arcs\":[[[9846,9253],[-21,0],[-27,11],[-23,-24],[-251,116],[-180,86]],[[9344,9442],[-132,64],[-378,164]],[[8834,9670],[16,16]],[[8850,9686],[4,0],[149,2],[28,1],[37,0],[45,1],[24,0],[133,2],[41,0],[34,0],[50,0],[22,-1],[52,0],[57,1],[4,0],[2,0],[13,0],[90,1],[59,1],[41,0],[14,0],[47,1],[3,0],[1,0],[1,0],[1,0],[15,0],[5,0],[8,0],[34,0],[45,0],[43,0],[34,1],[13,0],[-3,-6],[-8,-3],[-9,-1],[-7,-1],[-9,0],[-7,-2],[-9,-2],[-7,-3],[-5,-3],[-3,-6],[-3,-6],[-1,-7],[-2,-5],[-6,-3],[-8,0],[-7,0],[-9,0],[-7,-4],[-6,-2],[-5,3],[-5,4],[-11,2],[-6,2],[-4,4],[-8,1],[-5,-3],[-6,2],[-3,4],[-5,4],[-5,3],[-6,2],[-5,3],[-8,0],[-8,-1],[-9,0],[-5,-3],[-6,-3],[-6,-3],[-6,-5],[-8,-2],[-10,-2],[-7,-2],[-7,-2],[-9,-3],[-11,1],[-7,-3],[-7,-2],[-8,-3],[-16,-8],[-2,-6],[-8,-3],[-6,-3],[-6,-4],[-5,-6],[1,-4],[9,-2],[7,-1],[2,-4],[-11,-3],[-11,-1],[-6,-4],[1,-5],[-3,-5],[-6,-4],[-5,-3],[0,-4],[8,-1],[7,3],[7,-1],[2,-4],[-1,-6],[-2,-4],[6,-2],[7,1],[6,-2],[4,-4],[2,-7],[2,-7],[3,-4],[7,-4],[6,-2],[7,-3],[2,-6],[2,-4],[4,-4],[8,2],[7,-1],[4,-4],[-5,-3],[-5,-4],[8,-5],[-2,-4],[-7,-2],[2,-4],[9,-1],[9,-1],[6,2],[7,3],[3,-9],[3,-5],[2,-5],[2,-6],[-2,-6],[-2,-6],[0,-6],[-1,-7],[-6,-5],[-8,-3],[-2,-5],[4,-3],[7,-1],[0,-6],[-3,-4],[-1,-5],[8,-3],[6,-1],[-2,-7],[-1,-4],[-3,-6],[-5,-4],[-7,-2],[-7,0],[-5,7],[-4,-5],[2,-5],[8,-5],[8,-3],[6,-2],[5,-3],[0,-6],[-1,-4],[2,-4],[5,-4],[6,-3],[-1,-5],[-7,-1],[-3,-4],[3,-3],[5,-2],[6,-1],[4,-4],[7,-3],[7,-3],[2,-4],[5,-5],[8,-5],[6,-4],[7,-5],[7,-9],[7,-6],[1,-5],[-1,-4],[1,-4],[4,-4],[8,0],[10,2],[8,2],[7,-1],[1,-4],[-8,-1],[-7,-5]],[[3241,9708],[7,-36],[6,-37],[7,-39],[7,-41],[4,-34],[5,-43],[2,-31],[3,-37],[2,-32],[3,-32],[2,-25]],[[3289,9321],[0,-5],[1,-15]],[[3290,9301],[-49,7],[-50,9],[-54,8],[-58,9],[-47,7],[-34,6],[-34,5],[-36,6],[-20,3]],[[2908,9361],[-402,128],[-61,212]],[[2445,9701],[57,-2],[18,0],[1,0],[4,0],[17,0],[34,-1],[119,3],[27,0],[20,1],[31,1],[36,0],[10,0],[44,1],[12,0],[5,0],[67,1],[13,0],[99,2],[10,0],[60,1],[5,0],[11,0],[8,0],[15,1],[23,-1],[37,0],[13,0]],[[3886,9705],[9,-28],[14,-40],[15,-44],[15,-43],[15,-45],[15,-43],[16,-47],[17,-49],[11,-31]],[[4013,9335],[-66,-2],[-49,-2],[-51,-2],[-58,-1],[-69,-3],[-76,-2],[-25,-1],[-44,-1],[-46,-1],[-40,-2],[-4,0],[-6,1],[-48,0],[-45,1],[-47,0],[-50,1]],[[3241,9708],[33,-1],[2,0],[19,0],[54,0],[42,-1],[6,0],[9,0],[106,-1],[36,0],[109,-1],[17,1],[53,0],[32,0],[47,0],[74,-1],[6,1]],[[2908,9361],[-494,-63],[-276,-39]],[[2138,9259],[-342,103],[-77,24],[-9,5],[-8,4],[-9,4],[-7,3],[-11,3],[-9,1],[-9,3],[-6,1],[-7,2],[-6,2],[-6,4],[-7,4],[-6,4],[-5,3],[-6,6],[-7,9],[-7,8],[-3,7],[-1,4],[0,4],[0,8],[1,9],[1,4],[0,7],[-3,6],[-4,4],[-3,4],[-3,5],[1,4],[6,4],[7,3],[5,3],[6,5],[5,5],[5,4],[9,2],[11,4],[5,4],[5,4],[4,3],[4,6],[2,4],[6,13],[3,4],[0,5],[1,5],[3,8],[3,7],[1,6],[-2,5],[-4,4],[-7,7],[-3,4],[-2,4],[-1,4],[-5,4],[-8,4],[-10,4],[-18,4],[-8,2],[-6,2],[-6,2],[-6,3],[-5,5],[-3,3],[-3,5],[-2,4],[-1,4],[-2,6]],[[1569,9697],[396,6],[14,0],[11,1],[1,0],[1,0],[1,0],[3,0],[23,0],[14,1],[27,0],[22,1],[7,0],[11,0],[17,-1],[11,0],[38,0],[10,0],[29,-1],[28,0],[50,-1],[25,0],[8,0],[15,-1],[34,0],[64,-1],[3,0],[13,0]],[[4617,9673],[7,-22],[6,-27],[9,-34],[10,-45],[9,-36],[10,-41],[9,-37],[8,-34],[8,-33],[7,-27],[3,-12]],[[4703,9325],[-8,0],[-16,-1]],[[4679,9324],[-38,-1],[-59,-1],[-70,-3],[-55,-1],[-61,-2],[-61,-2],[-67,-2],[-13,0],[-53,-2],[-50,-1],[-62,-2],[-59,-2]],[[4031,9305],[-8,13],[-10,17]],[[3886,9705],[9,-1],[27,0],[52,-1],[46,0],[6,0],[49,-1],[6,0],[38,-1],[99,-1],[37,-1],[40,-2],[29,-1],[17,-1],[27,-1],[72,-5],[17,-1],[1,0],[7,-1],[21,-2],[32,-3],[10,-2],[14,-1],[68,-7],[7,1]],[[838,9025],[3,4],[3,4],[1,4],[1,4],[1,5],[1,4],[0,5],[0,4],[0,5],[1,5],[0,5],[0,4],[1,6],[1,5],[1,4],[1,5],[0,5],[1,7],[1,3],[1,5],[1,4],[0,4],[2,5],[0,4],[1,5],[1,4],[2,6],[1,4],[1,4],[0,4],[2,5],[2,5],[1,5],[1,4],[1,5],[0,4],[0,4],[1,5],[-1,4],[-2,4],[-2,4],[-4,5],[-3,3],[-4,3],[-5,4],[-4,4],[-5,3],[-5,4],[-4,3],[-5,4],[-5,4],[-4,3],[-4,4],[-5,5],[-2,3],[-3,4],[-3,5],[-1,3],[-1,5],[-1,5],[-1,4],[0,5],[0,4],[-1,5],[0,6],[-1,5],[-1,5],[0,4],[0,4],[-1,5],[-1,4],[0,5],[-1,4],[-2,5],[-1,5],[-2,5],[-1,4],[-1,4],[-2,4],[-1,4],[-2,5],[-1,4],[-1,4],[-2,5],[-2,4],[-2,3],[-2,4],[-4,4],[-5,3],[-6,1],[-9,1],[-7,1],[-6,1]],[[734,9416],[0,5],[1,7],[1,4],[1,7],[0,5],[1,6],[1,5],[0,6],[1,6],[1,6],[0,5],[0,6],[-1,5],[-4,5],[-6,5],[-5,3],[-5,4],[-6,3],[-6,4],[-6,5],[-7,5],[-6,5],[-5,5],[-5,5],[-5,6],[-3,5],[-4,5],[-2,6],[-2,4],[-3,6],[-1,6],[-1,6],[1,6],[2,5],[4,5],[4,4],[4,5],[5,5],[1,6],[3,6],[2,5],[3,5],[3,5],[4,6],[2,4],[2,5],[3,4],[3,5],[3,5],[2,5],[3,4],[2,4],[2,2],[39,1],[32,1],[14,0],[27,0],[17,1],[43,0],[1,0],[15,1],[9,0],[34,0],[1,0],[13,0],[25,1],[31,0],[7,1],[3,0],[4,0],[34,0],[11,0],[100,2],[19,0],[11,0],[5,0],[5,0],[17,0],[60,1],[47,1],[16,0],[5,0],[1,0],[10,0],[85,2],[4,0]],[[1461,9695],[-4,-7],[-3,-4],[-2,-5],[-3,-4],[-6,-8],[-2,-5],[-3,-4],[-4,-5],[-5,-6],[-3,-5],[-3,-4],[-3,-4],[-2,-3],[-3,-4],[-6,-7],[-3,-4],[-6,-7],[-2,-4],[-6,-7],[-4,-4],[-5,-6],[-6,-5],[-3,-4],[-3,-4],[-3,-4],[-5,-5],[-4,-4],[-5,-5],[-7,-8],[-5,-5],[-3,-3],[-5,-6],[-3,-4],[-4,-5],[-3,-4],[-3,-6],[-4,-5],[-3,-4],[-2,-4],[-4,-5],[-4,-4],[-3,-5],[-5,-5],[-4,-4],[-4,-4],[-4,-3],[-4,-5],[-5,-3],[-6,-4],[-7,-4],[-5,-3],[-5,-2],[-6,-3],[-5,-2],[-7,-3],[-4,-4],[-4,-4],[-3,-4],[-1,-5],[-1,-6],[0,-5],[1,-5],[1,-5],[2,-5],[3,-6],[3,-5],[4,-4],[5,-3],[6,-4],[4,-4],[4,-4],[1,-5],[2,-4],[2,-6],[1,-6],[3,-6],[3,-6],[4,-6]],[[1270,9332],[-13,-1],[-7,0],[-9,0],[-7,-1],[-6,0],[-8,0],[-8,-2],[-7,-1],[-8,-1],[-6,-2],[-6,-2],[-6,-2],[-6,-2],[-6,-3],[-6,-5],[-4,-4],[-4,-3],[-4,-5],[-3,-5],[-2,-3],[-3,-4],[-2,-4],[-3,-4],[-2,-4],[-4,-5],[-5,-6],[-2,-4],[-3,-3],[-3,-4],[-4,-4],[-4,-4],[-4,-4],[-5,-4],[-3,-3],[-5,-5],[-5,-5],[-4,-4],[-3,-4],[-4,-4],[-3,-4],[-4,-4],[-2,-5],[-2,-4],[-2,-4],[-2,-5],[-1,-5],[-1,-4],[-2,-4],[0,-5],[-1,-4],[-1,-4],[-1,-4],[-1,-5],[-1,-5],[-1,-5],[-1,-4],[-1,-4],[-1,-4],[-2,-5],[0,-4],[-2,-4],[-1,-4],[-2,-7],[-3,-5],[-2,-3],[-2,-4],[-2,-4],[-3,-5],[-2,-5],[-2,-3],[-2,-4],[-3,-4],[-3,-5],[-3,-4],[-2,-4],[-3,-4],[-2,-4],[-3,-5],[-3,-4],[-2,-4],[-1,-4],[-2,-4],[-3,-4],[-2,-5],[-1,-5],[-3,-4],[-3,-4],[-3,-4],[-4,-4],[-1,-4],[-1,-4],[-1,-4],[0,-5],[-2,-4],[-3,-5],[-4,-4],[-5,-3],[-6,-2],[-8,0],[-7,0],[-7,2],[-5,2],[-9,3],[-7,3],[-8,3],[-5,3],[-6,3],[-5,3],[-6,3],[-4,3],[-3,3],[-4,4],[-2,5],[-3,5],[-1,4],[-3,5],[-4,4],[-7,3],[-12,4]],[[7791,9403],[6,29],[13,54],[8,33],[12,50],[8,40],[9,36],[6,27]],[[7853,9672],[57,1],[66,2],[136,2],[89,2],[4,0],[115,3],[17,1],[11,0],[3,0],[4,0],[15,0],[6,0],[5,0],[6,0],[5,1],[50,0],[129,2],[150,0],[36,0],[8,0],[25,0],[60,0]],[[8834,9670],[-241,-241],[-13,-13]],[[8580,9416],[-217,-3],[-247,-4]],[[8116,9409],[-140,-3],[-1,0],[-18,0],[-66,-1]],[[7891,9405],[-49,-1],[-51,-1]],[[9344,9442],[-132,-129],[-194,-188]],[[9018,9125],[-424,184],[-84,37]],[[8510,9346],[70,70]],[[7791,9403],[-3,-13],[-8,-36]],[[7780,9354],[-14,0],[-53,-1],[-74,0],[-65,-1],[-69,0],[-70,-1],[-78,-2],[-90,-1],[-190,-2],[-47,-1]],[[7030,9345],[9,39],[9,44],[9,40],[33,147],[12,50]],[[7102,9665],[37,0],[19,1],[39,0],[35,1],[9,0],[31,1],[35,0],[14,0],[198,4],[58,1],[47,1],[81,-2],[42,-1],[34,-1],[13,1],[32,0],[27,1]],[[5213,9672],[9,-29],[11,-36],[12,-40],[11,-37],[10,-36],[11,-36],[13,-43],[11,-37],[9,-33],[6,-19]],[[5316,9326],[-65,0],[-67,-1],[-75,0],[-73,0],[-86,0],[-64,0],[-32,0],[-53,0],[-52,0],[-46,0]],[[4617,9673],[74,-2],[27,0],[13,0],[138,3],[72,1],[7,0],[14,0],[25,0],[142,-1],[41,-1],[32,-1],[11,0]],[[5728,9659],[-12,-38],[-12,-40],[-14,-47],[-14,-48],[-15,-48],[-15,-50],[-17,-57],[-16,-50],[-15,-48],[-20,-63],[-19,-62],[-8,-27],[-11,-40],[-7,-28],[-8,-30],[-5,-17]],[[5520,8966],[-16,0],[-42,0],[-50,-1],[-57,2]],[[5355,8967],[-4,28],[-5,33],[-3,26],[-3,28],[-3,26],[-3,34],[-5,45],[-4,42],[-5,56],[-4,41]],[[5213,9672],[14,0],[28,-1],[6,0],[16,-1],[21,-1],[15,0],[12,-1],[22,-1],[90,-2],[19,0],[26,0],[20,0],[8,0],[23,-1],[101,-2],[23,-1],[47,-1],[24,-1]],[[9846,9253],[-1,-5],[2,-4],[4,-4],[2,-5],[-4,-4],[-6,-1],[-5,3],[-7,2],[-8,-1],[-3,-4],[-5,-6],[-5,-3],[-7,-3],[-13,-6],[-3,-3],[0,-5],[-2,-4],[-6,-2],[-8,-2],[-9,-3],[-5,-3],[0,-5],[4,-5],[7,-2],[5,-3],[-2,-4],[-8,-4],[-4,-3],[-7,-4],[-3,-6],[3,-3],[-8,-2],[-8,1],[-6,-2],[-5,-5],[-5,-5],[-2,-7],[-5,-4],[-7,-2],[-8,-1],[-8,-1],[-5,-5],[-2,-4],[1,-4],[0,-6],[-2,-4],[-7,-2],[-4,-3],[-4,-4],[-6,-5],[-6,-2],[-8,-2],[-8,0],[-10,-1],[-8,-3],[-6,-2],[-6,-3],[-8,-2],[-4,-3],[-6,-6],[-5,-5],[-5,-4],[-3,-4],[1,-4],[2,-4],[4,-5],[4,-4],[3,-4],[-2,-5],[-7,-1],[-7,-2],[-4,-4],[-7,-4],[-6,-4],[-4,-4],[-4,-5],[-1,-5],[1,-4],[4,-4],[5,-3],[4,-5],[4,-5],[4,-7],[1,-5],[2,-6],[-1,-6],[-5,-5],[-6,-4],[-7,-2],[-8,-1],[-7,-7],[-3,-3],[-3,-5],[-2,-6],[-3,-5],[-3,-6],[-2,-6],[-2,-5]],[[9523,8894],[-22,9],[-28,13],[-37,17],[-31,14],[-36,16],[-50,23],[-45,19],[-32,15],[-15,7],[-15,6],[-156,75],[-38,17]],[[838,9025],[-3,-5],[-2,-4],[-2,-4],[-2,-5],[-1,-4],[-1,-5],[-1,-5],[1,-5],[1,-5],[0,-5],[-1,-4],[-1,-5],[-1,-4],[-1,-4],[-2,-5],[-1,-4],[-2,-5],[-2,-5],[-1,-4],[-1,-6],[-1,-4],[0,-4],[0,-5],[0,-4],[1,-4],[2,-4],[2,-5],[3,-4],[3,-5],[4,-4],[4,-5],[3,-5],[1,-4],[2,-5],[-1,-5],[0,-5],[-3,-5],[-4,-5],[-3,-4],[-4,-4],[-3,-5],[-5,-4],[-3,-4],[-3,-4],[-3,-4],[-4,-5],[-1,-4],[-2,-5],[-3,-5],[-3,-5],[-4,-4],[-4,-3],[-6,-2],[-7,-3],[-10,-2]],[[763,8783],[-4,9],[0,6],[-2,5],[-2,5],[-5,4],[-5,2],[-6,2],[-5,3],[-5,4],[-5,4],[-3,4],[-4,4],[-4,4],[-5,4],[-6,4],[-5,3],[-7,3],[-6,3],[-4,3],[-4,4],[-5,5],[-3,3],[-3,4],[-4,3],[-5,3],[-5,3],[-6,3],[-5,2],[-7,3],[-6,2],[-7,2],[-7,3],[-6,2],[-7,3],[-6,3],[-4,3],[-6,3],[-5,4],[-3,4],[-3,4],[-4,4],[-3,4],[-3,4],[-3,4],[-4,3],[-7,1],[-6,2],[-6,3],[-3,4],[0,4],[-1,4],[1,5],[1,4],[1,4],[-5,3],[-5,2],[2,4],[3,4],[0,4],[-3,3],[-3,4],[3,4],[5,3],[3,4],[0,4],[-1,4],[0,5],[-1,3],[0,5],[4,3],[6,2],[4,3],[2,3],[3,4],[5,3],[6,2],[5,2],[5,3],[3,3],[3,4],[4,4],[1,4],[3,4],[2,5],[2,4],[1,5],[2,4],[1,4],[2,4],[1,4],[1,4],[2,6],[1,4],[1,4],[1,4],[2,7],[1,5],[2,6],[2,5],[2,7],[1,4],[2,7],[2,4],[2,7],[1,4],[3,7],[1,5],[2,5],[3,5],[4,6],[3,5],[4,5],[3,5],[4,5],[4,5],[5,5],[5,5],[6,4],[7,4],[6,4],[8,4],[8,3],[8,3],[8,3],[8,3],[6,5],[4,4],[3,6],[2,6],[1,6],[0,5],[0,7],[0,4],[-1,6],[0,5],[0,7],[-1,5],[-1,5],[0,6],[-1,6],[0,5],[0,7],[0,5],[-1,6],[0,5],[0,6],[0,5],[0,9],[0,4],[1,7]],[[8510,9346],[-242,-238],[-93,-84]],[[8175,9024],[-117,54]],[[8058,9078],[-1,30],[59,301]],[[8058,9078],[-65,30],[-17,9],[-17,7]],[[7959,9124],[-10,5],[-38,18],[-51,23],[-24,11]],[[7836,9181],[5,20],[7,28],[8,32],[8,34],[10,41],[10,40],[7,29]],[[7836,9181],[-22,10],[-47,21],[-17,9],[3,13],[7,30],[9,41],[9,40],[2,9]],[[3290,9301],[37,-6],[-11,-23],[-10,-21],[-12,-25],[-10,-21],[-1,-1],[-12,-26],[-10,-21],[-15,-32],[-8,-17],[-10,-24],[-14,-33],[-1,-5],[-7,-17]],[[3206,9029],[-12,2],[-49,8],[-55,8],[-58,9],[-13,2],[-29,4],[-20,3],[-60,8],[-59,7],[-60,8],[-56,7],[-53,6],[-59,7],[-37,6],[-51,6],[-65,9],[-54,8],[-12,2]],[[2404,9139],[-172,20],[-94,100]],[[7959,9124],[-6,-6],[-13,-10],[-40,-34],[-41,-34],[-34,-30],[-35,-30],[-39,-34]],[[7751,8946],[-59,27],[-74,32],[-81,36],[-79,35],[-59,26],[-13,6],[-28,14],[-41,18],[-50,22],[-55,26],[-62,27],[-43,21],[-43,20],[-42,19]],[[7022,9275],[-17,8],[-71,32],[-61,28],[69,1],[71,1],[17,0]],[[9018,9125],[-17,-17],[-187,-186],[-10,-11],[-116,-119]],[[8688,8792],[-55,24]],[[8633,8816],[-39,18],[-81,37]],[[8513,8871],[-338,153]],[[2427,8858],[-13,4],[-50,17],[-566,172],[-186,57],[-62,20],[-97,30]],[[1453,9158],[2,4],[2,5],[2,6],[2,4],[2,5],[0,6],[1,5],[0,4],[1,4],[0,5],[1,5],[0,5],[0,5],[0,6],[0,5],[0,6],[-2,6],[-3,5],[-4,4],[-5,3],[-6,3],[-8,0],[-9,0],[-9,0],[-9,1],[-8,0],[-8,1],[-6,1],[-9,2],[-7,3],[-8,3],[-7,3],[-7,3],[-7,3],[-8,2],[-6,2],[-10,3],[-6,1],[-9,3],[-5,2],[-6,5],[-4,5],[-4,6],[-3,5],[-5,7],[-3,4],[-3,4],[-2,4]],[[1461,9695],[108,2]],[[2404,9139],[-34,-131],[44,-52],[51,-60],[-14,-14],[-3,-4],[-21,-20]],[[1453,9158],[-2,-3],[-3,-6],[-2,-3],[-2,-4],[-1,-5],[-1,-4],[-1,-4],[0,-4],[1,-5],[-1,-6],[0,-4],[-2,-6],[-4,-4],[-4,-5],[-4,-5],[-5,-3],[-4,-4],[-5,-4],[-4,-5],[-2,-4],[-2,-6],[0,-6],[1,-6],[-1,-5],[-2,-4],[-4,-5],[-2,-5],[-2,-4],[-2,-5],[-2,-4],[-1,-4],[-2,-6],[-1,-7],[-1,-6],[-1,-6],[1,-6],[2,-5],[2,-4],[4,-4],[4,-4],[4,-5],[3,-5],[3,-5],[2,-6],[0,-4],[-1,-5],[-2,-5],[-3,-4],[-5,-5],[-6,-5],[-5,-5],[-1,-6],[-1,-5],[0,-5],[-2,-4],[-4,-4],[-6,-4],[-5,-2],[-6,-2],[-8,-2],[-7,-1],[-8,-2],[-8,-2],[-7,-2],[-7,-2],[-7,-2],[-7,-2],[-6,-3],[-5,-2],[-6,-3],[-7,-4],[-6,-3],[-5,-3],[-6,-3],[-6,-4],[-6,-4],[-6,-4],[-5,-3],[-4,-4],[-4,-3],[-4,-4],[-5,-5],[-4,-4],[-4,-3],[-4,-4],[-4,-4],[-3,-4],[-4,-4],[-3,-4],[-3,-4],[-4,-5],[-4,-5],[-4,-6],[-4,-5],[-3,-4],[-3,-4],[-3,-3],[-3,-5],[-4,-4],[-2,-3],[-2,-4],[-3,-4],[-3,-4],[-2,-5],[-3,-4],[-7,-6]],[[1140,8713],[-7,-3],[-6,-3],[-7,-3],[-7,-2],[-6,-2],[-6,-2],[-6,-1],[-10,-3],[-7,-2],[-7,-2],[-8,-2],[-7,-2],[-9,-2],[-9,-3],[-7,-1],[-9,-2],[-7,-2],[-7,-1],[-6,-2],[-6,-2],[-4,-4],[-3,-5],[-2,-4],[-2,-4],[-4,-4],[-4,-4],[-8,-3],[-5,-2],[-6,-2],[-7,-3],[-6,-2],[-6,-3],[-5,-3],[-5,-2],[-6,-3],[-6,-2],[-6,-2],[-8,-2],[-8,-2],[-6,-2],[-7,-3],[-5,-3],[-5,-4],[-4,-3],[-3,-3],[-1,-4],[-3,-5],[-5,-3],[-10,-2],[-7,1],[-9,2],[-6,1],[-7,0],[-8,1],[-9,0],[-9,1],[-9,2],[-9,1],[-9,0],[-7,0],[-8,1],[-7,-1],[-8,0],[-6,0],[-7,0],[-8,2],[-7,2],[-5,3],[-2,5],[-4,4],[-3,3],[-5,4],[-4,3],[-6,3],[-6,4]],[[671,8625],[2,4],[1,4],[3,4],[4,4],[2,5],[3,4],[2,4],[2,5],[2,5],[2,5],[2,5],[2,4],[3,4],[4,4],[6,4],[6,4],[7,3],[6,4],[4,2],[7,4],[5,4],[5,3],[5,4],[3,5],[2,4],[2,5],[1,4],[0,5],[0,5],[0,6],[0,4],[0,5],[-1,5],[-1,5],[0,5],[1,7]],[[4001,8957],[-4,0],[-1,-1],[-2,-1],[-2,-3],[-2,-1],[-2,0],[-3,0],[-6,0],[-10,0],[-9,1],[-8,2],[-7,1],[-35,-1],[-14,-1],[-57,-2],[-42,-1],[-56,-2],[-45,-2],[-16,1],[-30,1],[-29,2],[-41,2],[-43,2],[-32,1],[-18,0],[-46,0],[-37,-1],[-55,-1],[-144,-1]],[[3205,8952],[25,73],[-24,4]],[[4031,9305],[4,-23],[6,-41],[4,-28],[5,-31],[5,-31],[4,-28],[3,-15],[6,-36],[5,-36],[6,-38],[6,-38],[-56,-2],[-28,-1]],[[5355,8967],[4,-28],[-81,-1],[-96,0],[-110,-1],[-105,-1],[-81,0],[-12,0],[-46,-1],[-55,0],[-54,0]],[[4719,8935],[-1,11],[-4,41],[-4,43],[-5,48],[-4,30],[-2,14],[-3,35],[-3,30],[-3,33],[-4,32],[-3,29],[-2,24],[-2,19]],[[7751,8946],[-46,-30],[-37,-30],[-45,-36],[-14,-11],[-29,-23],[-40,-32],[-49,-39],[-11,-9]],[[7480,8736],[-37,16],[-43,20],[-42,19],[-15,8],[-47,20],[-50,22],[-52,23],[-43,19]],[[7151,8883],[-7,4],[-50,23],[-48,22],[-53,25],[-53,24],[-60,28],[-57,27],[-47,22],[-11,5]],[[6765,9063],[18,15],[16,13],[13,10],[9,7],[22,19],[33,27],[34,28],[40,33],[46,38],[26,22]],[[2427,8858],[27,-9],[79,-26],[-71,-19],[-48,-12],[-14,-4],[-408,-113]],[[1992,8675],[-196,61],[-74,23],[-48,15],[-72,-57],[-3,-3],[-3,-4],[-2,-3],[-1,-5],[-2,-4],[-4,-4],[-5,-4],[-4,-3],[-7,-3],[-6,-4],[-6,-2],[-8,-3],[-7,-2],[-6,-3],[-6,-2],[-8,-4],[-5,-3],[-5,-2],[-7,-3],[-6,-4],[-5,-3],[-5,-4],[-5,-3],[-5,-4],[-7,-5],[-5,-3],[-5,-4],[-7,-5],[-5,-4],[-5,-3],[-5,-4],[-4,-3],[-5,-4],[-5,-3],[-5,-4],[-5,-3],[-4,-4],[-7,-4],[-5,-3],[-4,-4],[-32,-26],[-17,-16],[-23,-24],[-21,-22],[-14,-15],[-11,-12]],[[1280,8463],[-105,116],[-3,3],[-2,4],[-4,4],[-3,4],[-3,5],[-4,5],[-4,5],[-2,3],[-4,5],[-2,5],[-3,5],[-2,4],[-3,5],[-1,4],[-1,5],[-1,4],[-1,6],[-1,5],[0,4],[0,5],[1,6],[0,5],[1,5],[2,4],[2,5],[1,5],[1,3],[2,4],[-1,7]],[[1910,8825],[34,-10],[-8,-9],[20,-6],[-4,-4],[9,-2],[-4,-4],[7,-1],[-3,-4],[-3,2],[-7,-7],[2,-1],[-1,-1],[-2,1],[-9,-10],[4,-1],[5,-1],[19,20],[2,-1],[7,8],[14,-4],[7,8],[19,-5],[2,3],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[9,-1],[3,5],[-5,1],[3,5],[12,-4],[2,3],[-6,2],[8,10],[-1,0],[7,14],[-1,0],[1,2],[3,12],[-3,7],[11,12],[-2,1],[4,4],[-2,0],[2,2],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-10,1],[-11,3],[0,-1],[-10,2],[1,2],[-2,5],[2,9],[-28,5],[-2,-9],[-6,1],[-4,-6],[-33,11],[-19,-21],[-1,-2],[-11,5],[-3,-4],[-4,1],[-17,-33],[-2,-14]],[[7151,8883],[-53,-44],[-62,-53],[-66,-55],[-22,-18]],[[6948,8713],[-39,12],[-52,17],[-57,18],[-60,19],[-13,4],[-38,12],[-56,18],[-51,16],[-54,17],[-57,18],[-57,18],[-49,16]],[[6365,8898],[12,14],[15,19],[-23,7]],[[6369,8938],[12,14],[17,19],[21,25],[26,29],[24,29],[24,27],[23,27],[10,9],[16,19],[17,22]],[[6559,9158],[48,-22],[42,-19],[21,-9],[16,-8],[29,-14],[25,-11],[25,-12]],[[3097,8529],[-22,4],[-43,5],[-24,3],[-72,10],[-61,8],[-55,7],[-54,6],[-49,6],[-39,5],[-45,5],[-42,6],[-41,6],[-46,6],[-43,6],[-44,6],[-29,5]],[[2388,8623],[-396,52]],[[3205,8952],[-15,-49],[-9,-37],[-5,-20],[-15,-59],[-13,-41],[-8,-26],[23,-3],[-19,-55],[-7,-21],[-3,-8],[-7,-20],[-30,-84]],[[9523,8894],[-5,-5],[-6,-1],[-3,4],[-6,1],[-4,-2],[-8,-3],[-6,-3],[-9,-2],[-6,-3],[-7,-3],[-3,-4],[-6,-9],[-4,-5],[-4,-4],[-1,-4],[1,-4],[5,-5],[4,-3],[7,-2],[6,-2],[3,-3],[3,-4],[7,-3],[5,-4],[2,-5],[-4,-4],[-3,-4],[-2,-3],[-2,-4],[-4,-3],[-3,-5],[-3,-4],[-1,-5],[0,-5],[1,-5],[4,-5],[2,-5],[-4,-4],[-2,-3],[-2,-5],[-6,-3],[-5,-2],[-4,-4],[-4,-4],[-4,-3],[-3,-5],[-2,-4],[-8,-2],[-7,1],[-7,2],[-7,-3],[-9,-3],[-6,0],[-8,-2],[-7,-2],[-7,-1],[-5,-2],[-5,-4],[-5,-5],[-4,-3],[-1,-6],[3,-4],[3,-4],[-2,-4],[-9,-3],[-6,-1],[-6,-2],[-7,-3],[-2,-4],[-3,-4],[-2,-5],[-4,-4],[-7,-4],[-5,-4],[-6,-3],[-9,-3],[-7,0],[-6,-2],[-3,-5],[-2,-5],[-2,-4],[-4,-4],[2,-5],[1,-4],[-6,-3],[-6,-3],[-4,-4],[-7,1],[-6,-1],[-8,-2],[-8,-2],[-6,-2],[-4,-3],[-5,-2],[-8,0],[-6,0],[-8,-1],[-6,-2],[-4,-3],[-4,-4],[-4,-7]],[[9168,8578],[-46,20],[-55,24],[-379,170]],[[8513,8871],[-220,-167],[16,-24],[-136,-102],[-20,-17],[-27,-23],[-30,-27],[-36,-31]],[[8060,8480],[-40,18],[-44,20],[-25,11],[-59,26],[-53,23],[-17,8],[-40,18],[-49,22],[-56,25],[-21,9]],[[7656,8660],[-29,13],[-50,21],[-52,22],[-45,20]],[[6365,8898],[-20,-25],[-2,-2],[-22,-26],[-18,-22],[-8,-9],[-24,-29],[-29,-34],[-29,-34],[-27,-32],[-29,-35],[-24,-29],[-11,-13],[-11,-13],[-4,-5]],[[6107,8590],[-17,5],[-58,18],[-57,19],[-73,23],[-63,20],[-64,21],[-76,24],[-80,25],[-60,19],[-9,3]],[[5550,8767],[-46,14],[8,11],[26,31],[26,33],[35,43],[28,35],[28,34]],[[5655,8968],[20,0],[40,1],[32,39],[29,35],[29,36],[14,16],[10,13]],[[5829,9108],[55,-19],[64,-20],[73,-23],[70,-22],[31,-10],[44,-14],[44,-14],[56,-17],[57,-17],[46,-14]],[[5550,8767],[-16,-18],[-16,-20],[-14,-16],[-29,-33],[-35,-40],[-31,-37],[-21,-25],[-21,-25],[-24,-29],[-27,-31],[-25,-31]],[[5291,8462],[-24,8],[-55,17],[-57,17],[-69,22],[-63,19],[-64,20],[-44,13],[-16,6],[-13,4],[-7,1],[-25,8],[-39,12],[-31,10],[-45,14],[-50,15],[-54,17],[-54,17],[-48,14],[-40,13]],[[4493,8709],[18,18],[41,41],[42,41],[35,36],[37,36],[28,28],[25,26]],[[5520,8966],[22,1],[34,0],[44,1],[35,0]],[[4002,8801],[-99,2],[-41,1],[-1,0],[-36,1],[-39,1],[-7,0],[-28,1],[-20,-13],[-53,-36],[-15,-10],[2,-14],[3,-41],[0,-5]],[[3668,8688],[-22,2],[-23,3],[-3,-10],[-3,-10],[-3,-9],[-3,-9],[-3,-12],[-3,-7],[-14,2],[-22,2],[-13,2],[-7,-22],[-2,-7],[-3,-10],[-2,-5],[-7,-24],[-3,-8],[-1,-5],[-2,-6],[-2,-6],[-25,3],[-3,-9],[-3,-9],[-1,-5],[-2,-6],[-3,-9],[-3,-8],[-4,-12],[-2,-8]],[[3481,8486],[-27,-1],[-48,6],[-49,6],[-54,7],[-63,8],[-71,9],[-52,6],[-20,2]],[[4001,8957],[1,-50],[0,-27],[0,-29],[0,-20],[0,-30]],[[7656,8660],[-22,-17],[-22,-19],[-16,-14],[-18,-15],[-16,-13],[-5,-4],[-35,-29],[-43,-36],[-38,-32],[-42,-35],[-32,-26],[-9,-7],[-18,-16],[-19,-17],[-22,-19]],[[7299,8361],[-24,10],[-52,22],[-68,29],[-57,25],[-62,26],[-60,25],[-64,28],[-76,32],[-46,19]],[[6790,8577],[24,22],[41,35],[56,47],[37,32]],[[8633,8816],[28,-53],[109,-185],[6,-12],[11,-19],[8,-15],[14,-23],[14,-24],[9,-16],[8,-13]],[[8840,8456],[6,-14],[15,-31],[20,-42],[16,-34],[18,-37],[19,-40],[17,-36],[15,-31],[12,-24],[13,-32],[12,-28],[11,-25],[12,-27]],[[9026,8055],[-35,17],[-40,18],[-33,16],[-25,12],[-19,8],[-27,12],[-34,15],[-46,20],[-53,23],[-36,16],[-14,7]],[[8664,8219],[-26,11],[-44,19],[-35,16],[-49,20],[-43,19],[-48,21],[-52,22],[-52,22],[-62,27],[-73,31],[-19,8]],[[8161,8435],[-26,12],[-63,28],[-12,5]],[[9168,8578],[6,-3],[5,-4],[7,-2],[8,-2],[7,-5],[3,-5],[1,-4],[1,-5],[-6,-2],[0,-5],[2,-5],[2,-4],[2,-5],[1,-4],[0,-5],[-2,-3],[-2,-9],[-1,-6],[0,-5],[0,-5],[2,-5],[6,-3],[6,-2],[6,1],[6,2],[5,3],[6,2],[7,0],[0,-5],[-3,-5],[-2,-6],[-1,-4],[-2,-4],[2,-5],[8,-3],[10,-4],[7,-3],[4,-3],[0,-3],[2,-4],[3,-5],[6,-3],[7,-5],[4,-5],[5,-5],[4,-5],[3,-6],[5,-5],[5,-2],[9,-2],[6,-3],[5,-4],[4,-4],[1,-5],[-2,-4],[-6,-4],[-3,-3],[-2,-5],[3,-4],[7,-3],[6,-2],[11,-1],[7,-2],[3,-4],[-7,-2],[-6,-2],[-3,-5],[-4,-3],[-2,-4],[4,-4],[3,-7],[0,-7],[3,-6],[5,-5],[4,-4],[2,-5],[-1,-4],[-2,-5],[-4,-3],[-6,-3],[0,-6],[6,-4],[7,-2],[6,-2],[8,1],[7,-3],[4,-4],[9,-3],[9,0],[9,1],[6,-1],[4,-3],[-2,-5],[-5,-2],[-11,-3],[-7,0],[-5,-3],[0,-5],[3,-4],[3,-4],[4,-4],[1,-4],[1,-5],[0,-4],[-5,-4],[-8,-4]],[[9392,8202],[-19,8],[-19,9],[-22,11],[-18,8],[-20,9],[-19,9],[-21,9],[-26,13],[-16,7],[-8,4],[-20,10],[-25,11],[-26,12],[-30,13],[-33,15],[-31,15],[-33,15],[-33,14],[-28,13],[-27,13],[-26,11],[-28,13],[-24,12]],[[4002,8801],[37,-1],[23,-1],[49,-1],[23,-1],[25,-1],[30,0],[76,-3],[47,-1],[10,0],[-13,-16],[-2,-4],[4,-2],[5,-1],[10,-4],[11,-5],[18,-7],[6,-2],[3,-2],[36,-14]],[[4400,8735],[-69,-76],[-56,-65],[-59,-69],[-9,-10],[-17,-20],[-104,-121]],[[4086,8374],[-214,67],[-11,3]],[[3861,8444],[-31,10],[-150,49],[-8,144],[-2,28],[-2,13]],[[1992,8675],[42,-97],[189,-419]],[[2223,8159],[-320,106],[-286,90],[-6,2],[-33,11],[-115,36],[-39,13],[-38,12],[-106,34]],[[5823,8251],[-12,4],[-41,12],[-49,16],[-59,19],[-55,17],[-62,19],[-41,14],[-31,10],[-42,13],[-50,15],[-61,19],[-59,19]],[[5261,8428],[25,28],[5,6]],[[6107,8590],[-5,-6],[-5,-6],[-21,-25]],[[6076,8553],[-4,-5],[-34,-40],[-37,-45],[-37,-43],[-35,-43],[-34,-40],[-34,-41],[-32,-37],[-6,-8]],[[1280,8463],[-2,-11],[0,-8],[-1,-7],[0,-6],[-1,-9],[2,-7],[-1,-7],[1,-8],[1,-7],[2,-7],[1,-7],[0,-8],[1,-8],[0,-8],[-1,-6],[0,-6],[1,-8],[0,-7],[0,-12]],[[1283,8316],[-105,-9],[-224,-17],[-266,-20],[-115,-9]],[[573,8261],[-1,4],[1,4],[6,2],[9,1],[8,3],[1,4],[-1,6],[-4,6],[-3,3],[-5,4],[-2,4],[5,3],[7,3],[8,3],[4,3],[3,4],[2,6],[3,4],[4,4],[3,4],[3,4],[2,5],[-4,4],[-7,1],[-6,1],[-5,2],[-2,4],[2,5],[1,5],[0,7],[0,7],[0,6],[-1,5],[-1,4],[1,6],[1,4],[1,5],[0,5],[-1,6],[0,6],[0,5],[1,5],[-2,7],[1,5],[0,4],[1,5],[0,4],[0,6],[1,6],[0,7],[0,7],[0,7],[0,6],[0,7],[0,7],[-2,7],[0,5],[-1,6],[-1,4],[1,5],[2,5],[3,4],[4,5],[3,4],[4,4],[4,3],[5,4],[5,3],[4,3],[5,3],[3,4],[4,4],[5,5],[3,3],[2,5],[3,4],[2,5],[2,5],[2,4],[2,5]],[[3861,8444],[-2,-2],[-4,-4],[-3,-5],[-9,-10],[-4,-6],[-3,-3],[-3,-4],[-3,-4],[-4,-4],[-4,-6],[-8,-9],[-9,-12],[-9,-10],[-5,-6],[-6,-8],[-5,-6],[-3,-4],[-4,-4],[-9,-11],[-4,-6],[-4,-4],[-6,-7],[-6,-8],[-4,-5],[-4,-5],[-3,-4],[-4,-4],[-4,-5],[-4,-5],[-8,-10],[-6,-8],[-5,-5],[-5,-6]],[[3697,8244],[-14,4],[-9,3],[-11,4],[-17,5],[-8,3],[-16,5],[-8,2],[-18,6],[-8,2],[-6,3],[-9,2],[-7,2],[-6,2],[-14,5],[-5,1],[-6,2],[-8,3],[-6,2],[-9,2],[-23,8],[-12,3],[-11,4],[-15,4],[-11,4],[-6,1]],[[3434,8326],[1,5],[3,11],[0,8],[4,3],[1,5],[1,4],[2,7],[1,5],[2,5],[1,5],[1,5],[2,8],[2,4],[1,4],[4,13],[3,10],[3,10],[1,4],[2,4],[1,5],[3,7],[1,5],[3,8],[1,5],[3,10]],[[2388,8623],[26,-30],[13,-15],[367,-424]],[[2794,8154],[-11,-4],[-5,-3],[-4,-3],[-2,-4],[-1,-4],[3,-4],[4,-4],[7,-5],[4,-3],[-3,-4],[-11,-3],[5,-5],[8,-7],[-12,-10],[13,-8]],[[2789,8083],[-24,3],[-1,0],[-35,5],[-7,1],[-26,3],[-49,7],[-46,6],[-1,0],[-22,3],[-1,0],[-10,2],[-13,1],[-36,5],[-4,1],[-8,1],[-9,1],[-4,1],[-21,2],[-1,1],[-5,0],[-23,4],[-3,0],[-4,1],[-18,2],[-16,2],[-1,0],[-35,4],[-6,1],[-18,3],[-1,0],[-73,10],[-23,3],[-20,3]],[[2225,8159],[-2,0]],[[8161,8435],[-21,-17],[-24,-20],[-34,-27],[-28,-24],[-33,-27],[-24,-20],[-22,-17],[-34,-28],[-32,-26],[-32,-26],[-35,-28],[-43,-34]],[[7799,8141],[-38,17],[-6,2],[-40,18],[-31,14],[-11,5],[-6,2],[-15,7],[-20,9],[-28,12],[-17,7],[-33,15],[-47,20],[-19,10]],[[7488,8279],[-57,25],[-73,33],[-32,12],[-27,12]],[[3434,8326],[-14,5],[-6,2],[-50,15],[-48,15],[-26,8],[-11,3],[-13,4],[-17,5],[-35,11],[-10,3],[-19,6],[-36,10],[-14,-16],[-8,-10],[-4,-4],[-5,-6],[-4,-4],[-6,-7],[-3,-4],[-12,-14],[-7,-9],[-13,-15],[-6,-6],[-16,-19],[-10,-12],[-4,-4],[-8,-9],[-13,-16],[-6,-6],[-5,-6],[-5,-5],[-6,-8],[-4,-4],[-5,-6],[-3,-4],[-13,-14],[-3,-4],[-5,-6],[-10,-12],[-5,-5],[-6,-1],[-6,-3],[-7,-4],[-8,-5],[-6,-4],[-7,-5],[-4,-3],[-3,-6],[-3,-5],[-5,-3],[-6,-2],[-7,0],[-8,0],[-6,2],[-7,1],[-11,-2],[-7,-2],[-7,0],[-6,0],[-8,2],[-5,2],[-4,4],[-3,4],[-4,3],[-8,3]],[[6914,8303],[-58,17],[-51,15],[-65,20],[-10,2],[-40,12],[-56,16]],[[6634,8385],[-62,19],[-81,24],[-73,22],[-69,21],[-84,25],[-85,25],[-58,18],[-25,8],[-21,6]],[[6790,8577],[12,-28],[15,-33],[16,-35],[19,-40],[18,-41],[19,-42],[22,-50],[3,-5]],[[7488,8279],[-9,-28],[-14,-40],[-7,-18],[-2,-5],[-3,-10],[-3,-10],[-1,-1],[-1,-5],[-2,-4],[-2,-7],[-2,-5],[-3,-7],[-2,-7],[-2,-4],[-3,-9],[-2,-6],[-2,-5],[-3,-8],[0,-1],[-2,-6],[-2,-5],[-11,-29],[-7,-19],[-2,-9],[-2,-4],[-14,-44],[-3,-9],[-3,-6],[-11,-34],[-6,-18],[-6,-16]],[[7356,7900],[-46,6],[-67,9],[-56,6],[-62,8],[-55,6]],[[7070,7935],[-11,28],[-12,29],[-12,30],[-8,20]],[[7027,8042],[-2,6],[-27,65],[-20,48],[-20,45],[-23,52],[-21,45]],[[6634,8385],[-20,-28],[-25,-29],[-26,-32],[-25,-30],[-23,-27],[-25,-30],[-26,-31],[-23,-27],[-23,-30],[-23,-27],[-25,-32],[-12,-14],[-4,-4]],[[6354,8044],[-34,11],[-20,6],[-8,2],[-26,8],[-54,16],[-82,25],[-23,7],[-9,3],[-20,7],[-17,5],[-7,2],[-12,4],[-9,3],[-23,7],[-18,6],[-12,4],[-13,4],[-35,11],[-44,13],[-6,2],[-23,7],[-38,12],[-26,8]],[[5795,8217],[7,9],[21,25]],[[2225,8159],[-13,-14],[-21,-24],[-24,-28],[-17,-20],[-23,-27],[-3,-3],[-3,-4],[-6,-7],[-6,-6],[-12,-14],[-9,-11],[-12,-13],[-5,-6],[-4,-5],[-5,-6],[-6,-6],[-5,-6],[-2,-3],[-2,-2],[-10,-12],[-17,-18],[-32,-37],[-8,-9],[-9,-10],[-2,-3],[-4,-5],[-1,0],[-4,-5],[-12,-13],[-11,-14],[-9,-11]],[[1928,7817],[-28,9],[-87,28],[-100,32],[-15,5],[-28,9],[-25,8],[-22,7],[-40,12],[-26,8],[-72,23],[-6,1],[-47,15],[-3,1],[-1,-1],[-1,-2],[-4,-7],[-7,-6],[-6,-3],[-7,0],[-8,2],[-7,2],[-10,2],[-12,2],[-9,0],[-9,-1],[-10,1],[-7,2],[-6,3],[-7,3],[-9,3],[-10,4],[-7,5],[-4,3],[-6,4],[-6,4],[-8,3],[-6,1],[-15,-1],[-6,-2],[-7,-2],[-7,-4],[-73,-3]],[[1154,7987],[-1,11],[-1,9],[-2,11],[-1,10],[-2,10],[-1,11],[-1,9],[0,10],[1,7]],[[1146,8075],[3,9],[3,6],[4,8],[4,7],[5,6],[5,7],[8,4],[10,2],[13,2],[11,3],[14,4],[11,4],[11,5],[8,5],[3,6],[1,7],[0,8],[0,8],[-1,8],[0,9],[0,7],[-1,8],[0,7],[0,8],[-1,8],[0,6],[0,9],[3,8],[1,6],[3,7],[3,7],[3,8],[4,7],[3,8],[3,8],[2,6],[1,5]],[[8664,8219],[-9,-7],[-16,-14],[-15,-12],[-17,-14],[-13,-11],[-35,-29],[-34,-28],[-29,-24],[-21,-18],[-16,-14],[-30,-25],[-26,-22],[-29,-26],[-28,-24],[-19,-14],[-15,-12],[-10,-6]],[[8302,7919],[-31,13],[-46,19],[-54,23],[-36,14]],[[8135,7988],[-35,16],[-9,5],[-49,23],[-13,6],[-40,17],[-106,48],[-7,3],[-5,3],[-19,8],[-12,5],[-27,12],[-8,4],[-6,3]],[[5795,8217],[-18,-20],[-7,-8],[-9,-10],[-8,-10],[-9,-10],[-3,-3],[-4,-6],[-8,-9],[-9,-10],[-7,-9],[-7,-8],[-3,-4],[-4,-4],[-9,-11],[-7,-9],[-5,-6],[-11,-13],[-9,-10],[-8,-10],[-3,-3],[-8,-10],[-9,-10],[-12,-14],[-10,-11],[-9,-11],[-5,-7],[-7,-7],[-4,-5],[-6,-7],[-22,-26],[-11,-12],[-10,-12]],[[5534,7912],[-13,2],[-17,5],[-23,7],[-56,18],[-69,21],[-74,24],[-74,23],[-73,22],[-44,14],[-23,7],[-28,9],[-36,12],[-35,11]],[[4969,8087],[25,29],[4,5]],[[4998,8121],[36,42],[34,40],[42,49],[36,42],[31,36],[28,33],[29,33],[27,32]],[[3649,7907],[-3,-7],[-6,-7],[-17,-20],[-16,-19],[-8,-9],[-17,-20],[-23,-27],[-9,-11]],[[3550,7787],[-36,-49],[-5,-6],[-3,-5],[-5,-6],[-3,-4],[-20,-25],[-25,5],[-15,3],[-33,6],[-37,7],[-17,3]],[[3351,7716],[-19,4],[-65,13],[-8,6],[-2,2],[-77,61],[-16,13],[-13,9],[-20,17],[-6,4],[-13,11],[-1,0],[-9,8],[-14,13],[-1,1],[-16,13],[-2,2],[-1,1],[-52,44],[-7,7],[-23,19],[-33,29],[-36,30],[-13,12],[-3,2],[-8,6],[-8,7],[-1,0],[-16,15],[-11,9]],[[2857,8074],[-3,0],[-26,3],[-1,1],[-34,4],[-4,1]],[[3697,8244],[-9,-13],[-4,-4],[-6,-7],[-4,-5],[-6,-8],[-9,-11],[-4,-5],[-12,-14],[-3,-3],[-11,-14],[-4,-5],[-5,-5],[-8,-11],[-13,-15],[-3,-4],[-8,-10],[-8,-10],[13,-4],[8,-2],[14,-4],[9,-3],[6,-2],[10,-3],[7,-2],[11,-3],[9,-3],[12,-3],[14,-5],[24,-7],[10,-3],[15,-4],[13,-4],[9,-3],[-3,-4],[-5,-6],[-5,-6],[-4,-5],[-9,-10],[-6,-8],[-6,-7],[-8,-10],[-3,-3],[-9,-11],[-6,-7],[-7,-8],[-7,-8],[-9,-11],[-5,-7],[-12,-14],[-3,-3],[-8,-10]],[[7027,8042],[-10,-12],[-25,-27],[-38,-44],[-44,-49],[-25,-28],[-61,17],[-43,12],[-41,12],[-49,15],[-204,63],[-92,29],[-41,14]],[[1154,7987],[-2,-8],[-2,-8],[-4,-8],[-6,-10],[-7,-6],[-8,-8],[-8,-7],[-9,-6],[-11,-5],[-8,-4],[-11,-5],[-16,-6],[-10,-4],[-12,-5],[-9,-3],[-13,-5],[-10,-3],[-12,-4],[-14,-5],[-12,-4],[-14,-4],[-14,-5],[-15,-4],[-14,-4],[-10,-2],[-10,-2],[-16,-5],[-24,-6],[-11,-2],[-15,-4],[-17,-4],[-18,-4],[-10,-2],[-18,-4],[-14,-2],[-13,-3],[-17,-4],[-11,-2],[-9,-2],[-11,-3],[-12,-3],[-14,-2],[-10,-2],[-11,-3],[-10,-2],[-10,-2]],[[622,7791],[-43,34],[-4,3],[-6,4],[-5,3],[-4,4],[-2,4],[-1,5],[1,4],[-1,4],[0,4],[-2,4],[-2,5],[-2,3],[-4,5],[-3,3],[-4,3],[-4,4],[-4,3],[-5,4],[-2,4],[1,5],[3,3],[5,3],[4,3],[4,3],[5,4],[2,4],[2,4],[0,5],[0,4],[-2,4],[-2,4],[-4,4],[-4,4],[-4,4],[-3,4],[-3,5],[-2,4],[-2,5],[-1,3],[0,4],[-1,5],[-1,4],[-3,4],[-4,3],[-6,3],[-7,4],[-5,3],[-5,3],[-5,3],[-3,5],[-1,4],[1,5],[3,4],[4,3],[3,5],[3,4],[1,4],[2,4],[1,5],[0,4],[1,5],[1,4],[1,4],[-1,4],[-1,5],[-2,4],[-2,4],[0,4],[3,4],[5,3],[5,2],[5,2],[7,3],[6,3],[5,3],[5,3],[-3,4],[-3,3],[-5,4],[-4,3],[-4,3],[-4,3],[-5,3],[3,4],[5,2],[6,3],[5,3],[4,4],[3,3],[4,4],[2,4],[-1,4],[-3,4],[-1,4],[0,5],[5,3],[5,3],[4,4],[1,4],[4,4],[4,4],[6,2],[7,0],[7,0],[3,4],[-1,4],[0,5],[-3,3],[-5,3],[-4,4],[-2,4],[2,4],[3,4],[2,4],[1,4],[-1,5],[-3,5]],[[9026,8055],[14,-7],[44,-18],[42,-18],[33,-14],[14,-6]],[[9173,7992],[-26,-22],[-33,-28],[-44,-37],[-49,-42],[-38,-32],[-48,-40],[-41,-34],[-41,-33],[-50,-41]],[[8803,7683],[-19,8],[-43,21],[-43,20],[-52,24],[-52,25],[-31,14],[-40,19],[-50,23],[-42,19],[-48,22],[-43,22],[-38,19]],[[6354,8044],[-22,-31],[-9,-10],[-19,-21],[-12,-13],[-6,-7],[-9,-11],[-13,-14],[-17,-19],[-9,-11],[-14,-16],[-24,-27],[-18,-21]],[[6182,7843],[-15,-17],[-6,-8],[-22,-25],[-3,-3],[-31,-36],[-4,-5],[-4,-5],[-5,-5],[-11,-13],[-3,-4],[-5,-6],[-11,-12],[-6,-6]],[[6056,7698],[-11,4],[-13,4],[-6,2],[-48,15],[-20,6],[-25,9],[-46,15],[-13,4],[-17,6],[-15,5],[-30,9],[-15,5],[-15,4],[-39,13],[-10,3],[-59,18],[-26,8],[-7,3],[-37,11],[-30,9],[-10,3],[-10,3],[-11,4],[-36,14]],[[5507,7875],[11,17],[16,20]],[[7858,7763],[-41,19],[-26,12],[-11,5],[-32,14],[-3,-2],[-14,6],[-8,-5],[-10,6],[-3,-5],[-24,10],[-3,0]],[[7683,7823],[4,14],[2,7],[2,7],[3,7],[-7,1],[-6,0],[-11,2],[-10,1],[-7,1],[-20,2],[-25,3],[-8,1],[-48,6],[-21,3],[-21,3],[-51,7],[-14,2],[-14,1],[-64,8],[-11,1]],[[8135,7988],[-36,-29],[-24,-19],[-10,-8],[-28,-23],[-4,-3],[-25,-21],[-22,-17],[-20,-16],[-8,-6],[-11,-9],[-52,-42],[-37,-32]],[[2857,8074],[-19,-20],[-10,-12],[-6,-6],[-1,-1],[-11,-13],[-13,-14],[-6,-8],[-1,0],[-6,-7],[-2,-3],[-22,-24],[-4,-6],[-4,-4],[-3,-3],[-4,-5],[-1,0],[0,-1],[-7,-8],[-5,-6],[-1,-1],[-1,-1],[-2,-3],[-2,-2],[-3,-3],[-2,-3],[-2,-2],[-2,-2],[0,-1],[-2,-2],[-1,0],[-1,-2],[-1,-1],[-8,-8],[-1,-1],[-4,-5],[-2,-2],[-3,-3],[0,-1],[-9,-10],[-3,-4],[-10,-11],[-27,-31],[-18,-20],[-1,-1],[-5,-6],[-10,-11],[-7,-9],[-20,-21],[-5,-6],[-8,-9],[-16,-20]],[[2555,7731],[-1,0],[-1,1],[-22,3],[-2,0],[-2,0],[-2,1],[-23,3],[-40,5],[-32,4],[-13,2],[-7,1],[-18,2],[-1,0],[-29,4],[-45,6],[-13,2],[-34,5],[-1,0],[-13,2],[-37,5],[-12,1],[-2,1],[-18,2],[-19,3],[-17,2],[-9,1],[-1,1],[-21,2],[-15,2],[-1,1],[-22,3],[-62,8],[-5,1],[-34,4],[-7,1],[-10,2],[-3,0],[-5,1],[-10,1],[-5,1],[-13,2]],[[4141,7958],[-16,-19],[-13,5],[-9,2],[-23,7],[-5,-6],[-6,-6],[-5,-6],[-7,-8],[-32,-35],[-10,-12],[-5,-6],[-10,-12],[-9,-10],[-10,-10],[-1,0],[-3,1],[-12,1],[-1,0],[-9,2],[-29,4],[-27,3],[-15,2],[-19,3],[-17,2],[-18,5],[-15,5],[-6,2],[-13,4],[-14,4],[-15,5],[-17,5],[-9,-11],[-13,4],[-10,3],[-16,5],[-12,4],[-13,4],[-9,3],[-3,1],[-9,2],[-7,2]],[[4086,8374],[17,-5],[9,-3],[26,-7],[11,-4],[17,-5],[31,-10],[15,-4],[21,-6],[28,-8],[27,-8],[20,-6],[19,-6],[10,-3],[6,-2],[16,-5],[12,-3],[14,-5],[8,-2],[11,-4]],[[4404,8278],[-3,-3],[-14,-18],[-3,-4],[-8,-9],[-10,-12],[-4,-4],[-4,-5],[-2,-3],[-4,-5],[-3,-3],[-3,-4],[-3,-4],[-4,-4],[-3,-5],[-18,-22],[-9,-10],[-3,-4],[-4,-5],[-4,-5],[-4,-4],[-12,-15],[-4,-5],[-3,-4],[-4,-5],[-7,-8],[-3,-4],[-10,-12],[-5,-6],[-10,-13],[-11,-12],[-3,-4],[-5,-6],[-5,-6],[-6,-8],[-7,-8],[-5,-6],[-5,-7],[-5,-5],[-3,-4],[-6,-7],[-7,-9],[-6,-8],[-5,-6],[-5,-5],[-5,-6],[-6,-8]],[[5507,7875],[-37,-42],[-46,-52],[-39,-43],[-44,-49],[-32,-37],[-42,-47],[-26,-30],[-4,-4],[-6,-2]],[[5231,7569],[-35,12],[-6,2],[-13,4],[-31,11],[-12,4],[-6,2],[-11,4],[-13,4],[-13,4],[-19,6],[-31,9],[-10,3],[-38,12],[-30,9],[-12,3],[-10,4],[-9,2],[-7,3],[-66,20],[-25,8],[-16,5],[-8,2],[-15,6],[-13,4],[-6,2],[-27,8],[-18,6],[-18,6],[-7,2],[-9,3],[-10,5]],[[4687,7744],[13,15],[4,5],[5,6],[30,36],[8,8],[10,12]],[[4757,7826],[23,28],[38,47],[36,44],[32,39],[19,24],[15,19],[14,16],[3,5],[9,11],[23,28]],[[3351,7716],[-8,-10],[-18,-22],[-22,-27],[0,-1],[-55,-68],[53,-17],[82,-26],[-166,-193],[-6,-7]],[[3211,7345],[-247,47]],[[2964,7392],[-134,111],[-5,3],[-16,14],[-17,14],[-20,17],[-14,11],[-6,6],[-9,7],[-5,5],[-7,5],[-7,6],[-5,4],[-2,2],[-3,2],[-4,3],[-5,4],[0,1],[-3,2],[-2,1],[-3,3],[-1,1],[-1,1],[-2,1],[-2,2],[-2,1],[0,1],[-1,0],[-1,1],[-1,1],[-2,1],[0,1],[-1,0],[0,1],[-1,0],[-2,2],[-1,1],[-1,0],[-12,11],[-1,0],[-8,7],[-15,12],[-24,20],[-6,5],[-2,1],[-38,32],[-17,15]],[[7070,7935],[-12,-36],[-16,-45],[-14,-42],[-15,-42],[-14,-42],[-15,-43],[-15,-42],[-13,-40],[-14,-41]],[[6942,7562],[-8,1],[-42,6],[-43,5],[-51,6],[-58,8],[-34,4],[-32,5]],[[6674,7597],[-39,19],[-41,21],[-60,29],[-57,29],[-63,31],[-63,32],[-51,26],[-49,24],[-39,20],[-30,15]],[[9547,7817],[-8,-4],[-4,-4],[1,-6],[2,-4],[0,-6],[-7,-4],[-6,-2],[-7,-1],[-6,-1],[-16,-1],[-10,0],[-11,2],[-9,3],[-7,3],[-10,2],[-9,0],[-9,-1],[-7,0],[-7,0],[-6,1],[-7,1],[-11,2],[-7,0],[-8,-1],[-8,-4],[-6,-4],[-5,-5],[-6,-7],[-6,-6],[-2,-6],[-1,-5],[-2,-4],[0,-5],[5,-4],[9,-4],[5,-4],[7,-3],[6,-4],[6,-3],[7,-4],[5,-3],[5,-3],[6,-2],[6,-2],[8,-2],[6,-2],[12,-6],[7,-3],[6,-3],[5,-4],[5,-3],[4,-3],[5,-3],[4,-4],[-1,-8],[-2,-6],[-2,-4],[-3,-4],[-4,-4],[-4,-5],[-3,-4],[-4,-3],[-4,-4],[-3,-3],[-8,-10],[-7,-4],[-5,-3],[-5,-2],[-7,-2],[-11,-2],[-6,0],[-8,1],[-9,2],[-6,1],[-5,-4],[-1,-7],[2,-4],[10,-10],[9,-4],[10,-4],[7,-4],[4,-7],[2,-6],[2,-5],[4,-5],[4,-4],[10,-6],[10,-5],[8,-4],[3,-4],[-1,-6],[-5,-3],[-10,-1],[-12,3],[-8,2],[-3,4],[-2,4],[-2,5],[-4,4],[-7,1],[-4,-4],[1,-4],[5,-3],[5,-3],[-3,-5],[0,-4],[3,-4],[2,-4],[-3,-4],[-9,-2],[-7,1],[1,4],[-3,4],[-5,4],[-6,1],[-6,-1],[-5,-4],[0,-5],[-1,-6],[-1,-5],[0,-5],[0,-5],[-3,-6],[-5,-6],[-6,-5],[-1,-7],[-2,-6],[-8,-5],[-7,-1],[-8,-1],[-8,-1],[-7,-1]],[[9303,7454],[-7,2],[-25,11],[-32,14],[-63,27],[-25,10],[-6,4],[-73,35],[-45,21],[-50,24],[-46,21],[-57,27],[-53,24],[-18,9]],[[9173,7992],[19,-10],[20,-11],[13,-5],[27,-13],[30,-13],[54,-24],[27,-12],[32,-15],[30,-13],[25,-12],[24,-12],[27,-13],[21,-10],[20,-9],[5,-3]],[[8064,7502],[-10,9],[-11,10],[-18,16],[-23,20],[-27,23],[-8,7],[-26,22],[-39,32],[-38,31],[-37,31],[-21,18],[41,32],[11,10]],[[8803,7683],[-36,-12],[-56,-18],[-56,-17],[-61,-20],[-42,-14],[-51,-17],[-56,-18],[-43,-15],[-37,-12]],[[8365,7540],[-31,-12],[-25,-10],[-8,-3],[-24,-10],[-30,-12],[-32,-13],[-36,-14],[-17,8],[-30,14],[-28,13],[-26,12],[-14,-11]],[[4757,7826],[-24,7],[-22,6],[-3,-3],[-41,14],[-6,2],[-10,3],[-11,4],[-11,4],[-12,4],[-18,7],[-7,2],[-10,-12],[-16,-17],[-4,-4],[-5,-6],[-4,-4],[-5,-4],[-6,2],[-6,2],[-29,9],[-13,4],[-6,2],[-9,3],[-27,8],[-9,3],[-11,3],[-9,3],[-11,4],[-12,3],[-14,5],[-5,1],[-8,3],[-10,3],[-28,9],[-7,-2],[-8,1],[-6,0],[-6,0],[-7,-2],[-2,-3],[-5,-3],[-4,4],[-2,5],[-5,2],[-7,-1],[0,-4],[-3,-4],[-4,-3],[-6,1],[-5,3],[-7,2],[-4,4],[-2,5],[-1,4],[0,4],[2,5],[1,3],[1,5],[0,1],[2,2],[3,4],[0,4],[-6,3],[-4,-1],[-2,0],[-1,-4],[-3,-4],[-2,-4],[-1,-6],[-5,-2],[-5,3],[-1,4],[-2,3],[-4,3],[-6,2],[-4,3],[2,4],[-1,4],[-3,3],[-6,1],[-8,3],[-6,3],[-6,2],[-8,2],[-9,0],[-7,1],[-8,0],[-6,2]],[[4404,8278],[11,13],[4,5],[4,5],[94,-30],[85,-27],[115,-36],[75,-23],[71,-23],[22,-6],[37,-12],[36,-11],[28,-9],[12,-3]],[[4687,7744],[-16,-16],[-12,-14],[-6,-6],[-6,-7],[-9,-8],[-10,-11],[-4,-5],[-12,-12],[-3,-4],[-5,-5],[-17,-19],[-7,-7],[-6,-6],[-4,-4],[-4,-5],[-6,-5],[-5,-6],[-9,-11],[-6,-7],[-3,-4],[-4,-3],[-8,-9],[-5,-6],[-10,-12],[-4,-4],[-8,-9],[-6,-7],[-7,-7],[-5,-6],[-4,-5],[-5,-6],[-6,-6],[-4,-4],[-3,-4],[-7,-9],[-9,-10],[-5,-6],[-9,-10],[-4,-5],[-7,-8],[-5,-4],[-4,-6],[-5,-5]],[[4403,7431],[-7,2],[-19,6],[-8,3],[-8,3],[-42,15],[-14,4],[-12,5],[-27,9],[-17,6],[-11,3],[-11,4],[-9,4],[-33,11],[-16,6],[-9,3],[-19,6],[-21,8],[-22,7],[-15,5],[-11,4],[-8,3],[-7,2],[-15,6],[-18,6],[-14,5],[-15,5],[-15,5],[-12,4],[-9,3],[-9,3],[-9,3],[-11,4],[-5,2],[-9,3],[-7,2],[-6,2],[-6,2],[-16,5],[-11,4],[-13,4],[5,5],[4,5],[4,5],[7,8],[6,9],[11,11],[21,28],[9,9],[4,5],[5,6],[-31,5],[-5,1],[-10,1],[-11,2],[-11,2],[-2,1],[-35,5],[-38,6],[-42,7],[-13,2],[-45,12],[-38,11],[-14,4],[-6,-8],[-16,6],[-15,5],[-4,1],[-45,14],[-2,1]],[[6056,7698],[-27,-31],[-21,-25],[-26,-30],[-22,-27],[-21,-25],[-17,-19],[-14,-17],[-4,-6],[-21,-24],[-29,-32],[-30,-34],[-33,-39],[-24,-27]],[[5767,7362],[-23,5],[-38,13],[-20,6],[-17,6],[-28,9],[-22,8],[-12,4],[-7,2],[-5,2],[-28,9],[-26,8],[-7,2],[-37,13],[-19,6],[-9,3],[-11,3],[-22,8],[-71,23],[-7,2],[-7,3],[-27,9],[-17,5],[-12,4],[-22,7],[-15,5],[-10,4],[-41,9]],[[5207,7540],[8,10],[16,19]],[[6674,7597],[-17,-21],[-26,-30],[-23,-28]],[[6608,7518],[-53,18],[-74,24],[-69,23],[-67,22],[-59,19],[-67,22],[-43,14],[-54,17],[-34,11],[-32,10]],[[8064,7502],[-4,-3],[-27,-20],[-26,-20],[-31,-24],[-31,-24],[-37,-28],[-36,-27],[-38,-30],[-39,-15],[-40,-15],[-38,-16],[-31,-12]],[[7686,7268],[-18,34],[-13,22],[-16,27],[-17,30],[-17,29],[-18,31],[-16,26],[-9,14]],[[7562,7481],[8,20],[6,17],[8,23],[8,22],[7,21],[10,27],[10,28],[12,35],[12,33],[10,29],[9,27],[11,28],[7,25],[3,7]],[[4403,7431],[-8,-9],[-7,-14],[-10,-13],[-7,-7],[-8,-9],[-5,-6],[-9,-11],[-8,-9],[-7,-9],[-8,-9],[-7,-9],[-7,-9],[-8,-9],[-7,-9],[-7,-8],[-8,-9],[-7,-9],[-8,-9],[-7,-9],[-4,-5],[-3,-4],[-7,-8],[-8,-9],[-6,-8],[-9,-11],[-6,-7],[-7,-9],[-8,-9],[-7,-8],[-7,-9],[-8,-9],[-8,-11],[-9,-10],[-7,-9],[-10,-11],[-8,-10],[-9,-11],[-8,-10]],[[4121,7087],[-53,18],[-48,17],[-30,11],[-41,14],[-44,16],[-39,13],[-8,3],[-43,15],[-46,16],[-44,15],[-51,16],[-23,8],[-80,26],[-54,11],[-48,9],[-84,17]],[[3385,7312],[-174,33]],[[5207,7540],[-14,-16],[-8,-9],[-6,-7],[-8,-10],[-4,-5],[-13,-16],[-5,-5],[-5,-6],[-5,-5],[-11,-13],[-3,-5],[-4,-4],[-5,-5],[-7,-8],[-15,-18],[-6,-6],[-13,-15],[-7,-8],[-8,-8],[-13,-16],[-7,-7],[-8,-9],[-14,-15],[-8,-9],[-7,-9],[-4,-4],[-4,-3],[-19,-20],[-9,-10],[-8,-9],[-2,-10],[-16,-18],[-24,-29]],[[4917,7203],[-2,-7]],[[4915,7196],[-10,4],[-44,20],[-31,14],[-7,4],[-39,17],[-10,5],[-22,10],[-23,10],[-35,16],[-18,9],[-16,7],[-7,3],[-16,7],[-32,15],[-16,7],[-8,4],[-11,5],[-33,15],[-39,19],[-11,5],[-29,13],[-46,21],[-9,5]],[[7562,7481],[-40,6],[-49,6],[-37,5],[-39,6],[-40,5],[-35,4],[-41,5],[-25,3],[-47,6],[-56,8],[-51,6],[-60,8],[-57,7],[-43,6]],[[6608,7518],[-37,-42],[-45,-52],[-40,-48],[-38,-44],[-42,-48],[-49,-57],[-42,-50],[-66,22]],[[6249,7199],[-55,19],[-49,16],[-23,8],[-27,9],[-41,14],[-58,19],[-69,23],[-65,21],[-76,25],[-19,9]],[[9303,7454],[-11,-3],[-8,0],[-12,3],[-11,3],[-8,2],[-7,-1],[-6,-4],[-6,-6],[-4,-6],[-6,-8],[-4,-6],[-4,-8],[-3,-5],[-8,-5],[-11,-2],[-15,-1],[-7,2],[-7,4],[-4,3],[-1,4],[1,5],[3,4],[9,-2],[10,3],[6,1],[9,1],[6,4],[7,4],[-1,5],[-5,4],[-11,3],[-9,0],[-9,-1],[-7,-2],[-3,-5],[0,-4],[-3,-3],[-7,0],[-6,-4],[-6,-4],[-3,-4],[-7,-3],[-8,-1],[-8,-3],[-8,-4],[-6,-4],[-4,-3],[-3,-6],[-2,-3],[1,-4],[3,-5],[5,-3],[10,-4],[8,-3],[9,-4],[4,-3],[3,-5],[-4,-4],[-7,-5],[-8,-5],[-6,-2],[-7,-1],[-8,0],[-12,3],[-8,1],[-8,-4],[-5,-5],[-4,-4],[-3,-3],[-5,-8],[-2,-6],[-2,-7],[0,-7],[0,-4],[-1,-8],[-1,-5],[-2,-4],[-6,-11],[-5,-8],[-6,-5],[-6,-5],[-4,-3],[-8,-4],[-8,-2],[-9,-2],[-9,-1],[-9,0],[-14,0],[-9,-1],[-7,-2],[-6,-3],[3,-5],[1,-5],[6,-5],[3,-6],[1,-5],[0,-4],[-4,-4],[-7,4],[-11,1],[-7,-1],[-4,-3],[-3,-6],[-2,-5],[-3,-4],[-7,-1],[-6,-3],[-8,-2],[-4,-3],[-7,-3],[-9,-2],[-6,-2],[-6,-4],[-4,-4],[-6,-3],[-8,-4],[-5,-3],[-6,-2],[-4,-4],[-8,0],[-5,-3],[-6,-3],[-7,-2],[-7,-3],[-8,-2],[-7,-1],[-7,-2],[-8,-1],[-7,1],[-6,0],[-7,1],[-11,3],[-10,1],[-11,0],[-8,-1],[-6,0],[-11,-1],[-6,-2],[-6,-1],[-10,-1],[-8,-2],[-11,-8]],[[8645,7127],[-7,10],[-9,12],[-14,20],[-12,17],[-9,14],[-29,39],[-30,44],[-32,47],[-35,53],[-31,48],[-29,43],[-18,29],[-10,15],[-8,10],[-7,12]],[[2813,7217],[-2,0],[-38,2],[-18,0],[-50,2],[-1,0],[-78,3],[-20,1],[-43,2],[-49,2],[-11,0],[-1,0],[-1,0],[-13,1],[-3,0],[-1,0],[-6,0],[-33,2],[-36,2],[-1,0],[-3,0],[-28,2],[-10,1],[-16,1],[-2,0],[-38,2],[-3,0]],[[2308,7240],[-7,0],[-7,4],[-6,2],[-7,2],[-6,1],[-7,2],[-10,2],[-7,2],[-3,5],[4,5],[7,2],[7,4],[6,2],[7,2],[9,0],[7,-1],[9,-2],[7,1],[4,4],[-1,6],[0,4],[1,7],[1,5],[2,11],[-1,5],[-2,4],[-6,3],[-7,0],[-7,1],[-5,3],[-1,5],[3,4],[6,3],[6,2],[3,4],[-1,5],[-6,3],[-9,1],[-6,4],[-3,5],[-1,4],[-1,5],[0,5],[-4,4],[-7,2],[-8,0],[-7,2]],[[2254,7384],[1,2],[7,7],[1,1],[0,1],[4,5],[4,4],[19,22],[1,1],[2,2],[1,1],[3,4],[3,3],[6,7],[2,2],[0,1],[7,7],[10,13],[3,2],[9,11],[3,4],[16,18],[9,11],[11,12],[2,3],[1,1],[1,1],[13,16],[1,0],[5,7],[1,0],[1,2],[1,1],[1,1],[2,3],[8,9],[9,9],[14,16],[0,1],[1,0],[2,3],[8,9],[7,8],[4,5],[14,16],[5,6],[3,3],[2,3],[1,1],[1,1],[11,13],[0,1],[10,11],[3,3],[2,3],[2,3],[3,2],[18,21],[9,9],[0,1],[8,9],[1,1],[4,4]],[[2964,7392],[-79,-90],[-2,-2],[0,-1],[-2,-1],[-8,-9],[-6,-8],[-2,-2],[-1,-1],[-3,-4],[-4,-4],[-5,-6],[-10,-12],[-9,-10],[-1,-1],[-7,-8],[-12,-16]],[[7686,7268],[-45,-20],[-63,-28],[-56,-25],[-57,-25],[-45,-20],[-62,-27],[-50,-21],[-54,-24],[-46,-20],[-30,-13]],[[7178,7045],[-4,3],[-29,26],[-15,13]],[[7130,7087],[-11,27],[-18,48],[-16,40],[-21,55],[-20,51],[-20,52],[-21,55],[-21,56],[-23,47],[-9,24],[-8,20]],[[8645,7127],[-3,-5],[-3,-5],[-3,-4],[-3,-4],[-1,-4],[-4,-4],[-10,-2],[-8,-1],[-7,1],[-6,2],[-6,4],[-7,4],[-4,3],[-8,5],[-8,4],[-10,2],[-9,0],[-14,1],[-12,-2],[-10,-3],[-6,-2],[-10,-5],[-7,-3],[-7,-2],[-8,-6],[-7,-3],[-8,-3],[-6,-2],[-9,0],[-7,0],[-7,0],[-6,1],[-7,0],[-9,1],[-12,0],[-11,-1],[-6,-2],[-8,-5],[-8,-6],[-6,-3],[-5,-3],[-5,-3],[-6,-3],[-6,-3],[-4,-5],[-2,-5],[3,-5],[8,-7],[4,-4],[3,-4],[1,-6],[-7,-5],[-9,-2],[-11,1],[-9,2],[-7,0],[-6,-1],[-7,-2],[-7,-1],[-6,-2],[-4,-5],[-1,-6],[0,-5],[-3,-6],[-1,-7],[1,-4],[6,-4],[7,-4],[3,-3],[-2,-6],[-6,-4],[-6,-2],[-5,-5],[-1,-5],[2,-5],[4,-11],[3,-5],[3,-5],[3,-4],[3,-6],[1,-7],[-5,-6],[-9,-5],[-7,-3],[-8,-2],[-7,-1],[-8,0],[-7,0],[-12,-1],[-7,-3],[-11,-3],[-11,-2],[-6,-1],[-9,-3],[-8,-3],[-11,-5]],[[8157,6873],[-14,12],[-13,11],[-17,14],[-18,15],[-20,17],[-12,10],[-17,14],[-18,14],[-9,8],[-9,9],[-17,14],[-17,15],[-19,16],[-24,20],[-34,28],[-38,32],[-22,19],[-19,15],[-26,22],[-30,25],[-28,23],[-30,25],[-20,17]],[[5767,7362],[-17,-20],[-3,-3],[-7,-8],[-4,-5],[-8,-9],[-15,-17],[-8,-9],[-3,-4],[-5,-6],[-8,-9],[-12,-14],[-3,-4],[-15,-17],[-4,-4],[-4,-4],[-7,-9],[-33,-38],[-5,-6],[-11,-13],[-9,-10],[-8,-9],[-6,-6],[-6,-7],[-4,-5],[-5,-6],[-8,-10],[-4,-4],[-5,-5],[-8,-10],[-12,-14],[-11,-13],[-8,-9],[-24,-27]],[[5477,7028],[-42,8],[-18,6],[-16,5],[-8,2],[-6,3],[-15,4],[-11,4],[-11,4],[-43,14],[-6,2],[-6,2],[-7,2],[-17,6],[-16,5],[-15,5],[-19,6],[-29,9],[-42,14],[-5,2],[-12,4],[-15,4],[-9,3],[-12,4],[-15,5],[-24,8],[-50,16],[-26,8],[-17,5],[-14,5],[-34,10]],[[4915,7196],[-29,-36],[-17,-19],[-22,-26],[-20,-24],[-25,-29],[-28,-33],[-20,-23],[-15,-18],[-21,-25],[-24,-28],[-22,-26],[-26,-31],[-13,-15]],[[4633,6863],[-34,14],[-42,19],[-53,23],[-42,18],[-44,20],[-35,15],[-37,16],[-15,6],[-12,6],[-14,6],[-18,8],[-19,8],[-12,6],[-26,11],[-25,11],[-35,16],[-21,9],[-20,8],[-8,4]],[[3385,7312],[-55,-62],[-21,-23],[-45,-51],[-17,-19],[-11,-13],[-13,-14],[-3,-3],[-16,-18],[46,-16],[139,-47],[-32,-34],[-21,-23],[-9,-10],[-17,-17],[-37,-41],[-1,-1]],[[3272,6920],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,1],[-1,0],[0,1],[-1,0],[-1,1],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,-1],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-82,-135],[-13,-22]],[[3003,6797],[-126,23],[-3,1],[-139,25],[-87,17]],[[2648,6863],[1,0],[8,14],[24,38],[14,23],[6,10],[3,4],[3,6],[5,7],[5,7],[3,5],[7,12],[9,20],[1,2],[0,1],[1,1],[1,3],[1,2],[1,1],[0,1],[1,2],[3,7],[5,11],[15,34],[7,16],[0,1],[0,2],[1,2],[0,1],[4,11],[4,10],[3,9],[4,14],[6,19],[2,6],[1,0],[0,1],[4,12],[6,21],[6,18]],[[8157,6873],[-7,-4],[-9,-5],[-5,-3],[-9,-3],[-12,-4],[-6,-2],[-6,-2],[-10,-3],[-6,-3],[-8,-1],[-10,-1],[-15,-1],[-9,0],[-8,-1],[-11,-3],[-5,-2],[-10,-4],[-9,-3],[-8,-2],[-9,-1],[-8,2],[-6,3],[-5,2],[-6,1],[-6,3],[-9,2],[-7,4],[-9,3],[-8,4],[-9,2],[-9,2],[-9,0],[-10,2],[-7,3],[-8,4],[-6,2],[-10,4],[-12,2],[-10,3],[-7,1],[-12,0],[-9,-1],[-13,-1],[-12,-2],[-7,-1],[-7,-2],[-7,-4],[-9,-5],[-11,-5],[-5,-2],[-7,-4],[-7,-6],[-5,-5],[-5,-5],[-6,-3],[-11,-3],[-8,-2],[-8,-1],[-9,-1],[-7,1],[-8,1],[-9,2],[-7,3],[-6,2],[-9,0],[-9,0],[-12,0],[-6,0],[-9,0],[-6,0],[-14,-1],[-7,-1],[-7,-2],[-7,-1],[-6,0],[-10,0],[-7,0],[-10,1],[-10,-1],[-11,0],[-6,1],[-7,1],[-9,2],[-7,0],[-9,0],[-8,-1],[-12,-5]],[[7431,6823],[-14,12],[-13,12],[-13,11],[-12,10],[-12,11],[-9,8],[-18,16],[-19,16],[-23,21],[-19,17],[-19,16],[-17,15],[-13,11],[-27,24],[-25,22]],[[5477,7028],[-16,-15],[-11,-14],[-10,-11],[-9,-10],[-28,-32],[-21,-26],[-32,-36],[-33,-39],[-32,-37],[-31,-35],[-33,-38],[-39,-46]],[[5182,6689],[-19,6],[-5,1],[-8,3],[-6,2],[-11,4],[-17,5],[-10,3],[-20,6],[-10,4],[-19,6],[-8,2],[-16,6],[-38,12],[-21,6],[-25,8],[-6,2],[-18,6],[-24,8],[-8,2],[-17,6],[-6,2],[-7,2],[-22,7],[-21,7],[-31,10],[-27,8],[-5,2],[-27,8],[-20,6],[-32,9],[-23,7],[-22,8]],[[1752,6944],[-16,58],[-17,66],[-8,33]],[[1711,7101],[74,-17],[39,-8],[12,-3],[68,-55],[53,-42],[14,-11]],[[1971,6965],[-3,-1],[-1,0],[-1,0],[-3,0],[-3,0],[-3,-1],[-1,0],[-1,0],[-14,-1],[-2,0],[-7,-1],[-16,-2],[-11,-1],[-2,0],[-11,-1],[-8,0],[-2,-1],[-13,-1],[-17,-1],[-6,-1],[-24,-2],[-32,-3],[-1,0],[-12,-1],[-2,-1],[-23,-2]],[[7431,6823],[-3,-8],[-3,-5],[-2,-7],[-7,-4],[-5,-3],[-7,-1],[-9,-2],[-6,-4],[-7,-2],[-7,-2],[-9,-3],[-8,-3],[-11,-3],[-6,-3],[-10,-2],[-11,-3],[-7,-3],[-7,-2],[-14,-3],[-6,-1],[-9,-2],[-12,-1],[-6,0],[-6,2],[-8,1],[-10,3],[-8,2],[-7,0],[-10,1],[-5,-3],[-4,-4],[-8,-1],[-1,-5],[-2,-4],[-1,-5],[2,-4],[5,-2],[3,-5],[1,-4],[-3,-7],[-1,-4],[-1,-6],[1,-7],[0,-7],[0,-10],[-3,-7],[-3,-4],[-5,-3],[-4,-3],[-4,-5],[-3,-3],[-5,-5],[-4,-2],[-9,-4],[-10,0],[-7,-1],[-5,-3],[-2,-5],[-3,-4],[-11,-4],[-7,-2],[-7,-1],[-8,-1],[-6,-1],[-5,-5],[-6,-4],[-3,-3],[-7,-2],[-4,-3],[-4,-3],[-4,-5],[-3,-5],[-3,-4],[-5,-3],[-5,-5],[-3,-4],[-3,-5],[-3,-5],[-3,-5],[-4,-4],[-4,-5],[-3,-5],[-1,-6],[1,-4],[3,-6],[5,-4],[5,3],[6,-3],[5,3],[6,3],[7,2],[7,0],[6,-2],[-4,-3],[-2,-5],[3,-3],[1,-5],[-5,-3],[-5,-4],[-4,-4],[7,-7],[0,-5],[1,-5],[0,-6],[0,-4]],[[7060,6486],[-26,1],[-23,3],[-32,5],[-29,4],[-42,6],[-46,6],[-54,8],[-46,6],[-34,5],[-29,4],[-29,4],[-50,7],[-51,8],[-43,5],[-47,6],[-51,9]],[[6428,6573],[13,9],[27,20],[20,15],[21,15],[42,31],[42,31],[24,18],[28,21],[30,23],[34,24],[25,19],[29,22],[27,20],[43,30],[32,23],[25,18]],[[6890,6912],[26,19],[22,16],[24,18],[20,14],[12,9],[30,22],[41,30],[36,26],[29,21]],[[4633,6863],[-10,-11],[-7,-9],[-15,-17],[-14,-16],[-6,-8],[-21,-24],[-10,-12],[-3,-3],[-7,-9],[-5,-5],[-7,-9],[-4,-5],[-6,-9]],[[4518,6726],[-22,-25],[-32,-40],[-39,-49],[-36,-44],[-40,-48],[-21,-26]],[[4328,6494],[-14,3],[-7,2],[-6,3],[-10,3],[-6,3],[-10,3],[-10,3],[-6,3],[-6,3],[-5,2],[-3,4],[-4,4],[-4,5],[-8,5],[-7,4],[-6,1],[-8,3],[-12,3]],[[4196,6551],[-12,4],[-12,3],[-11,1],[-8,1],[-12,3],[-7,3],[-8,1],[-8,-2],[-8,-1],[-6,0],[-7,0],[-7,5],[0,4],[2,6],[-1,7],[-3,4],[-3,4],[-7,4],[-6,1],[-5,4],[-6,4],[-8,3],[-8,2],[0,6],[1,4],[-4,4],[-8,-1],[-6,2],[-3,5],[-6,2],[-9,0],[-5,-3],[-8,1],[-8,2],[-6,3],[-7,2],[-9,3],[-7,4],[-7,3],[-1,4],[-5,3],[-9,4],[-8,3],[-7,0],[-7,2],[-2,4],[1,6],[-1,5],[-2,7],[0,4],[2,5],[2,8],[1,5],[0,5],[-6,4],[-7,3],[-6,2],[-7,4],[-8,0],[-7,1],[-14,1],[-9,2],[-10,-1],[-9,-2],[-6,-3],[-7,-1],[-9,1]],[[3812,6725],[8,9],[9,10],[9,12],[5,5],[5,6],[7,8],[4,4],[4,5],[6,6],[23,-8],[13,-4],[7,-2],[6,-2],[3,4],[9,12],[6,8],[7,9],[10,13],[21,27],[12,14],[6,7],[10,12],[17,-4],[16,-5],[11,14],[5,6],[6,6],[6,8],[6,8],[5,6],[4,4],[8,10],[5,7],[-22,6],[-12,3],[-7,2],[11,11],[10,11],[6,6],[-17,5],[-23,8],[11,11],[8,10],[5,5],[7,9],[9,9],[14,16],[6,8],[4,5],[8,8],[7,9],[5,5]],[[6428,6573],[-33,2],[-31,5],[-28,4],[-38,5],[-42,6],[-44,6],[-54,8],[-36,6],[-12,1],[-62,10],[-65,9],[-69,11],[-69,10],[-56,9]],[[5789,6665],[83,63],[60,45],[55,42],[33,26]],[[6020,6841],[22,25],[45,51],[35,40],[27,31],[13,15],[18,21],[27,31],[22,26]],[[6229,7081],[55,-12],[71,-11],[67,-10],[53,-8],[52,-8],[-7,-25],[-5,-19],[-5,-15],[33,-6],[41,-6],[43,-7],[52,-8],[48,-8],[46,-7],[41,-7],[40,-6],[36,-6]],[[3272,6920],[1,-1],[6,-3],[8,-2],[6,-1],[7,0],[8,2],[5,3],[3,3],[4,3],[8,1],[7,1],[6,-2],[4,-4],[6,-3],[6,1],[6,1],[7,3],[6,1],[10,2],[3,-3],[6,-3],[2,-4],[2,-4],[5,-3],[4,-3],[6,-1],[7,-1],[8,-1],[7,-1],[6,-2],[8,-2],[9,-3],[8,-2],[12,-2],[6,0],[7,1],[6,0],[7,-1],[6,-1],[6,-2],[5,-3],[3,-4],[3,-4],[3,-4],[0,-4],[2,-5],[0,-4],[2,-4],[6,-2],[9,2],[6,2],[9,0],[11,-1],[7,-1],[6,-2],[0,-4],[-2,-4],[-2,-3],[-3,-4],[-2,-4],[-1,-4],[0,-6],[1,-4],[1,-4],[3,-4],[5,-2],[7,-1],[7,-1],[4,-3],[1,-4],[3,-4],[5,-2],[5,-2],[6,-2],[7,-1],[6,0],[6,1],[6,1],[7,0],[4,-1],[4,-1],[4,-1]],[[3671,6789],[-5,-8],[-7,-13],[-9,-10],[-17,-29],[-19,-34],[-20,-35],[-22,-37],[-20,-35],[-21,-36],[-18,-30],[-16,-29],[-14,-23],[-3,-12],[-20,-32],[-7,-12]],[[3453,6414],[-27,7],[-23,7],[-22,6],[-32,9],[-18,5],[-17,5],[-7,2],[-13,3],[-13,4],[-29,9],[-36,11],[-46,14],[-53,16],[-56,17],[-29,9],[-21,6],[-32,9],[-33,10],[-15,14]],[[2931,6577],[-52,10],[-2,0],[2,5],[12,20],[34,56],[34,56],[44,73]],[[1694,6557],[-30,-3],[-5,-1],[-5,0],[-13,-1],[-16,-2],[-3,0],[-1,0],[-9,-1],[-8,-1],[-24,-3],[-1,0],[-15,-2],[-10,-1],[-8,-1],[-15,-2],[-19,-2],[-5,0],[0,-1],[-1,0],[-13,-1],[-11,-1],[-43,-6]],[[1439,6528],[-10,0],[-3,-1],[-16,-1],[-2,0],[-12,-1],[-51,-4],[-18,-1],[-9,-1],[-1,0],[-1,0],[-4,-1],[-10,0],[-17,-2],[-11,-1],[-3,0],[-1,0],[-1,0],[-52,-4],[-37,-3],[-32,-2],[-46,-3],[-27,-2],[-212,17]],[[863,6518],[3,10],[2,4],[3,6],[1,5],[1,4],[1,5],[0,8],[0,6],[0,4],[-1,6],[-3,6],[-4,7],[-4,6],[-3,4],[-5,6],[-3,6],[-5,6],[-4,7],[-2,4],[-3,5],[-4,7],[-3,7],[-2,4],[-2,5],[-2,5],[-1,4],[-2,7],[-2,6],[-1,4],[-1,5],[-2,5],[-2,8],[-2,7],[-1,7],[0,7],[-1,6],[-1,6],[0,4],[-1,4],[0,5],[0,6],[0,6],[0,9],[0,4],[1,5],[0,5],[0,6],[0,5],[1,6],[1,6],[0,7],[-1,4],[-1,9],[-2,4],[-2,4],[-2,6],[-2,4],[-2,5],[-4,7]],[[794,6854],[217,21],[18,2],[3,0],[11,1],[1,0],[3,0],[7,1],[1,0],[14,2],[11,1],[2,0],[4,0],[13,2],[8,1],[5,0],[7,1],[1,0],[3,0],[3,1],[6,0],[9,1],[15,1],[1,0],[74,8],[1,0],[1,0],[65,7],[2,0],[6,0],[13,2],[1,0],[6,1],[41,4],[21,2],[4,0],[27,3],[2,0],[5,1],[15,1],[1,0],[19,2],[5,0],[19,2],[41,5],[1,0],[6,1],[5,0],[6,1],[2,0],[10,1],[4,0],[21,2],[7,1],[3,0],[3,1]],[[1594,6934],[8,-27],[6,-21],[0,-3],[3,-8],[1,-5],[1,-4],[1,-4],[4,-13],[0,-1],[7,-23],[0,-1],[1,-1],[1,-7],[13,-46],[1,-4],[0,-1],[8,-31],[5,-19],[3,-12],[1,-2],[0,-1],[8,-28],[3,-13],[6,-23],[0,-1],[3,-10],[0,-1],[0,-1],[5,-19],[11,-47]],[[2931,6577],[-35,-61],[-9,-15],[-7,-13],[-61,-105],[-11,-20],[-12,-21]],[[2796,6342],[-11,2],[-106,18],[-46,8],[-50,9]],[[2583,6379],[-1,4],[-1,2],[-25,129],[-25,135],[-104,18],[-44,7],[-72,12]],[[2311,6686],[-1,2],[0,3],[-1,1],[0,1],[-3,14],[-6,22],[-1,7],[-5,20],[-1,1],[-5,23],[-9,35],[-1,4],[-1,4],[-2,8],[0,1],[-2,5],[0,3],[-3,12],[0,1],[-1,3],[-2,9],[-2,9],[-2,5],[-2,8],[-1,7],[-1,1],[-1,6],[0,1],[-1,2],[0,2],[-1,2],[0,1],[0,1],[0,1],[-1,1],[-3,12],[-1,4],[0,1],[-1,6]],[[2250,6935],[26,-5],[42,-8],[8,-1],[6,-1],[5,-1],[22,-4],[12,-2],[64,-12],[1,0],[1,0],[10,-2],[1,0],[4,-1],[3,0],[0,-1],[1,0],[51,-9],[1,0],[29,-5],[21,-4],[1,0],[1,-1],[6,-1],[21,-4],[42,-7],[6,-1],[3,-1],[10,-1]],[[3812,6725],[-8,2],[-4,3],[-6,2],[-7,0],[-8,0],[-7,2],[-1,4],[-1,4],[-4,3],[-3,3],[0,1],[-6,3],[-6,3],[-6,2],[-6,2],[-4,3],[-5,3],[-8,1],[-8,0],[-8,0],[-6,1],[-6,2],[-1,5],[-3,4],[-3,4],[-5,3],[-5,2],[-4,1],[-2,1]],[[5690,6442],[-86,29],[-74,25],[-44,15],[-23,7],[-21,7],[-41,14],[-20,7],[-26,8],[-6,2],[-6,2],[-6,2],[-6,2],[-10,4],[-8,2],[-12,4],[-8,3],[-19,6],[-5,1],[-12,4],[-9,3],[-12,4],[-11,4],[-15,5],[-7,2],[-6,2],[-12,4],[-6,2]],[[5179,6612],[7,8],[7,8],[15,16],[4,5],[5,6],[16,17],[-9,3],[-27,9],[-15,5]],[[5477,7028],[28,-13],[20,-7],[30,-10],[20,-7],[8,-3],[52,-17],[56,-19],[64,-22],[55,-18],[63,-21],[63,-21],[50,-17],[34,-12]],[[5789,6665],[1,-58],[0,-29],[0,-26],[-34,-39],[-30,-35],[-17,-20],[-10,-11],[-9,-5]],[[5179,6612],[-22,-24],[-8,-9],[-15,-17],[-4,-5],[-11,-11],[-6,-7],[-5,-6],[-17,-20],[-27,-30],[-8,-9],[-9,-10],[-7,-8],[-10,-11],[-9,-11],[-19,-21],[-6,-7],[-4,-4],[-3,-4],[-8,-9]],[[4981,6389],[-7,2],[-17,3],[-7,1],[-7,1],[-20,3],[-39,7],[-9,1],[-58,10],[-19,3],[-6,1],[-12,-2]],[[4780,6419],[-7,-2],[-3,-4],[-2,-4],[-6,-3],[-14,3],[-6,1],[-6,2],[-5,2]],[[4731,6414],[6,14],[9,11],[14,16],[-7,2],[-6,2],[-22,8],[-20,7],[-12,4],[-10,3],[11,13],[4,5],[7,7],[-8,3],[-9,3],[-24,7],[-34,11],[-10,4],[-10,3],[-8,3],[6,11],[-3,4],[4,6],[-17,5],[8,10],[-13,4],[-8,2],[-6,2],[-15,5],[14,17],[8,11],[-24,7],[3,7],[19,22],[-23,7],[-24,7],[3,3],[20,26],[7,9],[5,7],[-23,7],[-6,2],[-8,2],[-11,3]],[[4196,6551],[-16,-28],[-16,-29],[-25,-36],[-25,-43],[-31,-50],[-32,-55],[-33,-56],[-22,-37],[-20,-34]],[[3976,6183],[-8,4],[-33,15],[-35,15],[-28,12],[-9,4],[-45,20],[-7,3],[-7,3],[-43,19],[-19,8],[-12,5],[-22,10]],[[3708,6301],[-58,26],[-17,8],[-19,8],[-19,9],[-22,10],[-24,10],[-20,9],[-18,8],[-14,6],[-16,7],[-12,5],[-7,3],[-9,4]],[[4731,6414],[-13,7],[-9,1],[-8,1],[-7,1],[-8,2],[-9,0],[-7,-1],[-6,-3],[-8,0],[-6,1],[-4,-4],[-6,-3],[-5,-2],[-4,-5],[-4,-3],[-4,-4],[-3,-3],[0,-5],[-11,2],[-25,6],[-20,3],[-23,5],[-36,7],[-33,7],[-35,7],[12,21],[-9,2],[-29,4],[-11,3],[-9,4],[-7,2],[-5,5],[2,4],[1,5],[2,5],[-3,4],[-7,2],[-7,0],[-9,1],[-10,0],[-7,0],[-7,0],[-6,1]],[[2583,6379],[41,-193],[12,-52],[1,-4],[6,-27],[5,-21]],[[2648,6082],[-12,-2],[-247,-22],[-22,-2],[-36,0],[-3,10]],[[2328,6066],[1,6],[-2,8],[-1,7],[-2,7],[-2,7],[-1,8],[-2,7],[-1,7],[-2,7],[-2,7],[-1,8],[-2,7],[-1,7],[-2,7],[-2,7],[-1,8],[-2,7],[-1,7],[-2,7],[-1,6],[-1,5],[-13,-2],[-11,0],[-9,-1],[-8,-1],[-7,-1],[-16,-1],[-12,-1],[-11,-1],[-12,-1],[-12,-1],[-21,-1],[3,-13],[-17,-2],[-12,-1],[-11,-1],[-11,-1],[-12,-1],[-12,-1],[-11,-1],[-12,-1],[-10,-1]],[[2061,6179],[-7,28],[-19,84],[-16,69],[-13,57],[-14,60],[47,5],[-7,30],[-17,83]],[[2015,6595],[11,2],[8,1],[2,0],[2,0],[6,1],[9,1],[1,0],[9,2],[1,-7],[0,-2],[2,-8],[5,0],[2,0],[1,1],[7,0],[10,1],[20,2],[21,2],[2,0],[2,0],[2,0],[14,1],[2,1],[18,1],[1,0],[31,3],[20,2],[30,2],[12,1],[19,2],[24,2],[7,1],[10,0],[4,1],[-4,16],[-1,5],[-1,3],[0,1],[-1,3],[0,1],[-1,5],[-4,13],[-2,11],[0,1],[-3,9],[-1,4],[-1,4],[0,2]],[[6533,6207],[-21,5]],[[6512,6212],[-19,3],[-51,-4],[-36,-2],[-39,-2],[-22,-2],[-63,-3],[-55,-4],[-43,-3],[-38,-2],[-48,-3],[-68,-4],[-82,-5],[-64,-4],[-37,-3]],[[5847,6174],[-35,10],[-41,12],[-38,10],[-23,7],[-19,5],[-27,8],[-25,7],[-107,29]],[[5532,6262],[13,16],[15,16],[30,35],[14,15],[18,22],[21,23],[47,53]],[[6428,6573],[6,-28],[7,-20],[6,-21],[6,-23],[7,-23],[15,-56],[11,-35],[10,-33],[13,-43],[11,-35],[8,-28],[5,-21]],[[5532,6262],[-37,11],[-65,19],[-33,9],[-6,2],[-35,10],[-42,12],[-7,2],[-24,7]],[[5283,6334],[-18,5],[-15,5],[-6,1],[-7,2],[-15,2],[-28,4],[-19,4],[-7,1],[-6,1],[-35,6],[-18,3],[-14,2],[-6,1],[-34,6],[-6,1],[-13,2],[-20,4],[-8,1],[-12,2],[-8,1],[-7,1]],[[2061,6179],[-14,-1],[-11,-1],[-12,-1],[-12,-1],[-12,-1],[-11,-1],[-12,-1],[-11,-1],[-12,-1],[-12,-1],[-12,-1],[-11,-1],[-12,-1],[-14,-1],[-12,-1],[-12,-1],[-11,-1],[-12,-1],[-12,-1],[-11,0],[-12,-1],[-12,-1],[-11,-1],[-12,-1],[-12,-1],[-11,-1],[-12,-1],[-12,-1],[-11,-1],[-12,-1],[-12,-1],[-12,-1],[-10,-1]],[[1672,6147],[-26,-3],[-110,-9]],[[1536,6135],[-18,70],[-39,156],[-36,149],[-4,18]],[[1694,6557],[7,1],[41,5],[11,1],[1,0],[8,1],[14,2],[6,0],[3,1],[18,2],[2,0],[18,2],[10,1],[1,0],[1,0],[9,1],[4,1],[1,0],[3,0],[1,0],[1,0],[1,1],[1,0],[1,0],[1,0],[5,1],[4,0],[2,0],[1,0],[3,1],[2,0],[9,1],[4,1],[6,0],[6,1],[11,1],[3,1],[20,2],[4,0],[6,1],[20,3],[2,0],[18,2],[11,1],[4,1],[1,0],[5,1],[5,0],[5,1]],[[3453,6414],[-18,-17],[-18,-16],[-16,-15],[-22,-20],[-23,-23],[-25,-24],[-25,-23],[-31,-29],[-29,-28],[-27,-23],[-25,-22],[-29,-26],[-30,-28],[-30,-26],[-30,-26],[-14,-14]],[[3061,6054],[-15,4],[-83,18],[-17,4],[-7,18],[-56,-1],[-145,-9]],[[2738,6088],[-90,-6]],[[2648,6082],[13,24],[37,66],[98,170]],[[4780,6419],[1,-7],[-3,-5],[-5,-9],[-4,-6],[-16,-26],[-3,-5],[-5,-9],[-3,-5],[-3,-5],[-13,-22],[-4,-6]],[[4722,6314],[-28,-47]],[[4694,6267],[-19,-32],[-13,-22],[-5,-8],[-15,-25],[-5,-9],[-4,-6],[-15,-25],[-6,-9],[-11,-18],[-7,-12],[-6,-12]],[[4588,6089],[-17,-28],[-4,-7],[-15,3],[-18,4],[-78,16]],[[4456,6077],[-27,6],[-26,6],[-24,6],[-12,2],[-29,7],[-37,8],[-49,11],[-35,8],[-7,1],[-7,2],[-29,6],[-6,1],[-14,3],[-11,3],[-24,5],[-18,4],[-19,4],[-14,3],[-8,2],[-19,4],[-9,2],[-43,9],[-13,3]],[[1536,6135],[17,-86],[-153,21],[-40,5]],[[1360,6075],[-76,11],[-60,8]],[[1224,6094],[-1,7],[-3,10],[-1,4],[-1,6],[-1,4],[0,4],[-2,6],[-2,7],[-3,13],[-2,7],[-10,-1],[-10,-1],[-11,-1],[-11,-1],[-14,-1],[-8,-1],[-15,-1],[-25,-3],[-14,-1],[-14,-1],[-12,-2],[2,-10],[2,-13],[2,-8],[3,-13],[1,-5]],[[1074,6099],[-228,-19],[-7,-1],[-219,-18],[-190,-16]],[[430,6045],[3,7],[1,5],[1,5],[1,4],[2,5],[1,4],[0,4],[1,5],[3,5],[3,3],[4,3],[3,4],[2,4],[0,4],[-1,4],[-3,4],[-2,4],[-2,4],[-1,4],[1,4],[1,4],[2,4],[4,4],[3,4],[4,3],[6,3],[7,1],[5,4],[4,5],[2,6],[-1,4],[0,4],[-2,5],[-1,4],[-1,5],[-1,5],[0,4],[1,4],[1,4],[3,4],[5,3],[6,0],[9,0],[6,2],[5,4],[1,3],[0,5],[3,4],[5,3],[6,3],[7,3],[7,2],[7,1],[8,2],[5,3],[3,4],[4,3],[3,4],[4,4],[6,3],[5,2],[6,2],[7,2],[6,2],[7,3],[6,3],[2,4],[0,4],[-2,4],[0,5],[3,4],[5,2],[4,3],[4,4],[4,3],[2,4],[4,4],[4,3],[2,5],[0,4],[0,5],[2,4],[4,3],[6,3],[5,3],[5,3],[1,4],[2,4],[0,5],[1,4],[5,4],[5,2],[5,2],[6,3],[6,2],[5,3],[6,3],[1,4],[-2,4],[-3,4],[1,4],[6,1],[6,0],[9,2],[7,2],[7,2],[6,3],[5,3],[4,3],[4,4],[6,3],[4,3],[7,-1],[7,-1],[8,-1],[7,-1],[4,3],[3,4],[-1,4],[0,4],[2,4],[2,4],[6,2],[6,1],[5,3],[3,5],[3,4],[3,4],[1,4],[1,5],[1,4],[0,5],[0,5],[-1,4],[-1,5],[0,4],[0,5],[19,5]],[[5283,6334],[-1,-4],[-12,-37],[-4,-15],[-7,-20],[-3,-9],[-7,-24],[-1,-6],[-3,-9],[-3,-10],[-4,-12],[-2,-9],[-4,-13],[-8,-25],[-4,-13],[-3,-11],[-10,-34],[-3,-8],[-5,-14],[-3,-11],[-1,-5],[-2,-6],[-3,-10],[-6,-19],[-3,-9],[-8,-28],[-2,-6],[-7,-23]],[[5164,5944],[-6,2],[-45,14],[-10,3]],[[5103,5963],[-14,4],[-15,3],[-7,2],[-22,6],[-12,2],[-23,6],[-15,4],[-6,2],[-69,16],[-6,1],[-8,2],[-8,2],[-13,3],[-15,4],[-9,2],[-6,2],[-7,1],[-8,2],[-8,2],[-8,2],[-13,3],[-12,3],[-17,4],[-7,2],[-11,2],[-8,2],[-6,2],[-8,2],[-16,4],[-24,6],[-11,2],[-6,2],[-14,3],[-7,2],[-14,3],[-6,2],[-6,1],[-10,2],[-14,4],[-26,7]],[[4694,6267],[3,-1],[6,-1],[21,-5],[-2,-4],[-1,-2],[-1,-2],[-2,-6],[-2,-4],[6,-2],[15,-3],[8,-1],[2,-1],[-2,-4],[11,-2],[4,-1],[2,0],[7,-2],[3,0],[2,-1],[2,0],[-1,-2],[0,-2],[-2,-4],[-1,-1],[-1,-2],[2,0],[1,-1],[9,-2],[20,-4],[16,-4],[-6,-12],[12,-3],[17,-4],[1,0],[16,-3],[2,-1],[3,0],[1,0],[0,-1],[0,-1],[0,-1],[-1,-2],[-1,-2],[-2,-2],[-1,-1],[1,0],[4,-1],[1,0],[9,-2],[1,0],[4,-1],[1,0],[1,0],[1,0],[2,0],[1,0],[2,-1],[1,0],[2,0],[2,0],[3,0],[2,-1],[2,-1],[1,-1],[1,0],[1,0],[3,3],[2,2],[1,1],[0,1],[1,0],[0,1],[2,2],[1,1],[1,2],[1,1],[0,1],[0,3],[1,0],[1,0],[2,-1],[4,-1],[6,-1],[6,3],[1,-1],[0,-1],[1,-1],[0,-1],[1,0],[1,-1],[1,0],[2,0],[2,0],[3,-2],[1,2],[5,7],[1,1],[1,0],[2,-1],[1,-1],[2,0],[1,1],[1,0],[1,0],[5,1],[-3,3],[-4,4],[-2,2],[-1,1],[-3,3],[-1,1],[-6,5],[1,2],[2,5],[2,4],[1,1],[0,1],[1,1],[0,1],[1,1],[0,2],[1,1],[1,1],[0,1],[1,1],[0,1],[1,1],[1,2],[0,2],[1,1],[1,1],[0,1],[1,1],[0,1],[1,1],[0,1],[1,1],[0,1],[1,1],[0,1],[1,1],[0,2],[1,0],[-3,0],[-1,0],[-2,0],[-2,1],[-1,0],[-2,0],[-2,0],[-2,1],[-1,0],[-2,0],[-2,0],[-1,1],[-2,0],[-2,0],[1,1],[0,1],[-1,0],[-2,0],[-2,0],[0,1],[0,1],[0,1],[-1,1],[0,1],[0,1],[0,2],[0,1],[-1,1],[0,1],[0,1],[-1,1],[0,1],[-1,0],[-2,1],[-3,0],[-2,1],[-3,0],[-2,1],[-1,0],[-1,0],[-19,4],[11,20],[2,4],[1,1],[2,4],[2,4],[1,2],[-17,3],[-5,-5],[-1,-1],[0,-1],[-1,-1],[0,-1],[0,-1],[-1,0],[0,1],[-4,0],[1,3],[-2,1],[4,4],[2,3],[-7,1],[-17,3],[-1,1],[0,-1],[0,-1],[0,-1],[0,-3],[1,-2],[0,-2],[-1,-2],[0,-1],[0,-1],[-1,-1],[0,-1],[-1,-1],[0,-1],[-1,0],[0,-1],[-1,-1],[-1,-1],[-6,1],[-3,1],[-1,0],[-1,0],[-2,1],[-1,0],[-3,1],[-3,0],[-1,0],[-6,1],[-6,2],[-2,0],[-1,0],[-1,0],[-14,3],[-4,-8],[-6,1],[-8,2],[-5,1],[-2,0],[-1,1],[-2,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-2,0],[-1,1],[-1,0],[-1,0],[-2,0],[-1,1],[-1,0],[-2,0],[-3,1],[-20,4],[-3,1],[-10,1],[-15,3]],[[5847,6174],[-12,-38],[-12,-38],[-13,-38],[-14,-38],[-13,-38],[-14,-44],[-11,-33],[-14,-38],[-12,-38],[-15,-41]],[[5717,5790],[-15,2],[-17,4],[-20,3],[-16,4],[-18,3]],[[5631,5806],[-8,2],[-12,4],[-9,3],[-18,5],[-22,7],[-21,6],[-20,6],[-25,7],[-28,8],[-24,7],[-20,7],[-24,7],[-18,5],[-27,8],[-14,4],[-23,7],[-31,9],[-21,6],[-22,7],[-27,7],[-29,9],[-24,7]],[[2328,6066],[-70,-7],[-31,-4],[5,-17],[3,-14],[2,-7],[2,-7],[2,-8],[4,-14],[3,-15],[4,-14],[4,-14],[3,-15],[4,-14],[2,-7],[1,-6],[2,-6],[6,-23],[7,-30],[6,-22],[6,-23],[5,-22],[3,-11],[3,-16],[3,-16],[3,-14],[2,-12],[4,-17],[4,-14],[3,-14],[-25,-5],[-23,-2],[-18,-2],[-1,-11],[-1,-14],[-1,-14],[-1,-15],[-1,-11]],[[2252,5589],[-105,-9],[-48,-3]],[[2099,5577],[-2,20],[-5,45],[-49,-5],[-103,-9]],[[1940,5628],[-26,121],[-17,78],[-16,74],[-23,108],[-161,21],[-6,23],[0,5],[-1,8],[-2,7],[-1,7],[-2,7],[-2,8],[-1,7],[-2,7],[-1,7],[-2,7],[-1,8],[-2,7],[-2,9]],[[6512,6212],[-17,-50],[-14,-46],[-1,-2],[-9,-30],[-4,-12],[-4,-12],[-1,-3],[-7,-19],[-3,-9],[-4,-11],[-12,-36],[-7,-18],[0,-1],[-8,-24],[-12,-32],[-1,-3],[-10,-31],[-1,0],[-4,-12],[0,-2],[-1,-3],[-1,-2],[-2,-6],[-1,-1],[-2,-8],[-14,-39],[-7,-19],[-4,-13],[-5,-13],[-1,-3],[-1,-4],[-4,-11],[-2,-5],[-4,-12],[0,-1],[-6,-16],[-1,-3],[-1,-2],[-7,-20]],[[6329,5678],[-17,4],[-21,5],[-27,6],[-20,5],[-22,4],[-21,4],[-21,4],[-21,3],[-20,4],[-16,3],[-18,3],[-10,1],[-42,8],[-33,6],[-34,5],[-34,6],[-31,6],[-23,3],[-30,6],[-19,3],[-62,11],[-62,10],[-8,2]],[[1224,6094],[2,-6],[2,-13],[2,-6],[1,-7],[-3,-6],[-16,-1],[-6,0],[-10,-1],[-13,-1],[-7,0]],[[1176,6053],[-21,-2],[-7,0],[-17,-1],[-12,-1],[-7,-1],[-14,-1],[-6,0],[-7,-1],[-1,5],[-1,4],[-1,4],[-1,5],[-2,12],[-3,11],[-2,12]],[[1940,5628],[-40,-3],[-246,-20],[-134,-11]],[[1520,5594],[0,8],[2,4],[4,3],[4,3],[4,4],[2,4],[4,3],[1,4],[0,4],[2,5],[-3,3],[-3,4],[-3,3],[-3,4],[-5,2],[-4,3],[1,4],[0,5],[-5,2],[-5,3],[-2,4],[-6,4],[-5,-3],[-5,3],[-5,3],[-4,3],[-6,1],[-7,1],[-6,1],[-5,2],[-3,4],[0,4],[-4,4],[-6,-2],[-6,-1],[-7,0],[-3,-3],[-2,-4],[-4,-3],[-6,0],[-5,3],[-5,3],[-9,1],[-6,1],[-7,-1],[-6,-1],[-7,0],[-7,-1],[-6,-1],[-7,1],[-6,0],[-7,0],[-113,37],[-5,3],[-5,3],[-5,2],[-6,2],[-5,3],[-3,3],[-3,4],[-1,4],[-1,4],[-1,4],[-3,4],[-5,3],[-9,4]],[[1178,5772],[13,100],[26,9],[3,-13],[0,-17],[179,13],[-6,35],[-29,152],[-4,24]],[[1176,6053],[0,-6],[-3,-3],[-3,-4],[-3,-3],[-2,-4],[-3,-4],[-6,-3],[-6,-1],[-7,-2],[-6,-2],[-6,-2],[-6,-2],[-6,-2],[-6,-2],[-2,-3],[3,-5],[3,-4],[2,-4],[-3,-4],[-6,-3],[-5,-3],[-1,-4],[3,-3],[4,-4],[3,-4],[0,-4],[-3,-4],[-2,-4],[1,-4],[3,-4],[3,-4],[3,-4],[3,-3],[3,-4],[4,-3],[-1,-4],[-6,-4],[-3,-3]],[[1119,5923],[-24,-6],[-58,-6],[-65,-5],[-77,-6],[-83,-7],[-92,-8],[-78,-6],[-71,-6],[-77,-7],[-129,-11]],[[365,5855],[6,7],[4,5],[2,6],[2,7],[-1,4],[-1,5],[-1,6],[-1,10],[-3,7],[-3,6],[-4,6],[0,6],[0,6],[-1,5],[-2,6],[-5,6],[-3,6],[3,5],[6,5],[6,7],[6,6],[5,3],[9,4],[5,2],[6,5],[9,8],[5,4],[5,5],[4,8],[1,5],[-2,4],[-2,6],[2,4],[8,5]],[[1178,5772],[-11,4],[-6,2],[-2,4],[1,4],[2,3],[2,4],[1,4],[0,4],[-3,3],[-5,3],[-6,1],[-7,1],[-6,2],[-2,4],[1,4],[4,4],[3,3],[2,4],[3,3],[3,4],[-1,4],[-1,4],[-2,4],[-1,4],[-1,4],[-3,4],[-4,3],[-6,2],[-6,1],[-6,2],[-4,4],[-1,4],[0,4],[1,4],[1,4],[1,4],[3,3],[3,4],[2,4],[-1,4],[-1,4],[-3,4],[-3,7]],[[2856,5705],[24,-76],[-1,-29],[-2,-47]],[[2877,5553],[-236,0],[-26,0],[0,-11],[-221,8],[-39,1],[-105,2],[2,36]],[[2738,6088],[9,-31],[33,-152],[6,-31],[13,-75],[11,-47],[12,-45],[1,-4],[33,2]],[[5631,5806],[-1,-12],[-6,-13],[-4,-12],[-6,-14],[-6,-14],[-6,-14],[-6,-15],[-8,-16],[-9,-21],[-9,-18],[-7,-16],[-8,-16],[-9,-23],[-6,-12],[-7,-15],[-5,-14],[-6,-11],[-3,-8],[-6,-12],[-5,-11],[-4,-10],[-6,-11],[-4,-9],[-5,-11],[-5,-10],[-4,-10],[-4,-8],[-3,-6],[-5,-11]],[[5468,5433],[0,-1],[-1,1]],[[5467,5433],[-19,6],[-21,6],[-16,5],[-20,6],[-20,6],[-17,5],[-19,6],[-21,6],[-26,8],[-24,7],[-19,6],[-22,7],[-21,6],[-17,5],[-20,6],[-18,5],[-14,5],[-13,3],[-12,4],[-23,7],[-24,7],[-28,9],[-24,7],[-21,6],[-23,7],[-17,5],[-17,5],[-29,9],[-30,8]],[[4872,5611],[10,16],[14,22],[18,28],[22,34],[29,44],[9,13],[12,19],[17,27],[20,30],[18,26],[13,21],[12,17],[11,17],[14,20],[12,18]],[[1178,5772],[-5,-36],[-59,-3],[2,-16],[-14,-1],[-47,-8],[1,-8],[-27,-3],[17,-74],[19,2],[6,-33],[3,-17],[29,-16],[7,-15]],[[1110,5544],[-45,-3],[-66,-6],[-77,-7],[-79,-7],[-96,-8],[-89,-7],[-66,-6],[-74,-5],[-67,-6],[-55,-2]],[[396,5487],[-3,6],[-4,6],[-3,5],[-3,6],[-6,4],[-5,4],[-7,4],[-7,3],[-6,2],[-8,2],[-7,2],[-9,2],[-7,3],[-4,3],[-7,5],[-3,4],[-6,5],[-8,5],[-8,3],[-6,3],[-6,3],[-7,4],[-8,4],[-5,4],[-4,3],[-2,7],[1,4],[1,5],[1,5],[5,10],[4,10],[4,9],[3,8],[3,9],[4,13],[1,7],[4,9],[2,7],[3,10],[2,8],[1,8],[0,10],[0,4],[1,6],[3,5],[3,5],[4,5],[5,6],[5,6],[7,10],[5,7],[9,13],[6,8],[8,12],[5,5],[5,6],[5,5],[2,4],[2,5],[0,5],[1,6],[2,7],[1,4]],[[6329,5678],[8,-2],[11,-3],[15,-3],[9,-3],[3,0],[17,-5],[1,0],[15,-4]],[[6408,5658],[-14,-21],[-1,0],[-2,-4],[-17,-24],[-12,-17],[-1,-1],[-2,-3],[-4,-5],[0,-1],[-5,-6],[-8,-11],[0,-1],[-3,-4],[-3,-4],[-7,-10],[-1,-1],[-14,-20],[-17,-24],[-9,-12],[0,-1],[-2,-2],[-9,-14],[-1,-1],[-11,-16],[-6,-8],[0,-1],[-29,-42],[-1,-2],[-12,-18],[-6,-8],[-1,-2],[-3,-4],[-3,-4]],[[6204,5366],[-4,1],[-12,-18],[-7,-10],[-5,-8],[-14,-21]],[[6162,5310],[-17,4],[-1,0],[-47,8],[-47,8],[-1,1],[-22,3],[-1,1],[-78,13],[-35,6],[-1,1],[-18,3],[-38,7],[-25,4],[-13,2],[-11,2],[-1,0],[-37,7],[-77,14],[-18,3],[-1,0],[-13,2],[-27,5],[-22,4],[-1,0],[-5,1],[-5,1],[-13,2],[-54,10],[-11,2],[-19,3],[-22,4],[-13,2]],[[1520,5594],[-2,-3],[-2,-4],[-1,-4],[0,-5],[1,-3],[-1,-4],[0,-5],[0,-4],[-1,-4],[0,-4],[1,-3],[2,-4],[4,-3],[3,-4],[3,-3],[1,-4],[-3,-4],[-2,-4],[1,-4],[1,-4],[3,-4],[1,-4],[5,-3],[1,-4],[2,-4],[1,-4],[-1,-4],[-1,-4],[0,-4],[-66,-4]],[[1470,5478],[-62,-6],[-246,-22],[-19,-1]],[[1143,5449],[3,98],[-36,-3]],[[5467,5433],[0,-3],[-5,-26],[0,-1],[0,-3],[-4,-19],[-1,-10],[-2,-7],[-4,-24],[-2,-10],[0,-1],[-2,-15],[-5,-26],[0,-2],[0,-3],[-1,-4],[0,-1],[-4,-23],[-3,-21],[-1,-1],[-6,-38],[-1,-9],[-6,-39],[-1,-5],[0,-1],[-12,-44]],[[5407,5097],[-16,4],[-17,5],[-20,5],[-19,6],[-24,6],[-28,8],[-29,8],[-22,6],[-34,9],[-30,8],[-35,10],[-25,7],[-38,11],[-25,7],[-36,9],[-37,11],[-32,9],[-29,8],[-27,7],[-51,14]],[[4833,5255],[-15,42],[-11,34],[-16,48],[-10,30],[-14,41],[-16,47],[-15,45],[-12,34],[-9,27],[-20,60]],[[4695,5663],[54,-16],[63,-18],[49,-15],[11,-3]],[[2099,5577],[10,-78],[3,-55],[7,-152],[5,-52]],[[2124,5240],[-220,-18],[-146,-13],[-100,-9],[-57,-4]],[[1601,5196],[-29,-3],[-18,67],[-30,29],[-29,30],[-5,30],[-17,-2],[-3,16],[2,47],[6,31],[-8,37]],[[2877,5553],[-4,-106],[-5,-153],[0,-16],[-22,-26]],[[2846,5252],[-168,37],[-35,-46],[-78,-102],[-56,-74]],[[2509,5067],[-110,2],[-174,2]],[[2225,5071],[-52,-3],[-2,44],[14,30],[-4,75],[11,30],[-41,-5],[-27,-2]],[[1143,5449],[-1,-10],[-6,-152],[-6,-113]],[[1130,5174],[-33,-7],[-63,-5],[-70,-7],[-73,-6],[-76,-7],[-68,-7],[-67,-7],[-62,-6],[-58,-6],[-35,-3],[-35,-3],[-42,-4],[-54,-3]],[[394,5103],[-2,6],[-1,6],[-1,5],[1,6],[1,6],[1,7],[2,7],[2,8],[2,5],[3,7],[2,6],[2,6],[1,7],[0,6],[-1,8],[1,5],[-1,7],[-2,8],[-2,8],[0,7],[0,7],[-1,12],[-1,5],[-1,5],[-2,4],[-3,4],[-3,4],[-1,5],[-4,6],[-5,6],[-4,6],[-2,5],[-1,5],[-1,5],[-1,4],[0,5],[1,5],[2,5],[2,4],[2,4],[0,4],[2,4],[0,5],[1,4],[1,6],[1,5],[3,4],[1,4],[1,5],[1,4],[0,6],[0,4],[1,6],[2,4],[2,6],[2,5],[1,6],[1,5],[1,7],[3,6],[2,6],[0,6],[0,6],[0,5],[-1,4],[-2,5],[-2,4],[-4,11]],[[1601,5196],[-2,-7],[-3,-4],[-4,-4],[-2,-4],[-2,-4],[-1,-4],[-1,-4],[0,-4],[1,-4],[0,-3],[0,-4],[0,-5],[-1,-4],[-1,-4],[-1,-4],[-2,-5],[-3,-4],[-3,-3],[-5,-3],[-6,-2],[-6,-2],[-4,-2],[-4,-3],[-4,-4],[-1,-4],[0,-4],[1,-4],[4,-3],[5,-3],[1,-4],[-1,-4],[-2,-4],[-1,-4],[0,-4],[1,-4],[0,-4],[-1,-4],[-1,-4],[-1,-4],[-2,-4],[-1,-4],[0,-4],[1,-3],[-1,-4],[-4,-4],[-6,-1],[-5,-3],[-3,-4],[-3,-3],[-3,-4]],[[1524,5009],[-94,3],[-15,-2],[-162,-13],[-36,-3]],[[1217,4994],[-22,45],[-28,57],[-18,38],[-16,34],[-3,6]],[[6162,5310],[-9,-13],[0,-1],[-1,0],[0,-1],[-5,-8],[-31,-46],[-12,-18],[-9,-13],[0,-1],[-9,-12],[-14,-22],[-3,-4],[0,-1],[-2,-2],[-6,-9],[-10,-15],[-4,-7],[0,-1],[-1,0],[-3,-4],[-2,-4],[-31,-46],[-11,-17],[-20,-31],[-1,0],[-29,-45]],[[5949,4989],[-1,-1],[-35,6],[-1,0],[-15,3],[-12,3],[-55,10],[-2,1],[-45,9],[-38,7],[-42,8],[-1,1],[-17,3],[-2,0],[-117,23],[-2,0],[-9,2],[-1,0],[-8,2],[-15,3],[-92,18],[-1,0],[-31,10]],[[6204,5366],[22,-5],[1,0],[19,-5],[10,-2],[1,0],[32,-8],[11,-2],[40,-10],[3,-1],[14,-3],[9,-2],[1,0],[19,-5],[41,-9],[13,-3],[1,-1],[1,0],[2,0],[33,-8],[1,0],[2,-1],[24,-6],[22,-5]],[[6526,5290],[-15,-20],[-9,-12],[-5,-7],[-16,-22],[-3,-4],[-29,-40],[-9,-13],[-7,-10],[-10,-13],[-5,-6],[-40,-56],[-15,-20],[-10,-14],[-8,-11],[-6,-9],[-15,-20],[-6,-8],[-3,-5],[-7,-9],[-6,-8],[-2,-3],[-5,-7],[12,-7],[-2,-4],[-3,-4],[-3,-4],[-3,-4],[-4,-3],[-3,-4],[-4,-3],[-4,-4],[-4,-3],[-4,-4],[-5,-3],[-4,-3],[-8,-7]],[[6256,4916],[-3,1],[-38,9],[-3,0],[-7,2],[-1,0],[-17,4],[-8,2],[-5,1],[-5,1],[-3,1],[-3,1],[-13,3],[-11,2],[-3,1],[-2,1],[-14,3],[-4,1],[-5,1],[-3,1],[-3,0],[-6,2],[-6,1],[-6,2],[-15,3],[-1,0],[-3,1],[-6,2],[-30,7],[-19,4]],[[6013,4973],[-64,16]],[[6866,5217],[-4,-4],[-4,-4],[-3,-3],[-4,-3],[-2,-4],[-3,-3],[-4,-5],[-4,-3],[-6,-4],[-6,-2],[-6,-3],[-5,-2],[-7,-1],[-7,-1],[-7,0],[-8,0],[-8,-1],[-6,-2],[-3,-4],[-1,-4],[0,-4],[0,-5],[0,-3],[1,-5],[2,-5],[3,-4],[1,-5],[1,-4],[1,-4],[1,-4],[0,-4],[-1,-6],[-2,-4],[-2,-4],[-1,-5],[-1,-4],[1,-5],[1,-4],[0,-3],[-1,-5],[0,-5],[-2,-4],[-4,-4],[-4,-5],[-4,-4],[-5,-3],[-6,-4],[-6,-3],[-6,-2],[-6,-3],[-5,-1],[-7,-2],[-7,-3],[-6,-2],[-6,-3],[-5,-3],[-2,-4],[-2,-4],[-4,-3],[-5,-3],[-6,-2],[-6,-2],[-9,-4],[-11,-5],[-6,-2],[-6,-2],[-6,-3],[-5,-2],[-6,-2],[-5,-3],[-5,-3],[-4,-3],[-4,-3],[-5,-3],[-4,-4],[-3,-3],[-3,-4],[-3,-3],[-3,-4],[-3,-3],[-2,-4],[-3,-4],[-2,-4],[0,-4],[0,-3],[-2,-4],[-1,-4],[-2,-4],[-5,-2],[-6,-2],[-6,-1],[-6,0],[-7,-1],[-7,0],[-6,0],[-8,1],[-5,-2],[-5,-3],[-3,-4],[-2,-4],[-2,-4],[-1,-3],[-1,-4],[1,-4],[2,-4],[2,-4],[2,-4],[3,-4],[3,-3],[3,-4],[2,-3],[5,-7],[1,-1]],[[6519,4854],[-25,6],[-9,2],[-1,0],[-3,1],[-1,0],[-1,0],[-3,1],[-1,0],[-4,1],[-12,3],[-9,2],[-35,8],[0,1],[-24,5],[-25,6],[-15,3],[-11,3],[-2,1],[-9,2],[-1,0],[-17,4],[-20,5],[-1,0],[-8,2],[-12,3],[-6,1],[-8,2]],[[6526,5290],[60,-12],[246,-54],[34,-7]],[[2846,5252],[251,-63],[40,-10],[145,-36],[38,-9]],[[3320,5134],[-51,-67],[-8,-11],[-50,-66],[-57,-78],[-15,-19],[-41,-56],[-20,-26],[-44,10],[-6,16],[4,20],[-3,47],[-1,9],[-6,73],[-130,-43],[-105,-31],[-17,-5],[-88,-28],[-29,-9],[-10,-3],[-82,21],[-21,7],[-30,6]],[[2510,4901],[-106,25],[46,62],[59,79]],[[5407,5097],[-10,-11],[-11,-14],[-14,-15],[-9,-11],[-9,-11],[-15,-17],[-13,-16],[-8,-10],[-12,-14],[-13,-15],[-11,-14],[-12,-14],[-11,-12],[-7,-9],[-12,-14],[-14,-17],[-13,-15],[-9,-12],[-14,-17],[-10,-11],[-13,-16],[-12,-14],[-12,-15],[-13,-16],[-12,-14],[-11,-13],[-9,-11],[-14,-18]],[[5084,4711],[-20,6],[-18,4],[-25,7],[-21,5],[-26,7],[-30,8],[-29,8],[-28,7],[-26,7],[-26,7],[-27,7],[-23,6],[-23,6],[-22,6],[-26,6],[-28,8],[-27,7],[-23,6],[-21,6],[-18,4],[-77,21]],[[4520,4860],[21,33],[9,17],[32,41],[4,5],[10,11],[10,13],[9,11],[9,11],[16,18],[13,16],[11,13],[16,20],[21,25],[13,16],[16,20],[12,15],[15,17],[18,22],[19,24],[20,23],[19,24]],[[2225,5071],[-9,-84],[-1,-10]],[[2215,4977],[-61,-6],[-246,-23],[-26,-3],[-220,-39],[-114,-21]],[[1548,4885],[2,7],[2,3],[0,4],[-2,4],[-2,4],[-3,3],[-4,4],[-4,3],[-4,3],[-4,3],[-5,2],[-5,3],[-6,0],[-7,1],[-6,1],[-6,2],[-5,1],[-5,3],[-2,4],[-1,4],[-2,4],[-1,4],[2,3],[3,4],[4,3],[6,2],[6,1],[5,2],[3,4],[1,4],[0,4],[5,5],[3,3],[2,4],[2,4],[1,4],[1,4],[2,6]],[[3834,5008],[-11,-17],[-56,-76],[-3,-4],[-54,-73],[-58,-76],[-13,-19],[-42,-57],[-29,-37]],[[3568,4649],[-24,5],[-8,-12],[-15,-21],[-8,-13],[-4,-5],[-9,-14],[-10,-15],[-5,-7]],[[3485,4567],[-5,2],[-7,2],[-5,1],[-6,2],[-4,3],[-2,4],[1,4],[4,3],[5,2],[6,0],[5,3],[1,4],[-1,4],[1,4],[0,4],[-5,2],[-4,3],[-6,3],[-6,1],[-6,0],[-7,-1],[-5,3],[-2,5],[-3,4],[-3,3],[-2,4],[0,4],[3,3],[5,1],[7,2],[3,3],[-2,3],[-7,0],[-6,1],[-5,3],[-4,3],[-2,3],[-3,4],[-2,4],[0,3],[-30,8],[-16,4],[-80,19],[-27,8],[-14,4],[-38,-42],[-71,18],[-43,11],[-62,15]],[[3035,4718],[1,1],[-4,77],[-47,-15],[-12,-4],[-25,-9],[-46,-14],[-47,-15],[-84,-25],[-6,-3],[-44,-15],[-46,-14],[-17,-6],[-13,-4],[-34,-12]],[[2611,4660],[-22,60],[-7,19],[-18,45],[-5,14],[-13,35],[-37,-12],[0,34],[1,11],[0,7],[0,18],[0,10]],[[3320,5134],[31,-7],[13,16],[19,24],[62,71]],[[3445,5238],[20,-6],[-10,-12],[-14,-17],[33,-8],[-24,-29],[93,-26],[-20,-23],[31,-9],[-23,-30],[303,-70]],[[1217,4994],[6,-12],[72,-152],[16,-34]],[[1311,4796],[-22,-2],[-28,-3],[-39,-3],[-44,-4],[-19,-1],[-48,-5],[-52,-4],[-57,-5],[-60,-5],[-54,-4],[-71,-6],[-83,-7],[-75,-7],[-63,-5],[-32,-3]],[[564,4732],[3,6],[3,4],[-2,6],[-3,3],[-6,4],[-5,3],[-4,2],[-7,4],[-6,3],[-5,3],[-5,5],[-4,4],[-1,9],[0,4],[2,4],[3,8],[2,4],[3,5],[3,5],[0,4],[3,4],[4,7],[3,5],[5,7],[3,5],[4,9],[4,6],[1,4],[0,4],[-3,5],[-3,4],[-4,7],[-5,6],[-4,6],[-5,6],[-6,7],[-6,7],[-2,4],[-4,5],[-3,5],[-4,5],[-5,5],[-6,9],[-6,7],[-5,5],[-8,5],[-6,4],[-7,3],[-9,5],[-6,3],[-4,5],[-1,3],[-2,4],[-3,9],[-3,8],[-4,6],[-3,4],[-2,7],[-3,9],[-2,5],[-2,5],[-2,4],[-2,5],[-3,4],[-5,7],[-4,5],[-4,7],[-3,4],[-4,6],[-5,10]],[[6013,4973],[-39,-43],[-9,-10],[-29,-32],[-11,-12],[-1,-1],[-5,-6],[-8,-9],[-4,-4],[-16,-17],[-12,-14],[-31,-35],[-45,-49],[-1,-1],[-7,-8],[-18,-19],[-2,-3],[-17,-19],[-1,-1],[-3,-4],[-2,-1],[0,-1],[-36,-43],[0,-1],[-10,-11],[-28,-35]],[[5678,4594],[-34,5],[-10,2],[-1,0],[-19,4],[-15,3],[-8,2],[-53,10],[-3,1],[-1,0],[-19,4],[-32,7],[-18,3],[-6,1],[-1,1],[-34,6],[-3,1],[-33,7],[-26,5],[-1,0],[-2,1],[-6,1],[-20,3],[-1,0],[-27,5],[-2,1],[-27,4],[-41,8],[-31,5],[-2,0],[-13,3],[-14,2],[-68,11],[-11,2],[-22,4]],[[5074,4706],[10,5]],[[4169,4509],[-1,-1],[-14,3],[-1,1],[-2,0],[-12,3],[-3,1],[-3,1],[-1,0],[-1,0],[-36,9]],[[4095,4526],[-27,6],[-500,117]],[[3834,5008],[15,14],[32,-8]],[[3881,5014],[242,-59],[123,-28],[49,-11],[74,-18],[8,-1],[115,-30],[28,-7]],[[4520,4860],[0,-1],[-14,-12],[-1,-1],[-10,-9],[-1,-2],[-2,-2],[-1,-1],[-8,-8],[-6,-6],[-1,0],[-2,-2],[-1,-1],[-10,-10],[-2,-2],[0,-1],[-1,0],[-2,-2],[-3,-3],[-12,-12],[-1,-1],[-1,-1],[-20,-20],[-9,-9],[0,-1],[-1,0],[-3,-3],[-6,-7],[-1,0],[-5,-5],[-11,-11],[-3,-4],[-5,-4],[-17,-17],[-7,-8],[-4,-4],[-1,-1],[-3,-3],[-6,-6],[-1,-1],[-2,-1],[-2,-2],[-5,-5],[0,-1],[-3,-2],[-1,-1],[-2,-2],[-3,-3],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-3,-3],[-3,-3],[-1,-1],[-1,-1],[-2,-2],[-3,-2],[-6,-6],[-7,-7],[-1,0],[-1,-2],[-9,-8],[-4,-5],[-1,-1],[-2,-2],[-2,-2],[-5,-5],[-4,-5],[-1,0],[-5,-6],[-1,0],[-10,-11],[-22,-22],[0,-1],[-1,0],[-27,-28],[-9,-9],[-16,-17]],[[6519,4854],[3,-4],[3,-3],[0,-4],[-5,-3],[-6,-1],[-6,-2],[-5,-2],[-5,-2],[-6,-1],[-7,-1],[-6,0],[-7,0],[-7,-1],[-6,-1],[-6,-1],[-6,-2],[-4,-3],[-2,-4],[-1,-4],[0,-4],[-1,-4],[-1,-3],[-3,-4],[-4,-4],[-2,-3],[-3,-4],[-1,-4],[2,-4],[1,-4],[2,-3],[2,-4],[2,-4],[3,-4],[2,-4],[3,-3],[3,-5],[2,-4],[2,-4],[2,-3],[0,-4],[-1,-4],[0,-4],[0,-4],[0,-5],[1,-4],[0,-4],[1,-3],[1,-4],[1,-4],[0,-5],[-1,-3],[-1,-5],[-2,-3],[-2,-4],[-3,-4],[-4,-3],[-3,-4],[-2,-3],[-3,-4],[-2,-3],[-3,-4],[-3,-4],[-3,-4],[0,-4],[0,-3],[1,-4],[2,-4],[2,-4],[2,-4],[2,-3],[3,-4],[3,-3],[3,-4],[2,-3],[3,-4],[2,-4],[2,-3],[0,-4],[-1,-4],[-1,-5],[-2,-4],[-1,-5],[-6,-5],[-4,-3],[-6,-2],[-5,-3],[-5,-3],[-5,-3],[-3,-3],[-3,-4],[-2,-4],[-2,-3],[-1,-4],[-2,-4],[-2,-5],[-2,-4],[-2,-3],[-3,-4],[-4,-3],[-3,-4],[-4,-3],[-5,-3],[-6,-2],[-6,-1],[-5,-2],[-5,-3],[-5,-2],[-4,-3],[-4,-4],[-2,-4],[0,-4],[0,-5],[2,-3],[4,-4],[3,-3],[-1,-4],[-3,-4],[-3,-4],[0,-4],[0,-4],[0,-5],[0,-3],[0,-4]],[[6340,4431],[-7,-1],[-8,2],[-63,15],[-8,3],[-12,3],[-22,5],[-23,6],[-7,2],[-13,3],[-14,3],[-23,6],[-10,3],[-31,8],[-6,1],[-16,4],[-10,2],[-20,5],[-8,3],[-10,2],[-44,11],[-21,5],[-15,4],[-13,3],[-27,7],[-9,3],[-14,3],[-16,4],[-23,6],[-28,7],[-22,5],[-15,4],[-39,10],[-8,2],[-32,8],[-25,6]],[[5074,4706],[-10,-9],[0,-1],[-1,-1],[-8,-8],[-9,-9],[-31,-33],[-7,-7],[-26,-27],[-17,-17],[-3,-4],[-11,-11],[-16,-16],[-27,-29],[-2,-2],[-1,0],[-7,-7],[-3,-3],[-1,-1],[-1,-1],[-2,-2],[-6,-6],[-4,-4],[-15,-15],[-5,-5],[-5,-5],[-2,-2],[-1,-1],[-4,-4],[-5,-6],[-1,-1],[-4,-4],[-31,-32],[-23,-24],[-14,-15],[-6,-6],[-6,-7],[-16,-15]],[[4743,4366],[-12,3],[-15,3]],[[4716,4372],[-27,7],[-62,16],[-78,20],[-70,18],[-70,18],[-76,19],[-65,16],[-49,11],[-50,12]],[[1329,4708],[6,-31],[8,-38],[8,-38],[9,-38],[7,-38],[8,-38],[8,-38],[9,-40],[-70,-5],[-51,-5]],[[1271,4399],[-25,-2],[-46,-3],[-22,-2],[-13,-1],[-32,-2],[-30,-2],[-30,-3],[-37,-2],[-34,-3],[-57,-4],[-50,-4],[-49,-4],[-44,-3],[-53,-4],[-47,-3],[-44,-3],[-40,-3]],[[618,4351],[6,7],[3,4],[4,5],[4,5],[6,8],[5,5],[3,4],[4,5],[5,6],[4,6],[3,4],[4,4],[6,8],[3,7],[-2,4],[-4,5],[-5,4],[-4,4],[-3,4],[-5,6],[-2,4],[-1,6],[-3,7],[-1,5],[-2,5],[-2,6],[-3,4],[-4,3],[-6,5],[-10,6],[-9,6],[-8,3],[-6,3],[-6,3],[-7,3],[-7,4],[-9,5],[-13,8],[-7,4],[-2,6],[-1,5],[-1,4],[0,4],[-1,6],[-2,4],[-2,4],[-2,4],[-3,6],[-5,7],[-7,6],[-8,4],[-4,3],[-6,4],[-11,4],[-8,5],[-7,6],[-4,5],[-2,4],[-2,3],[-1,6],[1,5],[2,4],[3,7],[2,4],[3,4],[2,5],[4,7],[6,6],[4,4],[5,4],[6,4],[10,5],[9,4],[9,3],[8,2],[6,3],[5,5],[5,6],[4,4]],[[1311,4796],[18,-88]],[[3485,4567],[-25,-36],[-10,-14],[-12,-17],[-23,-32],[-4,-6],[-8,-11],[-6,-8],[-5,-6],[-87,-115],[6,-1],[26,-8],[23,-7],[21,-6],[-11,-15],[-13,-16],[-13,-18],[-14,-17],[-28,-37]],[[3302,4197],[-23,5],[-13,2],[-43,4]],[[3223,4208],[49,78],[-91,117],[-17,21],[-74,87],[-48,61],[-9,140],[1,3],[1,3]],[[5678,4594],[-17,-21],[-29,-25],[-1,0],[-16,-14],[-1,0],[-30,-26],[-19,-16],[-2,-2],[-8,-7],[-14,-12],[-30,-26],[-1,-1],[-1,-1],[-31,-26],[-1,-1],[-14,-12],[-27,-23],[-12,-10],[-14,-12],[0,-1],[-16,-13],[-42,-36],[-84,-72]],[[5268,4237],[-3,-3],[-5,-4],[-5,-4],[-2,-1],[-2,-3],[-1,0],[-1,-1],[-1,-2]],[[5248,4219],[-1,0],[-6,2],[-6,1],[-7,1],[-3,2],[-2,1],[-3,2],[-2,2],[-2,2],[-2,2],[-1,2],[-2,3],[-2,2],[-2,3],[-2,2],[-1,2],[-1,2],[-1,0],[-35,10],[-7,2],[-1,0],[-1,0],[-40,11],[-11,3],[-17,6],[-21,5],[-24,5],[-15,4],[-12,3],[-40,9],[-101,24],[-8,2],[-8,2],[-17,4],[-18,5],[-28,7],[-11,3],[-1,0],[-43,11]],[[4095,4526],[-279,-399],[73,-20],[36,-10]],[[3925,4097],[-23,-38],[-6,1]],[[3896,4060],[-594,137]],[[6340,4431],[-4,-6],[-5,-3],[-5,-3],[-6,-2],[-6,-3],[-5,-1],[-7,-2],[-7,-1],[-6,-1],[-6,-2],[-5,-1],[-4,-3],[-3,-4],[-3,-3],[-3,-4],[-2,-3],[-3,-4],[-3,-3],[-3,-4],[-3,-3],[-3,-4],[-4,-4],[-5,-3],[-3,-3],[-2,-4],[-3,-4],[-5,-3],[-3,-3],[-3,-4],[-2,-4],[-2,-4],[-3,-3],[-4,-3],[-5,-3],[-6,-3],[-5,-3],[-6,-2],[-6,-2],[-7,-2],[-6,-1],[-7,-1],[-6,-1],[-7,-1],[-6,-2],[-6,-1],[-6,-3],[-5,-3],[-5,-3],[-6,-3],[-5,-2],[-6,-2],[-6,-2],[-6,-2],[-7,-3],[-7,-2],[-6,-3],[-6,-2],[-5,-3],[-6,-2],[-5,-2],[-7,-1],[-7,2],[-6,0],[-7,1],[-6,-2],[-5,-3],[-3,-4],[-4,-4],[-3,-4],[-2,-4],[-1,-4],[-2,-4],[-5,-3],[-4,-3],[-5,-2],[-6,-2],[-6,-2],[-5,-3],[-4,-3],[-3,-4],[-4,-3],[-4,-3],[-3,-3],[-3,-5],[-3,-3],[-2,-4],[-4,-3],[-4,-3],[-5,-3],[-3,-4],[-5,-4],[-3,-3],[-3,-4],[-2,-4],[-5,-2],[-4,-4],[-4,-3],[-5,-2],[-6,-2],[-7,-2],[-4,-3],[-3,-4],[0,-4],[1,-3],[-2,-4],[-2,-4],[-2,-6],[-2,-5],[-2,-3],[-3,-4],[-4,-3],[-4,-3],[-3,-4],[-1,-4],[0,-4],[0,-7]],[[5848,4092],[-25,7],[-8,2],[-16,4],[-12,3],[-9,2],[-21,5],[-24,6],[-19,5],[-40,10],[-22,5],[-19,5],[-21,5],[-15,4],[-21,5],[-12,3],[-10,3],[-18,4],[-17,5],[-27,6],[-19,5],[-16,4],[-41,10],[-8,2],[-11,3],[-17,4],[-29,8],[-30,7],[-28,7],[-25,6]],[[4716,4372],[-7,-11],[-15,-23],[-21,-37],[-28,-42],[-28,-41],[-27,-39],[-42,-54],[-43,-54],[13,-3],[-24,-37],[-9,-13],[-19,-25],[-12,-17]],[[4454,3976],[-31,7],[-41,9],[-42,10],[-40,8],[-32,7],[-37,9],[-58,15],[-69,16],[-59,14],[-78,19],[-42,7]],[[1239,4042],[-2,-16],[-1,-12],[-1,-5],[-2,-15],[-1,-8]],[[1232,3986],[-211,8]],[[1021,3994],[-621,24]],[[400,4018],[5,5],[3,7],[2,6],[2,5],[2,5],[1,7],[2,4],[0,4],[-2,6],[-4,5],[-3,5],[2,6],[5,6],[7,6],[5,3],[6,2],[6,2],[6,2],[7,5],[5,4],[6,6],[3,7],[4,8],[5,7],[6,6],[6,4],[3,5],[3,6],[5,6],[8,8],[5,4],[6,4],[5,4],[10,5],[5,2],[8,7],[8,7],[8,7],[7,4],[5,5],[4,4],[3,3],[2,4],[1,5],[2,8],[-1,4],[0,6],[-1,4],[-1,4],[-2,8],[1,4],[1,9],[0,10],[1,7],[2,6],[5,6],[4,4],[4,4],[5,7],[3,6],[3,4],[4,4],[5,5]],[[1271,4399],[-6,-66]],[[1265,4333],[-26,-291]],[[5848,4092],[-2,-3],[0,-4],[-1,-9],[1,-4],[-1,-4],[-1,-4],[-1,-4],[0,-4],[2,-4],[3,-3],[3,-3],[5,-3],[3,-4],[1,-4],[-1,-4],[0,-4],[4,-3],[3,-4],[-3,-3],[-4,-3],[0,-4],[-1,-4],[-1,-4],[0,-4],[1,-4],[-3,-4],[-7,-3],[-3,-3],[-1,-4],[-4,-3],[-4,-4],[-4,-3],[-2,-4],[-3,-3],[-4,-3],[-3,-4],[-4,-3],[-5,-2],[-4,-3],[-2,-4],[-2,-4],[-1,-4],[-1,-3],[-1,-4],[0,-4],[-2,-6],[0,-4],[-1,-4],[2,-4],[2,-3],[2,-4],[-1,-4],[1,-4],[0,-3],[0,-4],[-2,-4],[-3,-3],[-5,-3],[-6,-3],[-5,-1],[-8,-1],[-6,-1],[-6,-2],[-5,-2],[-5,-2],[-5,-2],[-6,-2],[-5,-2],[-5,-2],[-3,-4],[-2,-4],[0,-5],[3,-4],[4,-2],[4,-4],[-2,-3],[-3,-4],[-4,-3],[0,-4],[-1,-4],[-5,-2],[-6,-2],[-5,-3],[-2,-4],[-1,-4],[-1,-4],[-2,-4],[-2,-4],[-1,-4],[-2,-4],[-1,-4],[0,-4],[0,-4],[1,-3],[1,-4],[3,-4],[1,-4],[2,-4],[2,-4],[6,-2],[5,-2],[6,-3],[4,-3],[2,-3],[-3,-4]],[[5729,3727],[-9,1],[-57,10],[-8,1],[-19,3],[-14,3],[-17,3],[-9,1],[-16,3],[-10,2],[-8,1],[-42,7],[-56,9],[-20,3],[-30,4],[-8,1],[-23,4],[-12,2],[-20,3],[-9,1],[-20,3],[-20,3],[-8,1],[-11,2],[-19,3],[-11,2],[-68,10],[-38,6],[-35,5],[-6,1],[-13,2],[-42,7]],[[5051,3834],[-3,0],[-1,1],[-3,0],[-2,1],[-5,1],[-4,6],[-1,1],[-1,7],[-6,12],[-3,2],[-1,0],[-2,1],[-3,1],[-3,1],[-17,0],[-7,0]],[[4989,3868],[8,10],[16,22],[3,5],[10,12],[5,7],[5,7],[7,9],[7,10],[29,38],[7,10],[22,29],[20,29],[8,11],[7,9],[11,16],[10,13],[16,22],[9,12],[20,27],[6,8],[8,11],[16,21],[9,13]],[[3896,4060],[-16,-23],[-76,-114],[-45,-68],[-6,-9],[-9,-14],[-47,-62],[-57,-77],[-3,-4],[-29,-40]],[[3608,3649],[-74,17]],[[3534,3666],[-20,4],[-99,23],[-23,5],[-58,13],[-65,16],[-122,29],[-53,12],[-43,11],[15,27],[24,39],[45,76],[10,17],[35,60],[46,76],[45,78],[-127,-38],[-29,-9]],[[3115,4105],[19,45],[10,18],[31,57],[48,-17]],[[4454,3976],[-6,-9],[56,-14]],[[4504,3953],[-5,-7],[-12,-17],[-7,-10],[-8,-11],[0,-1],[-4,-6],[-15,-20],[-12,-17],[-8,-11],[-3,-5],[-2,-2],[-4,-5],[-3,-6],[-2,-2],[-9,-13],[-8,-11],[-8,-11],[0,-1],[-16,-22],[-3,-4],[-3,-5],[-1,-1],[-4,-6],[-4,-5],[-11,-16],[-7,-10],[-5,-7],[-2,-3],[-5,-7],[-2,-3],[-8,-11],[-14,-19],[-3,-5],[-7,-10],[-9,-13],[-2,-2],[-2,-3],[-2,-3],[-1,-1],[-16,-23],[-5,-7],[-9,-13],[-9,-12],[-3,-5],[-4,-5],[-6,-9],[-16,-21],[-2,-5],[-10,-13],[-2,-4]],[[4201,3524],[-34,8]],[[4167,3532],[-41,8],[-52,10],[-84,19],[-21,5],[-146,30],[-200,42],[-2,1],[-3,0],[-10,2]],[[1021,3994],[-47,-82],[-5,-8],[-27,-88],[-2,-4],[-7,0],[-5,-1],[-8,-6]],[[920,3805],[-5,6],[-4,4],[-6,3],[-6,3],[-7,-1],[-5,-4],[-4,-4],[-3,-5],[-4,-3],[-8,1],[-4,3],[-3,4],[-8,2],[-7,1],[-6,3],[-1,5],[-5,-3],[-7,-2],[-7,0],[-9,1],[-6,-2],[-7,-4],[-7,-1],[-8,-1],[-7,1],[-5,4],[-6,3],[-6,-1],[-4,-3],[-8,0],[-6,-3],[-2,-4],[-8,-1],[-7,-1],[-4,4],[-5,4],[-8,-2],[-5,-3],[-4,-3],[-3,-4],[-3,-5],[-7,-4],[-8,1],[-5,4],[-4,6],[-3,4],[-3,4],[-7,0],[-10,-1],[-6,-2],[-3,-3],[-7,-1],[-11,-1],[-8,-2],[-8,-1],[-7,2],[-8,4],[-7,0],[-7,-1],[-2,-4],[-1,-7],[6,-6],[6,-5],[-4,-4],[-7,-5],[-5,-5],[-6,-5],[-6,-6],[-4,-4],[4,-4],[4,-4],[-2,-4],[-7,-2],[4,-3],[7,-2],[4,-3],[3,-5],[2,-5],[-3,-4],[-7,-6],[-5,-2],[-4,-4],[-6,-4],[0,-3],[3,-4],[-10,-3],[-8,1],[-7,0],[-5,-3],[-3,-4],[4,-3],[2,-5],[3,-4],[2,-5],[-3,-4],[-6,-1],[-6,1],[-8,-1],[-5,-2],[-1,-4],[3,-5],[4,-4],[7,-2],[8,-1],[3,-4],[-3,-4],[-8,-5],[-5,-4],[3,-4],[4,-4],[5,-4],[2,-5],[-2,-6],[-2,-4],[-2,-5],[-5,-2],[-9,-1],[-12,0],[-8,-3],[-5,-5],[1,-5],[2,-4],[-2,-4],[-7,-1],[-6,0],[-7,-2],[-2,-5],[-7,-1],[-8,2],[-10,4],[-10,4],[-9,3],[-8,3],[-7,5],[-7,4],[-9,4],[-5,3],[-7,2],[-6,4],[-8,3],[-5,3],[-4,4],[-5,6],[-7,5],[-9,3],[-9,1],[-12,2],[-5,2],[-8,5],[-6,7],[-3,7],[2,6],[3,4],[2,4],[4,4],[4,3],[4,4],[2,4],[3,4],[3,4],[3,6],[4,5],[3,3],[4,4],[6,8],[1,7],[-1,6],[-3,7],[-2,4],[-2,4],[-4,8],[1,5],[4,4],[4,6],[4,4],[3,3],[4,4],[4,4],[3,3],[4,7],[0,6],[-3,4],[-3,4],[-6,6],[-6,6],[-6,7],[-3,3],[-5,5],[-4,3],[-4,4],[-3,4],[-5,4],[-3,5],[-2,6],[1,4],[3,5],[2,3],[2,6],[1,5],[3,6],[6,6],[4,3],[7,3],[7,2],[10,4],[7,5],[5,6],[4,6],[3,4],[1,5],[0,6],[0,4],[2,6],[2,5],[4,4],[5,5],[5,7],[2,4],[2,5],[3,5],[3,5],[5,7],[3,6],[0,6],[1,4],[2,5],[2,4]],[[1232,3986],[-4,-73],[-11,-152],[-7,-109]],[[1210,3652],[-2,-7],[0,-6],[-1,-6],[0,-4],[0,-5],[-1,-5],[0,-6],[0,-4],[0,-8],[0,-6],[-1,-4],[0,-9],[0,-4],[-1,-5],[0,-5],[0,-7],[-1,-5],[0,-7],[0,-5],[0,-6],[-1,-4],[0,-10],[0,-5],[-1,-8],[0,-6],[0,-5],[-1,-7],[0,-4],[-1,-5],[0,-5],[-1,-8],[0,-5],[-1,-6],[0,-5]],[[1197,3455],[-9,4],[-6,1],[-7,1],[-2,4],[3,3],[4,3],[-3,3],[2,4],[-4,3],[5,3],[-4,3],[-3,4],[5,3],[4,2],[-2,4],[0,4],[-2,4],[-4,3],[-5,2],[-7,1],[1,4],[-4,7],[-5,3],[-5,3],[0,4],[-3,3],[-3,4],[-3,3],[-6,2],[2,3],[-3,4],[-5,2],[-4,3],[-5,2],[-6,2],[-7,1],[-2,4],[-1,4],[-6,1],[-5,-2],[-6,0],[0,6],[3,4],[-2,3],[-7,0],[-6,0],[-5,3],[-6,0],[-7,0],[-6,1],[-6,3],[-3,3],[-6,0],[-7,-1],[-6,-1],[0,5],[0,4],[0,4],[-4,4],[-7,0],[-4,3],[-5,3],[-5,-3],[-6,0],[-7,-1],[-5,-3],[-6,1],[-4,3],[-7,-1],[-7,-1],[-6,-1],[-2,3],[-5,2],[2,4],[3,4],[3,3],[6,2],[7,5],[3,5],[-3,4],[-6,1],[-4,3],[-6,1],[-4,3],[4,3],[3,4],[2,4],[3,4],[4,4],[3,3],[2,5],[1,3],[1,4],[-1,5],[0,4],[3,3],[5,4],[-5,2],[-2,4],[-2,4],[2,4],[0,4],[-5,3],[-2,3],[-3,4],[-4,3],[-4,4],[-3,4],[-5,2],[-3,4],[-5,2],[-4,3],[-5,-3],[-6,-1],[-2,4],[2,4],[4,3],[4,4],[-5,2],[1,4],[1,5],[3,4],[0,4],[-3,3],[-5,3],[-4,3],[0,4],[2,4],[3,4],[2,5]],[[5729,3727],[3,-5],[1,-6],[0,-5],[-2,-4],[-6,-5],[-6,1],[-6,-2],[-7,-3],[-5,-3],[-6,-3],[-4,-3],[-5,-4],[-7,-4],[-7,-4],[-4,-3],[-4,-3],[-6,-3],[-7,-3],[-6,-2],[-5,-2],[-5,-3],[-3,-3],[-5,-4],[-6,-2],[-6,-1],[-6,-1],[-6,-2],[-7,1],[-6,-1],[-3,-4],[-6,-2],[-7,-2],[-6,-1],[-6,-1],[-6,-2],[-7,-2],[-6,-1],[-5,-4],[-8,-2],[-6,-1],[-7,-3],[-5,-3],[-5,-2],[-5,-3],[-5,-4],[-6,-4],[-5,-3],[-4,-3],[-4,-3],[-4,-4],[0,-5],[-1,-4],[0,-4],[1,-4],[0,-4],[1,-4],[2,-4],[-3,-4],[-6,-1],[-4,-4],[-3,-4],[0,-4],[1,-4],[0,-4],[1,-4],[2,-4],[0,-4],[2,-4],[1,-4],[0,-5],[1,-4],[-1,-5],[2,-4],[1,-4],[0,-4],[0,-4],[-2,-4],[-1,-4],[-1,-4],[1,-4],[2,-4],[1,-4],[1,-4],[1,-4],[-1,-5],[-2,-6],[-4,-4],[-3,-4],[-2,-3],[-3,-5],[-3,-4],[-4,-3],[-3,-4],[-3,-3],[-4,-5],[-4,-4],[-6,-4],[-4,-4],[-6,-2],[-6,1],[-7,0],[-5,-3],[-2,-3],[-2,-4],[-3,-4],[-1,-3],[0,-5],[0,-6],[-1,-4]],[[5394,3364],[-11,-1],[-7,0],[-7,1],[-31,3],[-9,1],[-70,6],[-28,2],[-21,2],[-45,4],[-10,0],[-27,3]],[[5128,3385],[-24,2],[-7,0],[-9,1],[-16,2],[-6,1],[-6,0],[-10,1],[-7,1],[-13,1],[-26,3],[-10,1],[-42,3],[-23,2],[-10,1],[-32,3],[-10,0],[-27,3],[-26,2],[-6,0],[-25,2],[-12,1],[-22,2],[-19,2]],[[4740,3419],[2,3],[8,11],[1,1],[5,8],[9,12],[14,21],[9,14],[1,0],[8,13],[15,20],[3,5],[6,7],[3,5],[3,5],[7,9],[0,1],[3,3],[25,37],[3,4],[6,10],[1,0],[4,5],[9,12],[2,4],[14,19],[5,8],[13,19],[13,17],[0,2],[6,7],[0,1],[4,5],[9,13],[10,14],[0,1],[5,7],[15,21],[6,8],[20,25],[4,4],[5,7],[6,7],[13,9],[6,4],[2,1],[1,1],[1,1],[6,4]],[[4089,3081],[-227,45],[-19,3],[-75,15]],[[3768,3144],[-13,3],[-92,18],[-26,5],[-9,1],[-35,6],[-68,13]],[[3525,3190],[11,55],[-95,20],[4,16],[9,36],[5,19],[11,48],[16,67],[2,10],[3,11],[22,100],[10,44]],[[3523,3616],[11,50]],[[4167,3532],[-12,-55],[-14,-66],[-14,-87],[-13,-79],[-16,-85],[-7,-46],[-1,-18]],[[4090,3096],[-1,-15]],[[3525,3190],[-165,18],[-26,-1],[-61,-2],[-62,-2],[-61,-3],[-98,-6]],[[3052,3194],[-30,-1],[-116,-4],[-138,-6],[-3,21],[0,6]],[[2765,3210],[-1,6],[-3,44],[-3,50],[-2,38],[-3,44],[-3,40],[-2,30],[-11,133]],[[2737,3595],[166,5],[245,6],[244,7],[131,3]],[[4734,3041],[-12,1],[-55,4],[-60,6],[-62,5],[-59,5],[-69,6],[-69,6],[-80,6],[-33,3],[-43,4],[-54,4],[-48,5]],[[4201,3524],[20,-3],[20,-4],[3,-1],[1,0],[14,-3],[31,-6],[26,-5],[1,0],[5,-1],[65,-13],[56,-11],[30,-6],[15,-3],[2,-1],[2,0],[26,-5],[24,-5],[8,-1],[65,-13],[1,0],[10,-2],[50,-10],[36,-8],[9,-2]],[[4721,3421],[2,-25],[2,-25],[1,-28],[2,-29],[1,-26],[1,-10],[1,-34],[0,-37],[1,-42],[1,-48],[1,-39],[0,-37]],[[5394,3364],[1,-7],[-3,-7],[-3,-6],[-3,-7],[-1,-4],[0,-7],[4,-6],[4,-5],[9,-5],[5,-2],[5,-3],[5,-3],[10,-5],[5,-3],[8,-5],[5,-3],[7,-5],[4,-5],[2,-4],[1,-3],[4,-6],[5,-6],[5,-6],[3,-5],[1,-6],[0,-6],[-1,-4],[-1,-6],[-2,-6],[-2,-7],[-1,-6],[0,-7],[0,-5],[-1,-6],[-2,-6],[-2,-5],[-5,-5],[-5,-4],[-7,-5],[-5,-2],[-6,-5],[-4,-3],[-5,-3],[-4,-4],[-4,-3],[-5,-4],[-1,-5],[1,-5],[1,-5],[3,-4],[1,-5],[0,-5],[-1,-4],[2,-5],[1,-5],[1,-5],[2,-4],[1,-5],[0,-6],[0,-4],[-1,-5],[-2,-4],[-3,-5],[-5,-5],[-3,-4],[-1,-3],[-3,-7],[-2,-5],[-2,-6],[-3,-5],[-1,-6],[-2,-4],[0,-7],[0,-7],[1,-10],[0,-7],[-1,-4]],[[5398,2977],[-10,0],[-6,0],[-15,2],[-7,1],[-10,2],[-7,0],[-50,4],[-76,7],[-29,2],[-41,4],[-42,3]],[[5105,3002],[5,46],[3,36],[2,26],[2,26],[1,21],[1,31],[1,27],[1,23],[0,25],[1,15],[2,34],[2,30],[1,24],[1,19]],[[3052,3194],[-3,-36],[-1,-5],[-2,-33],[-2,-38],[-4,-45],[-2,-32],[-1,-32],[-3,-38],[-5,-20],[-2,-15],[-1,-26],[-1,-22],[-1,-22]],[[3024,2830],[-115,3],[-72,2],[-89,3],[-83,2],[-35,1],[-116,2],[-70,1]],[[2444,2844],[-24,0],[-101,6],[-15,1]],[[2304,2851],[9,45],[10,57],[10,50],[7,42],[36,13],[3,51],[2,47],[2,43],[2,48]],[[2385,3247],[32,-1],[67,-2],[1,17],[117,-4],[-2,-45],[61,-1],[104,-1]],[[3585,2663],[-104,38],[-83,32],[-106,39],[0,-21],[-150,2]],[[3142,2753],[-6,74],[-112,3]],[[3768,3144],[-5,-10],[-5,-15],[10,-1],[8,-2],[-1,-2],[-6,-17],[-6,-15],[-10,-26],[-9,-21],[-12,-28],[-1,-2],[0,-1],[-1,-2],[0,-1],[0,-1],[-8,-17],[-10,-22],[-9,-19],[-7,-17],[-48,-71],[-58,-90],[-14,-24],[4,-27],[1,-12],[0,-4],[3,-18],[1,-16]],[[1805,2467],[-51,2],[-61,3],[-61,3],[-52,3],[-9,0],[-61,2],[-61,2],[-61,1],[-61,2],[-61,2],[-61,2],[-52,2]],[[1153,2491],[1,37],[2,37],[1,37],[2,39],[0,2],[2,38],[1,36],[2,31],[1,10],[1,18],[1,23],[1,22],[1,22],[2,28],[1,19]],[[1172,2890],[27,0],[88,-3],[67,-2],[90,-2],[100,-4],[64,-2],[80,-2],[126,-4]],[[1814,2871],[0,-4]],[[1814,2867],[-1,-19],[-2,-43],[-2,-56],[-1,-54],[-1,-60],[-1,-53],[0,-40],[-1,-75]],[[4086,2644],[-18,1],[-72,3],[-4,-57],[-2,-45],[-3,-21]],[[3987,2525],[-72,24],[-29,10],[-244,84],[-42,15]],[[3600,2658],[-15,5]],[[4089,3081],[-2,-7],[0,-34],[0,-34],[0,-25],[0,-52],[0,-48],[0,-41],[0,-49],[0,-25],[0,-18],[-1,-34],[0,-33],[0,-37]],[[2444,2844],[0,-35],[-1,-46],[-2,-65],[0,-54],[-1,-60],[-4,-39],[-9,-93]],[[2427,2452],[-64,2],[-61,2],[-61,2],[-61,2],[-61,0],[-60,0],[-61,-1],[-31,0],[-13,0],[-17,1],[-92,5],[-40,2]],[[1814,2867],[118,-4],[55,-1],[43,-2],[57,-1],[67,-1],[22,-1],[64,-2],[64,-4]],[[3142,2753],[-6,-53],[-6,-61],[-51,-3],[-8,-89],[-10,-115]],[[3061,2432],[-149,5],[-211,5],[-33,1],[-69,2],[-65,2],[-3,-57]],[[2531,2390],[-54,0],[-27,0],[15,41],[8,20],[-18,0],[-28,1]],[[3600,2658],[-9,-110],[-11,-122],[0,-3],[-1,-5],[-1,-4],[-1,-5],[0,-4],[0,-4],[0,-5],[-4,-82],[49,-9],[-4,-62],[-4,-69]],[[3614,2174],[-214,48],[-97,21]],[[3303,2243],[-2,152],[1,32],[-147,4],[-51,0]],[[3104,2431],[-43,1]],[[3987,2525],[-6,-129],[-7,-152],[-7,-142]],[[3967,2102],[-79,15],[-143,30]],[[3745,2147],[-101,21],[-30,6]],[[5350,2594],[-5,-6],[-3,-3],[-3,-4],[-3,-3],[-3,-4],[-3,-4],[-2,-3],[-2,-4],[1,-4],[2,-4],[3,-3],[17,-20],[4,-3],[4,-3],[3,-4],[3,-3],[3,-4],[5,-3],[6,-2],[5,-2],[5,-3],[4,-3],[3,-4],[3,-4],[3,-4],[1,-4],[-1,-4],[-4,-4],[-4,-3],[-4,-3],[-2,-4],[-4,-3],[-2,-4],[0,-4],[-3,-3],[-3,-4],[-3,-4],[-4,-3],[-3,-3],[0,-4],[0,-4],[-2,-4],[0,-4],[-2,-4],[-1,-4],[-1,-4],[-2,-4],[-3,-7],[2,-4],[-2,-4],[-4,-3],[-2,-4],[-2,-4],[-1,-4],[-2,-4],[-1,-4],[-1,-4],[-2,-4],[-2,-4],[-2,-4],[-2,-3],[-3,-4],[-2,-4],[-4,-3],[-2,-4],[-3,-4],[-1,-4],[-3,-4],[-3,-3],[-4,-4],[-3,-4],[-2,-4],[-2,-4],[-4,-3],[-3,-3],[-5,-4],[-5,-3],[-4,-3],[-3,-4],[-1,-4],[-1,-4],[-4,-3],[-5,-2],[-6,-2],[-6,-2],[-6,-1],[-6,-2],[-6,-2],[-6,-2],[-6,-1],[-6,-2],[-5,-2],[-5,-3],[-6,-2],[-3,-4],[-3,-4],[-1,-4],[-2,-3],[-2,-4],[-3,-4],[-1,-5],[1,-4],[1,-4],[-1,-4],[-2,-4],[-2,-4],[-1,-5],[1,-4],[1,-4],[2,-3],[2,-5],[0,-4],[1,-4],[2,-4],[2,-4],[2,-4],[3,-4],[2,-3],[3,-4],[4,-4]],[[5207,2147],[-7,-1],[-10,1],[-17,0],[-15,0],[-12,1],[-9,0],[-16,0],[-14,1],[-8,0],[-12,0],[-7,0],[-13,0],[-7,1],[-9,0],[-10,0],[-9,0],[-7,1],[-13,0],[-6,0],[-11,0],[-9,1],[-9,0],[-9,0],[-9,0],[-13,1],[-14,0],[-11,0],[-12,0],[-11,0],[-7,1],[-11,0],[-7,0],[-7,0],[-21,0],[-10,1],[-12,0],[-14,0],[-8,0],[-8,0],[-10,1],[-7,0],[-16,0],[-9,0],[-12,0],[-8,0],[-9,1],[-8,0],[-7,0],[-7,0],[-12,0],[-7,0],[-8,0],[-10,1],[-7,0],[-8,0],[-7,0]],[[4641,2158],[0,7],[0,5],[0,5],[0,5],[0,5],[0,7],[0,7],[1,4],[0,6],[0,5],[0,11],[0,5],[0,5],[0,5],[0,4],[0,7],[0,8],[1,6],[0,10],[0,6],[0,4],[0,6],[1,7],[0,9],[0,6],[0,6],[1,8],[0,4],[0,6],[0,5],[0,6],[0,6],[1,5],[0,6],[0,4],[0,5],[0,5],[0,6],[0,5],[0,7],[2,4],[1,9],[0,9],[1,5],[0,4],[1,7],[0,6],[0,5],[1,7],[0,6],[0,7],[1,6],[0,6],[0,5],[0,4],[1,7],[0,7],[0,4],[0,6],[0,6],[0,10],[0,4],[0,10],[0,6],[0,6],[0,5],[0,5],[0,5],[0,5],[0,5],[1,5],[0,4],[1,7],[0,5],[1,5],[1,6],[0,4],[1,8]],[[4659,2622],[10,-1],[7,0],[20,-1],[16,-1],[7,0],[11,0],[10,-1],[17,-1],[7,0],[14,-1],[15,0],[16,-1],[7,0],[9,-1],[37,-1],[14,-2],[32,-1],[12,-1],[28,-1],[21,-1],[17,0],[53,-3],[11,0],[7,0],[17,-1],[7,0],[20,-1],[9,0],[51,-1],[16,-1],[26,-1],[32,-2],[11,0],[16,-1],[12,-1],[9,0],[13,-1],[42,-1],[12,1]],[[1781,2068],[-1,-4],[-12,0]],[[1768,2064],[-65,1],[-83,1],[-93,2],[-83,2],[-94,2],[-82,3],[-90,2],[-13,1],[-19,0],[-15,-1]],[[1131,2077],[0,12],[1,24],[2,23],[1,33],[2,18],[1,12],[1,9],[1,10],[1,11],[0,5],[2,16],[1,10],[1,35],[2,37],[2,56],[1,36],[2,37],[1,30]],[[1805,2467],[0,-5],[0,-31],[0,-38],[0,-27],[0,-25],[0,-32],[-2,-21],[-1,-29],[-2,-26],[0,-15],[-4,-64],[-4,-23],[-6,-32],[-5,-31]],[[2531,2390],[-7,-150],[-9,-153],[-2,-40]],[[2513,2047],[-28,1],[-57,1],[-25,3]],[[2403,2052],[-25,1],[-10,0],[-6,0],[-6,0],[-7,0],[-26,1],[-9,0],[-11,0],[-7,0],[-16,1],[-8,0],[-12,0],[-14,1],[-11,0],[-12,0],[-11,1],[-18,0],[-9,0],[-11,0],[-10,0],[-11,1],[-7,0],[-9,0],[-9,0],[-8,1],[-10,0],[-8,0],[-11,0],[-11,0],[-15,1],[-11,0],[-7,0],[-7,0],[-13,0],[-12,1],[-10,0],[-13,0],[-10,0],[-23,1],[-18,0],[-57,2],[-35,1],[-56,1],[-12,2]],[[3104,2431],[-3,-15],[-2,-21],[-15,-153],[-12,-153],[-4,-60]],[[3068,2029],[-138,5],[-15,0],[-36,1],[-53,1],[-70,2],[-65,2],[-12,0],[-8,1],[-158,6]],[[3303,2243],[-140,29],[-3,-30],[-2,-33],[-2,-21],[-2,-26],[-1,-15],[-3,-58],[-5,-63],[-52,2]],[[3093,2028],[-25,1]],[[3745,2147],[4,-7],[5,-2],[-1,-4],[-1,-6],[-1,-4],[2,-4],[4,-2],[-4,-3],[-5,-2],[-6,-3],[-5,-2],[-6,-1],[-6,-2],[-2,-4],[-1,-4],[-1,-3],[-1,-4],[-2,-6],[-2,-4],[-5,-2],[-4,-3],[-1,-4],[0,-4],[1,-4],[0,-4],[-2,-3],[3,-4],[4,-3],[5,-7],[-8,-4],[-4,-3],[-5,-2],[-5,-5],[0,-4],[-2,-4],[-6,-3],[-42,-39],[-13,-11],[-6,-6],[-12,-3],[-15,-8],[-7,-13],[-14,-4],[-6,-8],[2,-4],[3,-7],[2,-12],[-15,-4],[-1,-5],[9,-8],[0,-8],[-8,-2],[-3,-6],[-14,-9],[-1,-15],[-5,-22],[-5,-9],[-4,-4],[0,-6],[4,-19],[6,-26]],[[3542,1759],[-8,1],[-454,102]],[[3080,1862],[7,75],[2,27],[3,44],[1,20]],[[4598,1786],[-223,-26],[-64,-6],[-57,-6],[-2,-9],[13,1],[-19,-26],[-15,-1],[-5,-5],[-7,-3],[-2,-9],[-23,-2]],[[4194,1694],[6,48],[-68,-7],[-60,-6],[-61,-7],[-27,-2]],[[3984,1720],[3,28],[3,38],[3,38],[3,38],[2,38],[3,38],[3,39],[2,38],[3,38],[2,38],[1,11]],[[4012,2102],[0,6],[28,2],[30,2],[61,5],[61,5],[61,5],[61,4],[61,5],[234,19]],[[4609,2155],[-6,-63],[-5,-306]],[[3984,1720],[-44,-4],[-6,-42],[-45,10],[-36,7]],[[3853,1691],[-102,21],[-83,18],[-22,5],[-104,24]],[[3967,2102],[45,0]],[[1744,1669],[-9,-1],[-11,1],[-12,0],[-9,0],[-8,0],[-40,1],[-49,0],[-49,0],[-49,1],[-8,0],[-40,0],[-35,0],[-14,1],[-8,0],[-18,0],[-22,0],[-40,0],[-14,1],[-6,0],[-9,0],[-10,0],[-9,0],[-59,1],[-25,1],[-37,1],[-8,0],[-12,0],[-22,1],[-7,0]],[[1105,1677],[3,19],[0,15],[1,16],[1,20],[1,23],[1,21],[0,15],[2,19],[1,18],[2,23],[2,21],[1,23],[3,36],[1,22],[2,20],[2,18],[0,15],[1,15],[1,26],[1,15]],[[1768,2064],[-2,-36],[-3,-48],[-1,-17],[0,-5],[-2,-26],[-1,-7],[-2,-39],[-1,-24],[-5,-83],[-3,-45],[0,-6],[-1,-8],[0,-5],[-1,-24],[-1,-5],[0,-8],[-1,-9]],[[3080,1862],[-7,-78],[-3,-44],[-1,-16],[-1,-7],[-5,-76]],[[3063,1641],[-148,3],[-66,3],[-57,3],[-110,5],[-7,1],[-8,0],[-65,1],[-70,2],[-100,2],[-6,-5],[-1,-9]],[[2425,1647],[-44,2],[-6,3]],[[2375,1652],[1,26],[3,41],[5,63],[0,9],[1,11],[1,7],[1,17],[1,12],[3,41],[4,38],[1,20],[1,5],[0,4],[0,5],[1,7],[0,4],[0,6],[1,6],[0,7],[0,4],[1,7],[0,5],[0,4],[0,4],[1,4],[0,13],[1,13],[1,17]],[[2375,1652],[-65,2],[-121,3],[-14,1],[-120,3],[-14,0],[-18,0],[-15,1],[-37,1],[-21,0],[-20,1],[-8,0],[-18,0],[-14,1],[-8,0],[-21,0],[-6,1],[-6,0],[-28,1],[-14,0],[-14,0],[-30,1],[-7,0],[-12,1]],[[3853,1691],[-22,-58],[-61,-153],[-43,-108]],[[3727,1372],[-79,1],[-243,5],[-242,5],[-120,2]],[[3043,1385],[4,47],[3,46],[3,45],[5,64],[4,44],[1,10]],[[4194,1694],[-9,-61],[-3,-24],[194,-7],[32,-1],[-32,-97],[-8,-23],[-6,-17]],[[4362,1464],[-7,-21],[-13,-39],[-13,-38],[-12,-38],[-7,-19],[-12,-38],[-12,-35],[-68,2],[-24,0],[-55,1]],[[4139,1239],[-102,3],[-146,3],[-210,7]],[[3681,1252],[16,42],[13,33],[17,45]],[[5189,1688],[5,-3],[4,-4],[4,-3],[5,-3],[4,-3],[3,-4],[2,-4],[0,-4],[0,-5],[1,-4],[0,-4],[0,-4],[-1,-4],[-1,-4],[-2,-4],[-2,-4],[-4,-4],[-4,-2],[-5,-3],[-5,-2],[-6,-2],[-7,-2],[-5,-2],[-4,-3],[-2,-4],[-3,-3],[-2,-4],[-1,-4],[0,-4],[1,-4],[2,-4],[2,-4],[3,-3],[5,-3],[4,-3],[3,-4],[2,-3],[1,-4],[-1,-5],[0,-4],[2,-4],[2,-4],[3,-3],[5,-3],[4,-3],[4,-4],[7,-5],[-2,-5],[-1,-2],[-3,-4],[-2,-1],[-1,-3],[-1,-4],[-3,-4],[-3,-3],[-4,-2],[-4,-3],[-3,-5],[-3,-3],[-5,-4],[-4,-3],[-4,-3],[-4,-3],[-3,-3],[-4,-4],[-4,-3],[-5,-2],[-5,-3],[-5,-2],[-6,-2],[-5,-2],[-5,-3],[-4,-4],[-3,-3],[-3,-4],[-3,-3],[-2,-4],[-4,-3],[-4,-4],[-5,-2],[-4,-3],[-6,-2],[-5,-2],[-5,-2],[-5,-3],[-4,-2],[-4,-3],[-4,-4],[-4,-3],[-4,-3],[-3,-4],[-3,-3],[-2,-4],[1,-7],[1,-4],[2,-3],[2,-4],[2,-4],[3,-3],[4,-3],[5,-2],[5,-3],[5,-3],[3,-3],[3,-4],[1,-4],[0,-4],[-1,-4],[-1,-4],[0,-4],[-1,-4],[0,-4],[-1,-4],[-1,-4],[-1,-4],[-2,-4],[-2,-4],[-1,-4],[-1,-4],[-1,-4],[0,-4],[1,-4],[1,-4],[3,-3],[3,-3],[3,-4],[2,-4],[3,-7]],[[5082,1244],[-57,0],[-74,2],[-89,2],[-97,3],[-146,2],[-87,2],[-25,1],[-47,0]],[[4460,1256],[3,15],[4,19],[4,19],[5,19],[8,38],[9,38],[1,6],[10,49]],[[4504,1459],[19,-1],[7,23],[19,55],[16,48],[16,50],[3,10],[6,18],[5,12],[4,12],[2,6],[2,8]],[[4603,1700],[16,-1],[32,-3],[7,1],[9,-2],[15,-2],[51,1],[20,-1],[52,2],[36,-2],[21,0],[102,-1],[103,-1],[2,0],[2,0],[10,-1],[38,0],[2,0],[11,0],[4,0],[1,0],[25,-1],[1,0],[3,0],[2,0],[1,0],[3,-1],[2,0],[2,0],[1,0],[2,0],[2,0],[1,0],[3,0],[1,0],[3,0]],[[1744,1669],[0,-9],[-1,-10],[-1,-19],[0,-6],[-1,-5],[0,-6],[0,-4],[-1,-4],[0,-7],[0,-4],[-1,-5],[0,-5],[0,-10],[0,-5],[-1,-5],[0,-5],[-1,-5],[0,-7],[0,-5],[-1,-4],[0,-7],[0,-5],[0,-4],[-1,-5],[0,-9],[-1,-10],[0,-8],[-1,-8],[-1,-10],[-1,-13],[-1,-8],[0,-6],[-1,-4],[0,-5],[0,-4],[-1,-7],[-1,-8],[0,-7],[0,-5],[-1,-4],[0,-6],[-1,-13],[0,-5],[-2,-26],[-1,-10],[-1,-12],[0,-4],[-1,-5],[-1,-7],[0,-11],[-1,-7],[-1,-23],[0,-6]],[[1717,1267],[-9,1],[-11,1],[-37,1],[-27,0],[-15,0],[-7,0],[-23,1],[-9,0],[-16,0],[-32,1],[-17,0],[-18,1],[-16,0],[-15,1],[-15,0],[-47,2],[-27,1],[-9,0],[-13,0],[-49,2],[-8,0],[-24,1],[-12,1],[-10,0],[-29,0],[-11,1],[-51,1],[-48,1],[-35,1]],[[1077,1285],[0,8],[2,24],[2,22],[2,24],[0,4],[0,7],[1,7],[0,6],[2,24],[2,25],[2,34],[3,26],[2,31],[0,4],[2,18],[2,26],[0,5],[1,6],[0,12],[1,11],[1,9],[0,5],[1,25],[1,5],[0,12],[1,12]],[[2425,1647],[-7,-76],[2,-4],[-17,-91],[6,-152],[0,-66]],[[2409,1258],[-13,0],[0,-9]],[[2396,1249],[-9,0],[-105,3],[-54,2],[-72,2],[-52,1],[-49,1],[-72,2],[-66,2],[-68,2],[-53,1],[-65,2],[-14,0]],[[3043,1385],[-5,-44],[0,-15],[-3,-42],[-7,-52],[-12,0],[-2,-30],[-2,-29],[-4,-54]],[[3008,1119],[-86,3],[-116,5]],[[2806,1127],[-1,45],[3,75],[-130,3],[-243,7],[-26,1]],[[4460,1256],[-13,1],[-7,-24],[-6,-19],[-5,-18],[-6,-4],[-6,-11],[-3,-6],[-7,-19],[-7,-19],[-8,-20],[-15,0],[-17,2],[-7,-19],[-2,-39],[-1,-37]],[[4350,1024],[-56,1],[-8,0],[-30,1],[-31,1],[-11,0]],[[4214,1027],[-58,2],[1,3],[-1,5],[0,4],[0,4],[0,4],[1,4],[2,4],[2,4],[3,4],[4,3],[6,2],[7,0],[8,1],[6,1],[7,1],[6,2],[6,1],[6,2],[5,2],[5,2],[2,4],[-1,4],[-3,4],[-2,4],[-1,5],[-2,4],[-3,3],[-2,4],[0,5],[4,4],[3,3],[2,4],[1,5],[-5,2],[-7,0],[-6,1],[-7,1],[-6,2],[-3,4],[4,3],[1,4],[-2,4],[-4,4],[-5,3],[-4,3],[-3,3],[5,3],[9,3],[-2,4],[-1,4],[-3,4],[-4,3],[-5,3],[-6,2],[-5,2],[-6,2],[-4,3],[-4,3],[-4,3],[-4,3],[-4,3],[-4,3],[-1,3],[6,2],[6,1],[-2,4],[-2,4],[-1,4],[-6,4]],[[4362,1464],[142,-5]],[[3681,1252],[-9,-21],[-22,-57],[-1,-5],[-22,-68]],[[3627,1101],[-220,6],[-243,7],[-156,5]],[[1690,865],[-32,1],[-22,0],[-22,1],[-18,0],[-19,1],[-11,0],[-29,1],[-7,0],[-8,0],[-7,0],[-6,0],[-13,0],[-11,1],[-8,0],[-21,0],[-24,1],[-32,1],[-26,0],[-17,1],[-14,0],[-13,0],[-15,1],[-7,0],[-7,0],[-6,0],[-7,0],[-8,1],[-9,0],[-18,0],[-4,0],[-15,0],[-10,1],[-9,0],[-7,0],[-7,0],[-9,0],[-6,0],[-12,1],[-4,0],[-13,0],[-6,0],[-13,1],[-7,0],[-24,0],[-15,1],[-9,0],[-29,1]],[[1054,880],[1,26],[15,252],[0,6],[1,18],[1,20],[1,23],[2,35],[1,24],[1,1]],[[1717,1267],[-8,-109],[-19,-293]],[[2396,1249],[-5,-78],[-1,-19],[-1,-19],[-1,-19],[-1,-20],[-2,-19],[-1,-19],[-1,-19],[-1,-19],[-3,-38],[-3,-38],[-2,-38],[-2,-41]],[[2372,863],[-12,-1],[-48,1],[-45,1],[-41,1],[-44,1],[-49,1],[-41,0],[-40,2],[-47,1],[-51,1],[-40,0],[-21,1],[-16,0],[-7,0],[-21,0],[-23,0],[-29,-1],[-107,-6]],[[2806,1127],[-7,-107],[-9,-153],[-2,-17]],[[2788,850],[-106,3],[-31,1],[-11,0],[-19,1],[-61,2],[-60,3],[-61,2],[-30,1],[-30,1]],[[2379,864],[-7,-1]],[[5082,1244],[6,-4],[2,-4],[4,-3],[4,-3],[6,-1],[10,-4],[5,-2],[5,-3],[4,-2],[5,-3],[5,-2],[5,-3],[4,-2],[6,-3],[4,-3],[5,-2],[2,-4],[0,-4],[-1,-4],[-1,-4],[-2,-4],[-3,-3],[-3,-4],[-4,-3],[-4,-3],[-5,-3],[-4,-3],[-6,-2],[-7,-1],[-6,1],[-6,2],[-6,1],[-6,1],[-6,0],[-6,-1],[-5,-2],[-3,-4],[-4,-3],[-4,-3],[-4,-4],[-3,-3],[-2,-4],[-3,-6],[-2,-4],[-1,-4],[-1,-4],[-1,-4],[-1,-4],[1,-4],[2,-4],[2,-3],[6,-5],[4,-4],[3,-3],[1,-4],[-2,-3],[-4,-4],[-3,-3],[-4,-4],[-4,-3],[-4,-3],[-4,-3],[-5,-2],[-5,-2],[-4,-3],[-5,-3],[-3,-3],[-3,-4],[-4,-3],[-3,-3],[-6,-2],[-7,-1],[-5,2],[-4,3],[-8,3],[-6,2],[-6,0],[-5,-2],[-6,-2],[-5,-2],[-6,-1],[-5,-3],[-4,-3],[-4,-3],[-5,-2],[-5,-3],[-4,-3],[-4,-3],[-6,-1],[-6,0],[-7,-1],[-6,-1],[-6,0],[-6,-1],[-6,-1],[-7,-1],[-6,-1],[-6,-1],[-5,-2],[-5,-3],[-7,-1],[-6,0],[-6,-1],[-7,0],[-6,0],[-6,-1],[-6,-1],[-7,0],[-6,-2],[-10,-5]],[[4782,996],[4,8],[-10,9],[-157,4],[-26,0],[-58,1],[-152,4],[-33,2]],[[4013,828],[-120,3],[-243,4],[-134,3]],[[3516,838],[22,31],[31,80],[11,25],[21,48],[16,53],[10,26]],[[4214,1027],[-20,-52],[-10,-38],[-15,-44],[-10,-23],[-7,-20],[-17,-25],[-63,3],[-59,0]],[[3516,838],[-2,-10],[-102,0]],[[3412,828],[-85,5],[-69,2],[-92,4],[-242,9],[-136,2]],[[4782,996],[-4,-3],[-4,-3],[-5,-3],[-4,-2],[-5,-3],[-5,-2],[-5,-3],[-6,-2],[-5,-2],[-5,-2],[-5,-2],[-5,-3],[-2,-4],[-3,-3],[-3,-4],[-2,-4],[-1,-4],[0,-4],[2,-4],[4,-3],[5,-3],[5,-2],[6,-1],[5,-2],[4,-3],[2,-4],[2,-4],[1,-4],[1,-4],[1,-4],[1,-4],[0,-4],[0,-4],[1,-4],[1,-4],[-1,-4],[-1,-4],[0,-4],[0,-4],[-1,-4],[-1,-4],[0,-4],[1,-6],[1,-4],[1,-4],[2,-4],[1,-4],[1,-4],[1,-4],[2,-4],[2,-4],[1,-4],[1,-4],[0,-4],[-1,-4],[-1,-4],[-2,-4],[-5,-3],[-6,-1],[-6,-2],[-5,-2],[-3,-4],[-2,-4],[-1,-4],[-2,-3],[-1,-4],[-1,-4],[1,-5],[1,-3],[-1,-4],[0,-4],[0,-4],[0,-4],[0,-4],[0,-4],[0,-4],[-2,-5],[-3,-3],[-3,-4]],[[4721,716],[-38,2],[-48,1],[-15,1],[-130,2],[-22,1],[-41,0],[-49,2],[-85,1],[-14,0],[-17,1],[-19,0],[-41,1],[-67,1],[-50,1],[-78,2]],[[4007,732],[0,12],[4,56],[1,12],[1,16]],[[1659,465],[-7,0],[-7,0],[-7,0],[-7,0],[-6,0],[-6,1],[-7,0],[-7,0],[-6,0],[-7,0],[-7,0],[-7,0],[-9,0],[-19,0],[-28,1],[-8,0],[-7,0],[-7,0],[-7,0],[-7,0],[-10,1],[-22,0],[-6,1],[-7,0],[-6,0],[-6,0],[-7,0],[-6,1],[-6,0],[-6,0],[-7,0],[-6,0],[-7,1],[-45,1],[-8,0],[-6,0],[-6,1],[-6,0],[-7,0],[-6,0],[-7,0],[-17,1],[-14,1],[-27,1],[-11,0],[-15,0],[-18,0],[-8,0],[-3,-5],[-1,-4],[-7,0],[-21,0],[-26,1],[-32,0],[-7,0],[-6,0],[-7,0],[-7,0],[-6,0],[-8,0],[-16,0]],[[1036,468],[1,16],[2,48],[1,22],[1,39],[0,6],[1,13],[0,11],[1,14],[0,14],[1,14],[1,27],[0,14],[1,15],[0,4],[0,4],[0,4],[0,5],[1,5],[0,4],[0,4],[0,4],[0,4],[1,5],[0,4],[0,5],[0,4],[0,5],[1,4],[0,5],[0,11],[1,6],[0,6],[0,7],[1,15],[1,10],[0,13],[1,8],[1,13]],[[1690,865],[-1,-6],[-1,-9],[-2,-13],[-3,-21],[-2,-18],[-1,-6],[-2,-17],[0,-7],[-2,-23],[-2,-13],[-2,-22],[0,-6],[-1,-16],[-1,-8],[1,-15],[0,-5],[-1,-7],[-1,-13],[-1,-10],[-1,-28],[-1,-6],[0,-11],[-1,-11],[-1,-17],[-1,-7],[0,-16],[-2,-22],[0,-9],[-1,-8],[0,-9],[0,-5],[-1,-11],[0,-5]],[[2379,864],[-9,-33],[-3,-43],[-3,-39],[-2,-40],[-3,-36],[-3,-45],[-1,-25],[-2,-35],[-1,-8]],[[2352,560],[-2,-27],[-2,-43],[-3,-44],[-8,0]],[[2337,446],[-50,1],[-81,2],[-124,3],[-112,3],[-91,2],[-83,2],[-62,2]],[[1734,461],[-75,4]],[[2788,850],[3,-52],[-4,-77],[0,-7],[-5,-66],[-5,-86],[-1,-13]],[[2776,549],[-15,0],[-58,2],[-71,2],[-67,1],[-88,3],[-63,2],[-20,0],[-42,1]],[[3412,828],[-3,-47],[-3,-41],[-2,-24],[-5,-74],[-5,-79],[-2,-43],[-4,-52],[-2,-35]],[[3386,433],[0,-5],[-1,-5]],[[3385,423],[-144,3],[-72,1],[-242,6],[-81,2],[-75,1]],[[2771,436],[1,34],[2,36],[2,43]],[[4007,732],[-1,-15],[-7,-153],[-8,-139]],[[3991,425],[-97,1],[-242,2],[-241,5],[-25,0]],[[4721,716],[-4,-3],[-4,-4],[-4,-3],[-4,-3],[-4,-2],[-5,-3],[-5,-3],[-4,-3],[-4,-3],[-5,-2],[-6,-2],[-5,-1],[-6,-3],[-5,-2],[-6,-1],[-7,-1],[-6,-1],[-6,-1],[-5,-2],[-3,-4],[1,-4],[-1,-4],[-1,-4],[-1,-4],[-1,-3],[-2,-4],[-2,-4],[-2,-6],[-2,-4],[-1,-4],[-1,-4],[0,-4],[1,-4],[0,-4],[-1,-4],[0,-4],[-1,-4],[0,-4],[1,-4],[2,-4],[1,-4],[2,-4],[0,-5],[1,-3],[0,-5],[-1,-3],[-2,-4],[-2,-4],[-2,-4],[-2,-3],[-2,-4],[-3,-4],[-1,-4],[1,-4],[2,-3],[4,-4],[4,-3],[3,-4],[4,-6],[3,-5],[4,-6],[4,-3],[4,-3],[5,-3],[4,-3],[2,-4],[1,-4],[1,-4],[2,-4],[1,-3],[0,-5],[0,-4],[0,-4],[0,-4],[1,-4],[1,-4],[1,-4],[0,-4],[1,-4],[0,-4],[-1,-4],[0,-6],[1,-8]],[[4654,412],[-34,-1],[-36,1],[-4,0]],[[4580,412],[-202,5],[-242,7],[-145,1]],[[2771,436],[4,-27],[-9,-153],[-7,-153],[-2,-51]],[[2757,52],[-437,8]],[[2320,60],[0,9],[1,16],[1,13],[1,16],[2,45],[2,54],[3,59],[2,50],[2,45],[2,45],[1,34]],[[1734,461],[-25,-363],[-2,-21],[-1,-7]],[[1706,70],[-103,2],[-499,8],[-1,0],[-7,0],[-50,1],[0,1],[-5,16],[-2,3],[-26,86],[-35,116],[-4,15],[22,26],[-1,5],[15,20],[-10,11],[-1,0],[-2,7],[-4,8],[0,1],[8,58],[6,4],[27,-6],[2,16]],[[2320,60],[-22,0],[-126,2],[-466,8]],[[3366,40],[-195,4],[-88,2],[-72,1],[-229,4],[-18,1],[-7,0]],[[3385,423],[0,-13],[-9,-152],[-3,-58],[-3,-49],[-2,-46],[-2,-65]],[[3965,27],[-423,10],[-97,2],[-79,1]],[[3991,425],[-2,-13],[-10,-81],[1,-33],[-2,-39],[0,-10],[-2,-28],[-1,-32],[0,-45],[-3,-7],[0,-5],[0,-6],[0,-14],[-1,-6],[0,-7],[-1,-21],[-5,-51]],[[4561,13],[-165,4],[-203,4],[-173,4],[-55,2]],[[4580,412],[-1,-34],[-1,-1],[1,-1],[-1,-30],[-1,-14],[0,-9],[0,-1],[-1,-3],[-4,-27],[0,-3],[-2,-23],[0,-1],[-1,-6],[0,-2],[0,-3],[0,-5],[0,-4],[0,-5],[-1,-5],[0,-4],[0,-2],[0,-3],[0,-1],[0,-5],[0,-5],[0,-1],[-1,-5],[0,-6],[0,-1],[0,-2],[0,-9],[-1,-4],[0,-6],[0,-3],[0,-10],[-1,-8],[0,-6],[0,-6],[-1,-5],[0,-1],[0,-3],[0,-9],[0,-2],[0,-5],[-1,-4],[0,-12],[0,-2],[0,-3],[0,-3],[0,-4],[0,-4],[0,-4],[-1,-3],[0,-1],[0,-4],[0,-2],[0,-4],[0,-4],[0,-4],[0,-10],[0,-8],[-1,-13],[0,-1],[0,-5],[0,-4],[0,-4],[0,-3],[0,-4]],[[4654,412],[3,-5],[2,-4],[2,-4],[9,-15],[2,-3],[2,-4],[0,-4],[-1,-4],[0,-4],[0,-4],[0,-4],[1,-4],[1,-4],[1,-4],[1,-4],[4,-3],[11,-6],[18,-12],[17,-11],[19,-11],[18,-11],[15,-11],[17,-11],[14,-10],[13,-11],[10,-9],[6,-6],[3,-6],[1,-6],[-3,-8],[-3,-5],[-5,-4],[-6,-4],[-5,-3],[-6,-3],[-7,-3],[-1,-4],[-3,-3],[-1,-4],[1,-4],[2,-3],[2,-4],[3,-4],[6,-2],[5,-1],[7,-1],[6,1],[5,2],[7,0],[3,3],[5,3],[12,2],[5,2],[6,1],[3,3],[4,4],[3,3],[2,4],[-1,4],[3,3],[3,4],[5,2],[7,-1],[5,-1],[7,-1],[8,-1],[5,-2],[4,-3],[3,-4],[4,-3],[3,-3],[3,-3],[1,-4],[3,-4],[4,-3],[4,-2],[5,-3],[5,-2],[6,-2],[6,-1],[5,-3],[3,-3],[4,-3],[3,-4],[2,-4],[3,-3],[1,-4],[1,-4],[2,-4],[0,-4],[0,-4],[1,-4],[0,-4],[1,-4],[1,-4],[1,-4],[1,-4],[0,-4],[4,-6],[3,-3],[3,-3],[5,-3],[6,-2],[4,-3],[4,-3],[3,-3],[2,-4],[2,-4],[4,-3],[4,-3],[4,-3],[4,-3],[2,-4],[3,-3],[3,-4],[3,-3],[3,-4],[3,-4],[3,-3],[2,-4],[2,-4],[1,-7],[0,-1],[-11,0],[-277,7],[-240,6]],[[4493,8709],[-24,12],[-35,19],[-17,9],[-17,-14]],[[9392,8202],[2,-8],[6,-5],[5,-6],[5,-2],[9,-3],[8,-2],[8,0],[8,2],[9,1],[5,-3],[0,-4],[-3,-3],[-7,-2],[-8,-1],[-7,0],[-5,-3],[5,-3],[6,-1],[16,-5],[11,-1],[14,0],[8,1],[4,3],[3,4],[2,4],[4,3],[7,1],[5,-3],[4,-3],[1,-4],[2,-5],[-2,-6],[1,-5],[5,-5],[6,-4],[4,-3],[4,-4],[2,-8],[-1,-4],[-5,-4],[-7,-2],[-9,1],[-6,-2],[-2,-4],[2,-4],[4,-4],[5,-2],[7,-3],[8,-3],[6,-3],[4,-4],[6,-5],[6,-5],[2,-1],[2,-1],[2,-1],[3,0],[3,0],[2,0],[4,1],[1,1],[1,1],[2,0],[3,1],[2,0],[3,-1],[2,0],[2,0],[2,-1],[1,-1],[1,-2],[0,-1],[0,-1],[-2,-2],[-2,0],[-3,-1],[-4,-1],[-3,0],[-3,-1],[-4,0],[-2,-1],[-1,-1],[-1,0],[-1,1],[0,1],[-2,2],[-3,2],[-2,1],[-1,1],[-2,1],[-2,1],[-3,1],[-4,0],[-2,-1],[-2,-1],[-1,0],[0,-2],[0,-1],[-1,-1],[0,-2],[1,-1],[1,-2],[2,-1],[3,0],[4,0],[2,0],[3,0],[2,-1],[2,0],[2,-1],[1,-1],[1,-1],[0,-1],[2,-1],[1,-1],[2,-1],[1,0],[2,-1],[2,0],[2,0],[2,1],[2,0],[2,0],[2,0],[1,0],[1,0],[1,-1],[4,-3],[3,-2],[1,-3],[-1,-2],[-2,-1],[-1,-1],[-2,0],[-5,1],[-4,1],[-5,1],[-3,2],[-2,2],[-2,2],[-3,2],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-2,1],[-2,0],[-2,0],[-2,0],[-1,-1],[0,-1],[-1,-4],[-2,-5],[-3,-6],[-2,-7],[0,-9],[4,-10],[2,-7],[2,-7],[2,-4],[4,-8],[1,-6],[0,-5],[-1,-4],[-3,-4],[-7,-4],[-9,-2],[-7,0],[-8,1],[-6,-2],[-2,-4],[3,-6],[6,-4],[7,-1],[12,0],[11,1],[8,3],[4,2],[8,-1],[-1,-5],[-9,-1],[-7,-4],[-3,-4],[1,-4],[0,-6],[-5,-4],[2,-4],[9,0],[8,3],[6,3],[8,3],[4,4],[4,4],[7,-1],[1,-5],[0,-5],[-4,-5],[-5,-4],[-1,-4],[5,-4],[7,1],[5,2],[7,3],[6,2],[5,3],[4,4],[7,0],[1,-5],[-2,-5],[-6,-4],[-3,-4],[0,-6],[8,-4],[15,-2],[-9,-7],[-1,-4],[0,-5],[-4,-4],[-7,-4],[-6,-3],[-9,-4],[-10,-5],[-7,-2],[-9,-1],[-7,1],[-5,4],[-3,5],[-5,4],[-6,2],[-6,-1],[-2,-5],[1,-5],[3,-5],[3,-4],[3,-3],[4,-4],[8,-4],[7,-3],[4,-4],[2,-4],[-2,-4],[-7,-5],[-6,-1],[-9,0],[-6,1],[-7,3],[-7,1]],[[1928,7817],[-8,-9],[-1,-1],[-9,-11],[-34,-39],[-7,-9],[-19,-21],[-17,-20],[-1,0],[-1,-1],[-1,-1],[-1,-2],[-2,-4],[-1,0],[-2,-3],[-5,-5],[0,-1],[-15,-17],[-13,-15],[-3,-4],[-1,-1],[-2,-2],[-3,-3],[-1,-1],[-3,-4],[-2,-3],[-2,-2],[-1,0],[-3,-4],[-7,-8],[-5,-6],[-18,-20],[-2,-2],[-2,-2],[-2,-3],[-2,-2],[-3,-4],[-2,-1],[-5,-6],[-5,-5],[-3,-4],[-8,-9],[-9,-11],[-4,-4],[-1,0],[-1,-2],[-2,-2],[0,-1],[-1,-1],[-1,-1],[-12,-13],[-2,-2],[-4,-4],[-4,-5],[-35,-40],[-1,-1]],[[1629,7475],[-1,-1],[-1,0],[-1,-1],[-1,0],[-1,0],[-1,0],[0,1],[-1,1],[-1,0],[-1,1],[-1,0],[-3,0],[-2,0],[-3,0],[-2,-1],[-1,0],[-2,-1],[-1,-1],[-2,-1],[-3,-4],[-3,-1],[-4,-2],[-3,-2],[-3,-1],[-3,-1],[-2,0],[-3,0],[-1,1],[-1,1],[0,1],[1,2],[1,3],[1,3],[1,2],[0,2],[-2,1],[-1,0],[-2,0],[-1,-1],[-2,-1],[-2,-1],[-3,-2],[-1,0],[-2,-2],[-4,-2],[0,-1]],[[1561,7467],[2,8],[2,11],[0,3],[1,1],[14,16],[2,2],[2,-1],[5,5],[2,2],[-9,3],[2,2],[-1,0],[-3,1],[-12,4],[-1,-2],[-9,-9],[-3,1],[-6,2],[-2,1],[-37,11],[-48,16],[-14,-16],[3,-1],[3,-2],[2,0],[-2,-3],[-4,-3],[0,-1],[-4,0],[-6,1],[-29,-33]],[[1411,7486],[-1,2],[-1,2],[-1,1],[0,2],[-1,1],[1,1],[1,1],[1,2],[2,1],[1,1],[1,2],[1,3],[-1,2],[0,2],[-1,2],[-1,2],[-1,3],[-1,2],[-1,2],[-2,2],[-2,2],[-2,2],[-2,1],[-3,1],[-2,1],[-2,0],[-3,1],[-3,1],[-2,0],[-3,1],[-3,1],[-2,1],[-2,1],[-1,1],[-2,1],[-3,1],[-3,1],[-3,1],[-2,1],[-1,1],[-1,1],[-2,2],[-1,1],[-1,1],[0,2],[-1,1],[-1,1],[0,2],[-1,1],[0,2],[-2,1],[-1,1],[-1,1],[-2,1],[-2,0],[-2,1],[-2,0],[-1,0],[-2,0],[-2,0],[-2,-1],[-2,0],[-3,-1],[-2,-1],[-3,-2],[-3,-2],[-3,-2],[-1,-2],[-2,-1],[-3,-2],[-2,-2],[-3,-1],[-1,0],[-2,-1],[-2,0],[-2,0],[-1,1],[-2,1],[-3,2],[-3,1],[-2,1],[-1,1],[-2,2],[-1,1],[-1,2],[-2,1],[0,2],[-1,2],[0,2],[1,2],[0,2],[1,1],[1,2],[1,1],[2,1],[1,1],[2,1],[2,1],[1,0],[2,0],[2,0],[3,1],[2,0],[3,0],[2,1],[3,0],[3,1],[3,1],[3,0],[3,1],[3,1],[2,0],[2,1],[1,1],[0,1],[0,1],[-1,1],[-1,1],[-2,0],[-3,1],[-5,1],[-5,0],[-3,1],[-3,0],[-3,0],[-3,0],[-3,0],[-3,-1],[-3,0],[-3,0],[-2,-1],[-2,-1],[-2,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-2],[-1,-1],[0,-1],[-1,-1],[-2,-1],[-2,-1],[-3,0],[-3,-1],[-2,0],[-2,0],[-2,0],[-2,1],[-1,1],[-2,1],[-1,2],[-2,1],[0,1],[-2,1],[-1,1],[-1,1],[-2,0],[-2,1],[-3,0],[-1,0],[-2,1],[-2,0],[-2,1],[-1,1],[-2,0],[0,1],[-1,0],[-1,1],[-1,1],[-1,0],[0,1],[-1,1],[0,2],[1,1],[1,0],[1,1],[1,1],[2,0],[2,2],[2,1],[1,2],[1,2],[1,2],[0,2],[0,2],[0,2],[-1,1],[-2,2],[-2,2],[-3,1],[-3,2],[-2,1],[-1,2],[-1,1],[-1,2],[0,2],[0,2],[-1,2],[0,2],[0,1],[-1,2],[-1,1],[-3,1],[-1,1],[-3,0],[-2,0],[-3,-1],[-3,-1],[-3,-1],[-3,-1],[-4,-1],[-5,-1],[-4,-2],[-4,-2],[-3,-2],[-2,-3],[-2,-2],[0,-3],[0,-2],[1,-2],[0,-1],[0,-1],[-1,0],[-1,-1],[-1,0],[-1,0],[-1,0],[-2,1],[-3,3],[-4,3],[-4,1],[-3,1],[-3,0],[-3,0],[-2,0],[-3,0],[-2,-2],[-2,-1],[-2,-2],[-3,-1],[-5,0],[-6,-1],[-4,0],[-3,1],[-2,0],[-4,1],[-4,2],[-5,2],[-4,3],[-4,3],[-2,3],[-2,3],[0,3],[1,2],[1,3],[1,2],[4,4],[2,3],[2,3],[1,2],[1,2],[0,1],[0,2],[-1,1],[-1,2],[0,1],[0,1],[1,2],[1,2],[1,1],[1,2],[0,1],[0,1],[0,2],[-1,1],[-1,2],[-1,1],[-1,1],[-1,2],[-1,1],[-2,1],[-2,0],[-2,1],[-3,0],[-4,0],[-3,0],[-4,0],[-3,0],[-5,-1],[-3,0],[-3,-1],[-3,-1],[-2,-1],[-2,-2],[-1,-1],[-1,-2],[-1,-1],[0,-2],[0,-1],[1,-1],[1,-2],[2,-2],[2,-1],[3,-3],[6,-4],[4,-3],[0,-1],[1,-1],[0,-2],[0,-1],[-1,-1],[-2,-1],[-2,-1],[-3,-1],[-4,0],[-4,-1],[-3,-1],[-2,-1],[-3,-1],[-3,-2]],[[1049,7643],[-219,-60]],[[830,7583],[-2,8],[0,7],[3,7],[2,6],[-2,7],[-8,4],[-12,4],[-9,3],[-10,4],[-9,4],[-7,5],[-6,7],[-5,6],[-5,6],[-6,7],[-4,7],[-5,7],[-4,7],[-3,6],[-2,6],[-2,7],[2,7],[-2,8],[-11,6],[-12,6],[-7,4],[-10,5],[-9,4],[-10,4],[-7,4],[-8,5],[-8,7],[-7,4],[-11,7],[-12,12]],[[6229,7081],[27,30],[12,14],[14,17],[-2,1],[-1,1],[-2,1],[-2,0],[-1,1],[0,2],[-1,1],[-1,0],[-2,1],[-1,-1],[-1,0],[0,1],[-1,1],[-1,1],[-2,0],[-2,2],[-2,0],[-2,0],[0,1],[1,1],[-1,1],[-1,1],[1,1],[0,1],[-1,1],[-2,1],[0,1],[2,0],[1,1],[2,0],[1,0],[1,-1],[1,-1],[2,0],[1,1],[1,1],[0,1],[-1,1],[-2,2],[-1,1],[-1,1],[-1,1],[1,1],[2,0],[2,0],[3,-1],[2,0],[0,1],[0,1],[-1,1],[-1,2],[-4,4],[0,2],[1,0],[1,0],[0,2],[-1,0],[-1,1],[-2,3],[-1,-1],[-1,0],[1,-1],[0,-1],[-1,1],[-1,0],[0,2],[-1,1],[-1,2],[-1,1],[-2,0],[2,-2],[-2,0],[-1,0],[-1,0],[0,-1],[0,-1],[-2,0],[-2,0],[-1,0],[-2,-1],[-2,0],[-1,0],[-1,-1],[0,-1],[0,-1],[0,-1],[0,-1],[-1,-1],[-2,0],[-1,0],[-1,-1],[-1,0],[1,-1],[-1,0],[-1,-1],[-2,0],[0,-1],[-1,-1],[-1,0],[-2,0],[-2,0],[-1,1],[0,1],[-2,1],[-1,1],[0,3],[0,2],[1,1],[1,1],[2,1],[2,0],[4,0],[2,1],[1,0],[1,0],[2,0],[1,1],[2,1],[1,0],[1,1],[0,1],[1,0],[2,0],[1,0],[0,-1],[-1,0],[1,-1],[1,0],[2,1],[1,2],[0,1],[-1,1],[0,1],[-1,1],[-1,1]],[[1561,7467],[-1,-1],[-1,-1],[0,-1],[-1,-2],[-1,-2],[-2,-1],[-1,-1],[-2,-1],[-2,-1],[-2,-1],[-2,0],[-3,-1],[-2,-1]],[[1541,7453],[-4,-1],[-3,-1],[-4,0],[-3,0],[-3,0],[-3,1],[-3,1],[-1,1],[-2,1],[-1,1],[0,1],[-1,2],[0,1],[0,2],[0,1],[0,2],[0,2],[0,1],[-1,1],[-1,1],[-1,1],[-2,0],[-1,1],[-4,0],[-3,0],[-3,0],[-3,0],[-3,0],[-1,0],[-2,0],[-1,-1],[-1,0],[0,-1],[0,-1],[-1,-1],[-1,-1],[-2,-1],[-1,-1],[-1,-1],[-1,0],[-1,0],[0,1],[-1,1],[0,1],[0,1],[0,1],[-1,0],[-2,1],[-2,1],[-2,0],[-2,1],[-2,1],[0,1],[-1,0],[-1,1],[-2,0],[-1,0],[-2,0],[-1,-1],[-2,0],[-3,-1],[-3,0],[-3,0],[-1,-1],[-3,0],[-2,0],[-3,0],[-5,1],[-4,0],[-3,1],[-4,0],[-2,1],[-3,1],[-1,1],[-1,2],[0,1],[-2,2],[-1,2],[-1,2]],[[794,6854],[-4,7],[-4,5],[-2,4],[-4,5],[-2,4],[-3,4],[-4,6],[-4,4],[-3,3],[-3,5],[-4,6],[-2,5],[-1,7],[-1,5],[0,6],[1,5],[0,5],[0,9],[1,6],[1,5],[0,4],[2,4],[1,6],[1,4],[4,5],[6,4],[5,4],[6,3],[7,5],[5,3],[5,4],[6,3],[4,4],[7,5],[6,5],[8,7],[4,4],[6,8],[6,8],[1,5],[1,8],[1,8],[2,6],[3,10],[2,6],[1,4],[4,6],[2,5],[3,5],[3,6],[3,4],[5,7],[2,4],[6,7],[4,5],[3,6],[6,7],[3,3],[4,5],[5,6],[5,5],[6,6],[6,5],[5,5],[7,7],[5,7],[2,4],[3,4],[2,6],[3,6],[2,4],[2,5],[-1,10]],[[956,7247],[43,3],[81,14],[34,16],[64,7],[35,-3],[26,-28],[8,-53],[86,-14],[1,0],[1,0],[0,-1],[1,0],[1,0],[1,0],[1,0],[1,-1],[4,0],[1,-1],[12,-2],[5,-2],[2,0],[6,-1],[4,-1],[6,-2],[4,-1],[9,-2],[4,-1],[6,-1],[2,0],[0,-1],[5,-1],[10,-2],[2,0],[8,-2],[4,-1],[4,-1],[1,-1],[8,-1],[7,-2],[28,-6],[55,-13],[2,0],[21,-5],[10,-2],[10,-3],[1,0],[5,-1],[2,-1],[2,0],[18,-4],[4,-1],[7,-1],[13,-3],[2,0],[7,-3],[7,-2]],[[1648,7116],[1,0],[17,-4],[1,0],[1,-1],[2,0],[17,-4],[4,-1],[1,0],[3,-1],[4,0],[12,-4]],[[1752,6944],[-16,-1],[-20,-2],[-12,-1],[-12,-1],[-8,-1],[-9,-1],[-7,-1],[-9,-1],[-23,-2],[-6,0],[-1,4],[-16,-1],[-2,0],[-14,-2],[-2,0],[-1,0]],[[2250,6935],[-1,3],[-2,7],[0,1],[-10,42],[-78,-7],[-110,-10],[-40,-3]],[[2009,6968],[1,1],[2,3],[6,10],[21,33],[23,37],[16,25],[17,27],[1,1],[3,5],[7,11],[11,17],[0,1],[16,25],[13,20],[6,10],[4,5],[14,-4],[42,-12],[3,-1],[30,19],[5,3],[21,13],[1,0],[30,19],[1,1],[2,1],[3,2]],[[1971,6965],[15,1],[13,1],[10,1]],[[4989,3868],[-3,0],[-10,-2],[-9,0],[-8,2],[-8,3],[-5,0],[-7,2],[-2,0],[-4,1],[-22,5],[-14,4],[-11,2],[-5,2],[-2,0],[-17,4],[-1,0],[-3,1],[-1,0],[-8,2],[-2,0],[-2,1],[-23,5],[-6,2],[-12,2],[-2,1],[-6,1],[-20,5],[-22,5],[-2,0],[-1,0],[-3,1],[-13,3],[-15,4],[-9,2],[-1,0],[-23,5],[-6,2],[-7,1],[-14,3],[-1,1],[-2,0],[-20,5],[-12,3],[-5,1],[-1,0],[-3,1],[-4,1],[-4,0],[-19,5],[-24,6],[-4,2],[-14,-18],[-1,0],[-42,9]],[[4740,3419],[0,-1],[-9,2],[-1,0],[-9,1]],[[2355,3733],[7,1],[2,-3],[12,5],[-6,8],[6,2],[4,-9],[3,2],[0,7],[-1,6],[-1,23],[-2,37],[-1,16],[36,1],[25,0],[19,0],[14,-1],[15,0],[6,1],[5,2],[2,1],[5,0],[2,1],[2,0],[3,1],[4,0],[5,0],[1,-3],[8,0],[3,-15],[14,1],[45,2],[20,1],[0,-3],[-15,-4],[1,-8],[25,5],[1,-15],[0,-4],[3,2],[9,-6],[1,1],[2,2],[1,3],[8,1],[11,0],[4,0],[3,1],[4,-1],[1,-11],[1,-5],[5,0],[2,-20],[1,-16],[1,-5],[-9,0],[5,-61],[-3,0],[-2,0],[-10,-2],[-11,-1],[-6,-1],[-18,-3],[-15,-2],[-33,-4],[-14,-2],[-41,-6],[-28,-4],[-36,-5],[-7,0],[-2,3],[-7,5],[-4,2],[-4,3],[-2,2],[-10,7],[-9,7],[-7,6],[-1,0],[-2,1],[-1,1],[-1,0],[-3,0],[-2,0],[-3,1],[-6,2],[-3,1],[-1,0],[-6,3],[-3,1],[-6,2],[-3,1],[-2,1],[-2,1],[-1,0],[-1,1],[-3,2],[-2,2],[3,3],[7,8],[2,0],[6,1],[4,-2],[2,-1],[3,-2],[4,-1],[2,-1],[2,0],[4,2],[4,3],[-4,1],[-2,2],[-1,1],[-1,4],[-8,0],[-6,0],[-5,1],[0,1],[-4,0],[1,2],[0,1],[-2,0],[0,3],[-9,-1],[-3,7]],[[1541,7453],[-4,-3],[-6,-5],[-23,-17],[-3,-3],[-8,-6],[-6,-4],[-6,-4],[-5,-4],[-1,0],[-4,-4],[-2,-1],[-1,-1],[-15,5],[0,1],[-1,0],[-1,0],[-1,1],[0,-2],[0,-1],[2,-10],[2,-7],[0,-1],[4,-19],[5,-19],[2,-9],[4,-16],[-45,2],[-1,0],[-2,0],[-2,0],[-7,0],[-2,1],[-1,0],[-1,0],[-2,0],[-2,0],[-1,0],[-2,0],[-2,0],[-2,0],[-2,0],[-2,0],[-2,1],[-7,0],[-6,0],[-2,-17],[-3,-22],[-2,0],[-18,1],[-20,1],[-3,0],[-7,0],[-1,0],[0,-1],[-5,1],[-1,0],[-1,0],[-12,0],[-17,1],[-2,0],[-5,0],[-2,0],[-3,1],[-3,0],[-3,0],[-1,0],[-4,0],[-89,91],[-120,122]],[[1058,7506],[0,1],[0,1],[0,1],[1,0],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[1,0],[0,1],[1,0],[1,0],[0,1],[1,0],[0,1],[0,1],[0,1],[1,0],[0,1],[1,0],[0,1],[0,1],[-1,0]],[[1064,7524],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[0,1],[1,0],[-1,0],[1,0],[0,1],[0,1],[1,0],[-1,0],[0,1],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[0,1],[-1,0],[1,0],[-1,0],[0,1]],[[1042,7544],[0,1],[1,0],[0,1],[1,0],[0,-1],[1,0],[0,1],[1,0],[1,0],[0,1],[0,1],[1,0],[0,1],[1,0],[1,0],[0,1],[1,0],[1,0],[0,1],[1,0],[0,1],[0,1],[1,0],[0,1],[0,1],[1,0],[0,1],[1,0],[0,1],[0,1],[0,1],[-1,0],[1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[0,1],[-1,1],[0,1],[1,0],[0,1],[1,0],[1,0],[1,0],[1,0],[0,-1],[0,1],[1,0],[1,0],[0,1],[1,0],[1,0],[1,0],[1,0],[1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[-1,0],[1,0],[0,1],[0,-1],[0,1],[1,0],[1,0],[0,1],[-1,0],[1,0],[-1,0],[0,1],[0,1],[0,1],[-1,0],[0,1],[0,1],[1,0],[1,0],[1,0],[1,0],[0,1],[1,0],[1,0],[0,1],[1,0],[1,1],[0,1],[1,0],[0,1],[0,1],[0,1]],[[1083,7587],[-1,0],[0,1],[0,1],[0,1],[-1,0],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[-1,0],[0,1],[0,1],[0,1],[0,1],[-1,0],[0,1],[0,1],[0,1],[0,1],[-1,0],[0,1],[0,1],[-1,0],[0,1],[0,1],[-1,0],[0,1],[0,1],[-1,0],[0,1],[-1,0],[0,1],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[1,0],[-1,1],[-1,0],[1,0],[0,1],[-1,0],[1,0],[0,1],[0,1],[-1,0],[-1,0],[0,1],[1,0],[0,1],[-1,0],[0,1],[1,0],[0,1],[-1,0],[0,1],[-1,0],[0,-1],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0]],[[3445,5238],[51,58],[132,154],[58,74]],[[3686,5524],[102,-25],[87,-21],[105,-26]],[[3980,5452],[141,-32],[84,-19]],[[4205,5401],[-85,-104],[-43,-50],[-46,-52],[-43,-51],[-14,-17],[-25,-30],[-68,-83]],[[4205,5401],[61,-15],[64,-15],[38,-10],[63,-15],[59,-12],[73,-17],[52,-11],[36,-9],[51,-11],[131,-31]],[[2254,7384],[-1,0],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,1],[-1,1],[-1,0],[0,1],[-1,0],[-1,1],[-1,0],[0,1],[-1,0],[-1,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-2,1],[-1,0],[-2,0],[-1,0],[-1,0],[-2,1],[-1,0],[-3,0],[-2,0],[-2,0],[-2,0],[-3,0],[-2,0],[-2,0],[-1,0],[-3,0],[-1,0],[-1,-1],[-1,0],[-1,0],[-1,0],[-1,-1],[-1,0],[-1,0],[-1,0],[-2,0],[-2,-1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-2,0],[-1,0],[-1,1],[-2,0],[-1,0],[-1,1],[-1,0],[-1,1],[-1,0],[0,1],[-1,0],[-1,1],[0,1],[-1,0],[0,1],[0,1],[0,1],[1,0],[0,2],[0,1],[0,1],[0,2],[0,1],[0,1],[0,1],[-1,1],[0,1],[-1,1],[-1,1],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-2,0],[-2,-1],[-2,0],[-1,-1],[-1,0],[-2,-1],[-2,0],[-1,-1],[-1,-1],[-2,0],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-2,-1],[-1,0],[-1,-1],[-1,0],[-2,0],[-1,0],[-1,0],[-1,1],[-1,1],[-1,1],[-1,0],[-1,1],[0,1],[-1,0],[-1,1],[-1,1],[-1,1],[-1,2],[-1,2],[-1,1],[-1,1],[-1,2],[-1,2],[-2,1],[-1,1],[-1,1],[-1,1],[-1,1],[-2,1],[-2,0],[-2,0],[-2,1],[-1,0],[-1,-1],[-2,0],[-3,0],[-2,-1],[-2,-1],[-2,0],[-1,-1],[-1,0],[-1,-1],[-1,0],[-1,0],[-1,1],[-1,0],[-2,0],[-1,1],[-1,0],[-1,1],[-1,0],[-1,1],[-1,1],[-4,2],[-3,1],[-2,1],[-1,1],[-1,1],[-1,1],[-1,1],[-1,1],[-1,0],[-1,1],[-1,1],[-2,1],[-2,1],[-1,0],[-1,1],[-2,0],[-2,0],[-4,0],[-2,0],[-2,0],[-1,0],[-2,0],[-2,0],[-2,-1],[-4,0],[-3,-1],[-3,0],[-2,0],[-3,-1],[-2,-1],[-3,-1],[-1,-2],[-1,-1],[-2,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-2,-1],[-1,0],[-2,-1],[-2,0],[-3,0],[-2,-1],[-4,0],[-3,1],[-2,0],[-2,1],[-2,1],[-2,1],[-1,1],[1,1],[0,1],[0,1],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-2,1],[-1,0],[-2,0],[-1,0],[-1,0],[-2,-1],[-1,-1],[-2,-1],[-2,-1],[-1,-1],[-2,-1],[-1,-1],[-1,-1],[-1,-3],[-1,-2],[0,-3],[-1,-1],[-1,-2],[-2,-3],[-1,-1],[-2,-3],[-2,-2],[-1,-2],[-2,-2],[-2,-2],[-2,-1],[-3,-2],[-2,-1],[-3,0],[-1,-1],[-1,0],[-2,0],[-1,0],[-2,0],[-1,0],[-2,0],[-1,1],[-1,0],[0,1],[-1,1],[0,1],[-1,2],[-1,2],[0,2],[0,2],[-1,2],[0,2],[-1,2],[0,1],[-1,1],[-1,1],[-1,1],[-1,1],[-1,0],[-1,1],[-2,1],[-2,1],[-4,1],[-4,2],[-5,2],[-3,1],[-4,2],[-3,2],[-3,2],[-2,2],[-2,2],[-3,3],[-2,2],[-1,0],[0,1],[-2,0],[-1,0],[-2,0],[-1,0],[-1,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,-1],[-1,-1],[0,-1],[-1,-1],[-2,-1],[-2,-1],[-1,-1],[-1,-1],[-2,-1],[-1,0],[-2,-1],[-1,0],[-1,0],[-1,0],[-2,-1],[-3,-1],[-3,-1],[-2,-1],[-1,-1],[-2,-1],[-2,-1],[-1,-1],[-3,-1],[-4,-2],[-4,-2],[-2,-1],[-3,-1],[-2,-1],[-2,-1],[-1,0],[-1,0],[-2,0],[-2,1],[-2,0],[-2,1],[-2,0],[-1,0],[-3,-1],[-2,0],[-3,-1],[-2,-1],[-3,-1],[-2,-1],[-3,-1],[-3,-1],[-3,-2],[-2,0],[-1,-1],[-2,0],[-1,0],[-2,-1],[-2,0],[-2,0],[-1,1],[-1,0],[-2,0],[-1,1],[-1,0],[0,1]],[[1740,7412],[-1,1],[0,2],[-1,0],[0,2],[0,2],[0,2],[0,2],[-1,1],[-1,1],[-1,0],[-1,1],[-1,0],[-2,0],[-1,0],[-1,0],[-2,0],[-2,0],[-1,-1],[-2,0],[-2,0],[-2,0],[-1,0],[-2,0],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,1],[-2,0],[-2,1],[-2,1],[-2,1],[-1,1],[-2,2],[-2,1],[-1,1],[0,1],[1,1],[1,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,2],[1,1],[0,2],[0,1],[0,1],[0,1],[1,1],[0,1],[1,1],[1,3],[1,2],[1,2],[0,1],[1,2],[1,1],[0,1],[1,1],[1,1],[1,0],[1,1],[1,1],[1,1],[2,0],[3,1],[1,1],[1,0],[1,1],[1,1],[1,1],[1,1],[0,2],[0,1],[0,1],[0,1],[0,1],[0,1],[-1,2],[-1,1],[0,1],[-1,2],[0,1],[0,1],[-1,1],[0,1],[-1,1],[0,1],[-1,2],[0,1],[0,2],[1,1],[0,2],[1,1],[0,1],[1,0],[0,1],[1,1],[2,1],[2,1],[1,1],[2,1],[2,1],[1,0],[1,1],[1,1],[1,0],[0,1],[1,0],[0,1],[0,1],[0,1],[0,1],[-1,0],[-1,1],[-1,0],[-1,1],[-1,0],[-1,0],[-1,-1],[-2,0],[-2,-1],[-3,0],[-2,-1],[-3,0],[-1,-1],[-1,-1],[-2,-1],[-2,-2],[-2,-2],[-3,-3],[-1,-2],[-1,-2],[-1,-1],[-1,-2],[-2,-1],[-2,-1],[-4,-2],[-2,-1],[-3,-1],[-2,-2],[-2,-1],[-2,-1],[-1,-1],[0,-1],[0,-1],[1,-1],[1,-1],[1,-1],[2,0],[3,-1],[2,0],[2,0],[2,0],[2,0],[2,0],[2,-1],[1,0],[1,0],[1,-1],[1,-1],[1,-1],[0,-1],[0,-2],[-1,-1],[-1,-1],[-1,-1],[-2,0],[-1,-1],[-2,-1],[-3,0],[-3,-1],[-3,0],[-6,-1],[-6,0],[-7,-1],[-2,0],[-2,-1],[-3,0],[-2,-1],[-3,-1],[-4,-1],[-1,0],[-1,0],[-3,0],[-2,0],[-1,1],[-3,1],[-3,2],[-2,1],[-1,1],[-2,0],[-2,1],[-2,0],[-1,1]],[[7145,6063],[4,-1]],[[7149,6062],[8,0],[4,-3]],[[7161,6059],[-6,1],[-1,1],[-2,0],[-3,1],[-1,0],[-3,1],[-3,0],[-2,1],[-7,2],[-1,0],[-1,0],[-4,1],[-1,0],[-5,1],[-6,2],[-12,3],[-2,0],[-4,1],[-2,1],[-1,0],[-10,2],[-9,2],[-9,2],[-4,1],[-17,4],[-23,6],[-18,4],[-1,0],[-1,0],[-1,1],[-1,0],[-49,11],[-4,1],[-6,2],[-17,4],[-1,0],[-3,1],[-6,1],[-3,1],[-10,2],[-21,5],[-7,2],[-1,0],[-5,1],[-9,2],[-3,1],[-1,0],[-6,2],[-6,1],[-1,0],[-28,7],[-4,1],[-31,7],[-4,1],[-11,3],[-60,14],[-7,1],[-16,4],[-7,2],[-2,0],[-3,1],[-2,0],[-1,1],[-4,1],[-30,7],[-5,1],[-32,7],[-6,2],[-33,8],[-22,5]],[[7060,6486],[7,-8],[4,-6],[3,-5],[3,-4],[3,-4],[2,-4],[2,-4],[4,-3],[4,-5],[6,-3],[7,-3],[4,-5],[4,-6],[2,-4],[3,-4],[2,-5],[-1,-5],[-4,-6],[-5,-6],[-3,-5],[-1,-4],[-2,-4],[-2,-5],[-3,-6],[-3,-6],[-3,-6],[-3,-8],[0,-7],[1,-6],[2,-6],[2,-5],[1,-4],[-2,-6],[-2,-3],[-3,-5],[-5,-8],[-5,-4],[-8,-2],[-7,-3],[-3,-4],[2,-4],[3,-3],[-1,-5],[5,-5],[0,-5],[-3,-5],[-2,-6],[-3,-6],[-4,-4],[-5,-3],[-6,-3],[-6,-2],[-4,-3],[0,-5],[0,-4],[-1,-3],[-2,-5],[-2,-5],[-2,-4],[-1,-6],[2,-4],[4,-3],[6,-5],[5,-3],[4,-3],[4,-3],[4,-5],[4,-5],[3,-3],[4,-5],[2,-5],[3,-5],[1,-4],[3,-7],[3,-4],[3,-5],[3,-6],[3,-7],[2,-7],[4,-5],[3,-4],[6,-3],[7,-2],[4,-4],[2,-5],[1,-5],[4,-3],[7,1],[14,0],[0,-6],[-2,-4],[-3,-6],[6,-5]],[[6963,5525],[-19,5],[-8,2],[-12,2],[-1,1],[-12,2],[-1,1],[-6,1],[-27,6],[-37,9],[-11,2],[-11,3],[-9,2],[-10,2],[-19,5],[-6,1],[-17,4],[-1,0],[-2,1],[-7,2],[-10,2],[-10,2],[-3,1],[-2,0],[-9,2],[-12,3],[-1,1],[-26,6],[-16,4],[-3,1],[-3,0],[-3,1],[-9,2],[-11,3],[-18,5],[-16,4],[-1,0],[-8,2],[-3,1],[-7,1],[-6,2],[-26,6],[-7,2],[-13,3],[-1,0],[-11,3],[-8,2],[-5,1],[-17,4],[-1,1],[-8,2],[-4,1],[-1,0],[-1,0],[-10,2],[-10,3],[-1,0],[-21,5],[-14,4],[-3,0]],[[7161,6059],[2,-2],[-5,-3],[-5,-2],[-3,-4],[-4,-3],[-1,-4],[-1,-6],[1,-4],[2,-4],[1,-4],[1,-5],[-2,-3],[1,-4],[1,-5],[0,-4],[0,-4],[1,-5],[0,-4],[-1,-5],[0,-4],[3,-5],[5,-3],[5,-3],[4,-3],[7,-3],[7,-2],[6,-1],[5,-3],[0,-4],[-5,-2],[-5,-4],[-3,-4],[-2,-5],[-1,-5],[-2,-4],[-5,-2],[-8,1],[-5,2],[-7,-1],[-10,-2],[-7,-2],[-5,-3],[-6,-3],[-5,-2],[-5,-3],[-3,-4],[-5,-3],[-6,-3],[-3,-3],[0,-4],[0,-4],[0,-5],[0,-5],[-3,-3],[-4,-4],[-3,-4],[-2,-4],[3,-4],[1,-4],[2,-4],[2,-4],[2,-4],[2,-5],[1,-4],[1,-4],[-1,-2],[0,-3],[2,-5],[3,-4],[4,-3],[3,-4],[5,-3],[5,-3],[6,-1],[6,-1],[7,0],[5,2],[3,4],[2,4],[0,4],[1,4],[3,4],[5,5],[6,3],[7,1],[7,-2],[5,-2],[6,-2],[6,-2],[6,-2],[4,-4],[3,-4],[0,-4],[0,-4],[-2,-6],[-2,-4],[-1,-5],[-1,-4],[-2,-5],[-3,-4],[-5,-3],[-7,-4],[-7,-1],[-7,-1],[-6,0],[-7,0],[-8,0],[-7,1],[-4,-4],[-2,-4],[3,-4],[5,-2],[6,-3],[5,-3],[5,-2],[5,-2],[6,-2],[7,-1],[7,-2],[6,-1],[6,-3],[3,-4],[3,-4],[-3,-3],[-4,-3],[-6,-3],[-6,-1],[-7,-1],[-7,0],[-6,2],[-5,3],[-2,4],[-6,2],[-7,0],[-7,-1],[-6,-2],[-6,-2],[-7,-1],[-6,-1],[-6,-1],[-6,-2],[-4,-3],[2,-4],[3,-4],[5,-2],[5,-3],[4,-4],[3,-3],[2,-5],[-1,-4],[-4,-3],[-4,-4],[-4,-3],[-5,-3],[-4,-4],[-3,-3],[-4,-4],[-2,-4],[-2,-4],[-3,-5],[-4,-4],[-4,-4],[-7,-3],[-7,-1],[-7,0],[-7,1],[-1,0],[-7,1],[-6,1],[-7,-1],[-5,-3],[-3,-4],[-2,-4],[0,-5],[5,-4],[5,-2],[8,-2],[7,-1],[7,-2],[3,-4],[1,-4],[-8,-3],[-8,0],[-7,-1],[-7,-3],[-6,-2],[-6,-2],[-5,-2],[-6,-2],[-6,-2],[-6,-2],[-5,-2],[-5,-2],[-4,-4],[-4,-3],[-4,-6],[0,-4],[1,-4],[2,-4],[2,-4],[3,-3],[3,-4],[4,-3],[3,-4],[3,-3],[2,-4],[-2,-4],[-3,-3],[-6,-3],[-6,-2],[-6,0]],[[1740,7412],[-4,-1],[0,-1],[1,-1],[1,-1],[0,-1],[1,-1],[0,-1],[1,0],[1,0],[1,0],[1,0],[0,-1],[1,0],[0,-1],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,0],[0,1],[-1,-1],[-1,0],[0,-1],[-1,0],[-1,-1],[-1,0],[0,-1],[-1,0],[0,-1],[0,-1],[1,0],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[1,0],[0,-1],[-1,0],[0,-1],[0,-1],[0,-1],[1,0],[1,0],[0,-1],[-1,0],[0,-1],[0,1],[-1,-1],[1,0],[1,0],[0,-1],[0,-1],[-1,0],[0,-1],[0,-1],[0,-1],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[0,-1],[1,-1],[1,0],[1,-1],[1,1],[0,1],[1,0],[1,0],[1,0],[0,-1],[1,0],[0,1],[1,0],[1,0],[1,0],[0,-1],[0,-1],[-1,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[0,-1],[1,0],[0,-1],[1,0],[1,0],[0,-1],[0,-1],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,-1],[-1,0],[0,-1],[-1,0],[0,-1],[0,-1],[-1,0],[0,-1],[0,-1],[0,-1],[0,-1],[-1,0],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,1],[0,-1],[-1,0],[0,-1],[0,-1],[1,-1],[1,0],[1,0],[1,0],[1,0],[1,-1],[0,-1],[1,0],[0,-1],[0,-1],[1,0],[0,-1],[1,0],[1,0],[1,0],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[-1,0],[-1,0],[-1,-1],[-1,0],[-1,0],[-1,0],[-1,-1],[-1,0],[-1,-1],[0,-1],[0,-1],[-1,0],[-1,-1],[-1,0],[-1,-1],[-1,-1],[-1,-1],[1,-1],[0,-1],[0,-1],[-1,0],[-1,-1],[0,-1],[-1,0],[0,-1],[0,-1],[1,-1],[1,0],[1,0],[0,-1],[0,-1],[1,0],[-1,-1],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[0,-1],[0,-1],[1,0],[1,0],[1,0],[0,-1],[1,0],[0,-1],[-1,-1],[-1,0],[0,-1],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,-1],[0,-1],[0,-1],[0,-1],[1,-1],[1,0],[0,-1],[1,-1],[1,0],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[1,0],[1,0],[1,0],[1,-1],[1,0],[1,-1],[1,0],[0,-1],[1,0],[1,0],[0,-1],[1,0],[0,-1],[1,0],[1,0],[0,-1],[1,0],[1,0],[0,-1],[1,-1],[1,0],[0,-1],[0,-1],[0,-1],[1,0],[-1,-1],[0,-1],[-1,0],[0,-1],[-1,-1],[0,-1],[0,-1],[1,0],[1,0],[0,-1],[1,0],[1,0],[1,-1],[0,-1],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[-1,-1],[1,0],[0,-1],[0,-1],[-1,0],[0,1],[-1,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[0,-1],[1,0],[1,-1],[1,0],[1,-1],[-1,0],[1,0],[0,-1],[-1,-1],[-1,0],[0,1],[-1,0],[0,-1],[0,-1],[1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[1,0],[1,-1],[1,0],[0,-1],[0,-1],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,-1],[0,-1],[-1,0],[0,-1],[0,-1],[1,0],[1,1],[1,0],[1,0],[1,0],[0,-1],[-1,0],[-1,0],[0,-1],[1,0],[1,0],[1,0],[0,-1],[-1,-1],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[1,0],[1,0],[0,-1],[0,-1],[0,-1],[-1,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[0,1],[0,1],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[0,-1],[0,-1],[-1,0],[0,1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[0,-1],[1,0],[1,-1],[-1,0],[-1,0],[-1,-1],[-1,0],[0,-1],[-1,0],[0,-1],[1,-1],[-1,0],[0,-1],[-1,0],[1,-1],[1,0],[1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,-1],[0,1],[-1,0],[0,-1],[-1,0],[1,-1],[-1,0],[0,-1],[1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,-1],[-1,0],[-1,0],[0,-1],[1,0],[1,0],[1,0],[0,-1],[1,1],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[1,-1],[0,-1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[0,-1],[0,-1],[-1,0],[-1,0],[0,-1],[1,0],[0,-1],[-1,0],[-1,0],[-1,-1],[0,-1],[0,-1],[-1,0],[0,-1],[1,0],[0,-1],[1,0],[1,0],[0,-1],[0,-1],[1,0],[1,0],[0,-1],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[0,-1],[1,0],[0,-1],[0,-1],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[1,0],[-1,0],[0,-1],[0,-1],[-1,0],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,1],[-1,0],[-1,-1],[0,-1],[0,-1],[1,0],[1,0],[0,-1],[1,0],[-1,0],[-1,0],[0,-1],[1,0],[1,0],[0,-1],[1,0],[0,-1],[-1,0],[-1,0],[0,-1],[1,0],[0,-1],[0,-1],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,-1],[1,0],[1,0],[1,0],[1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[0,-1],[1,0],[1,0],[1,-1],[0,-1],[-1,0],[-1,-1],[0,-1],[0,1],[1,0],[1,0],[0,-1],[1,-1],[1,-1],[0,-1],[1,0],[0,-1],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[-1,0],[0,-1],[-1,0],[0,-1],[0,-1],[1,0],[0,-1],[1,1],[0,-1],[1,0],[-1,0],[-1,0],[0,-1],[-1,0],[0,1],[0,-1],[0,-1],[0,-1],[0,-1],[-1,0],[1,-1],[-1,-1],[1,-1],[0,-1],[1,-1],[0,-1],[1,0],[0,-1],[0,-1],[0,-1],[0,-1],[1,-1],[0,-1],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[0,1],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,-1],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,-1],[0,-1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,-1],[-1,0],[-1,0],[-1,-1],[-1,0],[0,-1],[-1,-1],[-1,0],[0,1],[-1,0],[-1,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[0,-1],[0,-1],[-1,0],[1,0],[0,-1],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[0,-1],[-1,-1],[0,-1],[-1,-1],[0,-1],[-1,-1],[-1,0],[0,-1],[-1,0],[-1,-1],[-1,0],[0,-1],[-1,0],[0,-1],[0,-1],[1,0],[0,-1],[0,-1],[0,-1],[0,-1]],[[956,7247],[5,6],[0,6],[1,7],[-2,6],[-2,8],[-2,4],[-4,8],[-3,4],[-2,5],[-6,8],[-5,7],[-4,5],[-1,5],[-1,5],[0,8],[1,4],[2,6],[2,8],[1,5],[0,5],[1,5],[0,5],[0,5],[0,6],[-2,7],[0,6],[-2,5],[0,5],[-2,7],[-1,4],[-4,9],[-4,6],[-4,5],[-3,5],[-3,5],[-2,4],[0,5],[-2,5],[0,4],[-1,5],[-2,7],[-2,6],[-2,4],[-4,8],[-2,5],[-3,7],[-2,5],[-12,16],[-5,6],[-8,7],[-8,7],[-7,6],[-7,5],[-6,6],[-4,6],[-3,7]],[[4695,5663],[-45,11],[-36,8],[-23,6],[-131,32],[-189,44],[-26,6]],[[4245,5770],[16,24],[2,4],[10,13],[3,4],[4,6],[8,11],[3,5],[3,5],[14,18],[8,12],[7,10],[3,5],[6,9],[8,12],[15,23],[5,7],[7,9],[5,7],[4,5],[4,7],[3,5],[24,35],[3,4],[22,32],[12,18],[12,17]],[[3980,5452],[239,325]],[[4219,5777],[26,-7]],[[6963,5525],[-3,0],[-6,-6],[-2,-4],[-1,-4],[0,-4],[0,-4],[1,-4],[-1,-4],[-3,-4],[-5,-2],[-7,-1],[-6,1],[-5,2],[-4,3],[-5,3],[-5,2],[-8,3],[-5,-3],[-6,-1],[-4,-4],[-3,-3],[-1,-4],[-1,-4],[-1,-5],[0,-4],[1,-4],[1,0],[0,-1],[0,-1],[1,0],[0,-1],[3,-2],[6,-2],[0,-1],[0,-1],[1,0],[0,-1],[0,-1],[-1,0],[0,-1],[1,0],[1,0],[0,-1],[1,0],[1,0],[0,-1],[1,0],[0,-1],[1,0],[1,-1],[1,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,1],[0,1],[0,1],[0,1],[1,0],[0,1],[0,1],[0,1],[0,1],[1,0],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[-1,0],[0,1],[0,1],[-1,0],[-1,1],[-1,1],[-1,0],[0,1],[-1,0],[-4,1],[-4,1],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[0,1],[0,1],[-1,1],[-1,0],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[1,0],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[0,1],[-1,-1],[-1,0],[0,-1],[1,-4],[2,-4],[1,-4],[2,-4],[2,-3],[1,-4],[1,-4],[2,-4],[1,-4],[-2,-4],[-4,-4],[-6,-1],[-7,-2],[-7,-2],[-5,-3],[-5,-4],[-3,-4],[-4,-4],[-4,-3],[-5,-2],[-8,-3],[-5,-3],[-2,-3],[-1,-4],[1,-5],[5,-3],[4,-3],[5,-3],[3,-3],[3,-4],[3,-4],[1,-4],[1,-4],[0,-4],[-1,-4],[-3,-4],[-1,-4],[-1,-4],[1,-4],[0,-5],[1,-4],[0,-4],[0,-5],[-2,-4],[-1,-5],[-1,-4],[-2,-4],[-2,-4],[-2,-4],[0,-4],[4,-4],[6,-2],[7,0],[6,2],[4,3],[5,3],[5,3],[7,2],[6,-2],[6,-2],[8,-1],[7,-1],[6,0],[7,-2],[7,-2],[6,-1],[7,-1],[6,-2],[5,-2],[1,-4],[-6,-1],[-7,-1],[-7,-2],[-7,-1],[-6,-1],[-6,-1],[-6,-3],[-3,-4],[0,-4],[1,-4],[5,-3],[3,-3],[0,-6]],[[1833,3639],[3,-6],[-1,-7],[0,-5],[-1,-4],[-1,-6],[0,-4],[-1,-4],[0,-5],[-1,-5],[0,-4],[-1,-5],[0,-4],[-1,-5],[0,-5],[-1,-4],[0,-5],[-1,-6],[0,-4],[-1,-5],[0,-4],[-1,-6],[0,-6],[-1,-4],[0,-5],[-1,-6],[0,-4],[-1,-5],[0,-6],[-1,-4],[0,-5],[-1,-4],[0,-6],[-1,-5],[0,-4],[-1,-5],[0,-5],[2,-20]],[[1820,3442],[-2,-22],[-75,0],[9,-35],[-173,-124],[-50,1],[-5,-129]],[[1524,3133],[-9,-3],[-25,-1],[-45,-2],[-9,0],[-7,0],[-10,0],[-7,-1],[-8,0],[-10,0],[-7,-1],[-14,0],[-9,-1],[-9,0],[-12,-1],[-9,0],[-8,-1],[-7,0],[-9,0],[-11,-1],[-8,0],[-7,-1],[-9,0],[-10,-1],[-9,0],[-8,0],[-10,-1],[-10,0],[-9,-1],[-12,0],[-6,-1],[-9,0],[-11,0]],[[1181,3116],[1,6],[0,6],[0,5],[1,6],[0,6],[1,5],[0,5],[0,12],[1,14],[0,11],[1,9],[0,7],[1,12],[0,19],[1,9],[1,21],[0,4],[0,14],[1,18],[0,7],[0,3],[0,6],[0,4],[0,5],[0,6],[2,8],[-7,1],[3,4],[3,3],[1,5],[-4,3],[1,4],[3,4],[-3,4],[-1,4],[1,4],[2,3],[0,4],[5,3],[4,3],[6,2],[3,3],[5,2],[-1,4],[-4,3],[3,3],[4,3],[2,4],[-4,3],[-1,5],[-5,4],[-2,3],[-1,4],[-1,4],[-2,4],[-9,4],[4,7]],[[1210,3652],[6,-3],[7,0],[11,0],[12,0],[7,0],[7,-1],[11,0],[7,0],[11,0],[10,0],[7,0],[9,-1],[12,0],[9,0],[7,0],[8,0],[7,0],[8,0],[9,-1],[7,0],[7,0],[10,0],[6,0],[11,0],[9,-1],[10,0],[11,0],[9,0],[11,-1],[11,0],[14,0],[7,0],[14,-1],[14,0],[12,0],[11,0],[10,-1],[6,0],[8,0],[8,-1],[6,0],[7,0],[7,0],[6,0],[10,0],[11,-1],[9,0],[8,0],[8,0],[8,0],[8,-1],[8,0],[11,0],[7,0],[7,0],[12,0],[6,0],[12,-1],[7,0],[11,0],[10,0],[6,0],[7,0],[8,0],[9,0],[9,0],[7,0],[12,0],[15,1]],[[2161,3253],[11,0],[62,-2],[48,-1],[57,-2],[46,-1]],[[1814,2871],[9,135]],[[1823,3006],[56,-2],[143,187],[-33,66]],[[1989,3257],[105,-2],[67,-2]],[[1172,2890],[0,3],[1,21],[1,21],[1,20],[1,19],[1,20],[0,17],[1,11],[0,6],[1,15],[1,15],[1,24],[0,7],[1,20],[-1,7]],[[1524,3133],[299,-127]],[[1820,3442],[77,-2],[92,-183]],[[5105,3002],[-18,2],[-32,2],[-45,3],[-13,1],[-73,5],[-42,3],[-20,1],[-10,2],[-17,3],[-26,4],[-22,4],[-9,1],[-17,3],[-11,1],[-15,4]],[[4735,3041],[-1,0]],[[4086,2644],[51,-2],[75,-3],[56,-1],[70,-3],[16,-1]],[[4354,2634],[61,-3],[52,-2],[69,-2],[58,-3],[45,-2],[20,0]],[[4641,2158],[-32,-3]],[[4735,3041],[-39,-214],[-4,-52]],[[4692,2775],[-20,-4],[-18,-5],[-14,-4],[-23,-7],[-25,-7],[-13,-4],[-32,-8],[-29,-9],[-30,-8],[-35,-22],[-19,-13],[-21,-13],[-18,-11],[-21,-13],[-20,-13]],[[4692,2775],[-2,-31],[-21,-63],[-10,-59]],[[5398,2977],[-2,-5],[-1,-4],[-1,-5],[-2,-4],[-1,-4],[-2,-4],[-2,-4],[-2,-4],[-1,-4],[-1,-4],[-1,-5],[-2,-4],[-2,-4],[-1,-5],[0,-4],[1,-4],[0,-4],[-1,-4],[-1,-5],[0,-4],[0,-4],[-1,-4],[-2,-5],[0,-4],[-1,-5],[-1,-3],[-1,-5],[-1,-4],[-1,-4],[-1,-4],[-2,-4],[-3,-4],[-2,-4],[0,-4],[0,-4],[0,-5],[-1,-5],[-2,-4],[-3,-3],[-5,-3],[-5,-3],[-6,-3],[-5,-3],[-5,-3],[-5,-3],[-4,-4],[-5,-4],[-3,-4],[-4,-4],[-2,-4],[-2,-4],[-2,-4],[-2,-5],[-1,-4],[0,-4],[1,-3],[1,-4],[2,-5],[1,-4],[1,-5],[1,-4],[1,-6],[0,-4],[-2,-4],[-1,-4],[1,-4],[2,-5],[6,-5],[5,-3],[6,-2],[6,-1],[5,-2],[5,-2],[6,-3],[5,-3],[4,-3],[5,-3],[6,-1],[7,-1],[7,0],[7,1],[7,0],[6,0],[8,0],[7,1],[6,-1],[5,-2],[3,-5],[-4,-4],[-6,-5],[-4,-3],[-4,-5],[-3,-3],[-5,-4],[-6,-3],[-5,-2],[-5,-3],[-4,-3],[-4,-3],[-4,-4],[-2,-4],[-3,-4],[-3,-3],[-3,-4],[-4,-4],[-3,-5],[-3,-4],[-3,-3]],[[6236,9441],[-36,-12],[-1,-1],[-4,0],[-8,1],[-5,0],[-8,2],[-11,3],[-1,-1],[-2,-7],[-2,-9],[12,-5],[-9,-7],[-2,-2],[18,-3],[-2,-4],[-2,-5],[-2,-4],[-20,-17],[21,-10],[-19,-16]],[[6153,9344],[-92,42],[-16,-20],[-25,-30],[-37,-43],[-36,-42],[-34,-42],[-30,-36],[-31,-37],[-17,-20],[-6,-8]],[[5728,9659],[13,-1],[39,-2],[22,-2],[11,0],[37,1],[55,2],[50,-1],[12,0],[31,0],[22,0],[22,0],[24,0],[11,1],[9,0],[6,0],[63,2]],[[6155,9659],[16,-24],[19,-29],[20,-29],[4,-24],[6,-31],[7,-29],[4,-25],[4,-19],[1,-8]],[[6559,9158],[-133,60]],[[6426,9218],[19,16],[-17,9],[-24,10],[-1,0],[-20,11],[9,7],[-15,7],[11,9],[-5,2],[-3,1],[-4,2],[1,1],[0,5],[1,3],[1,5],[0,2],[-1,5],[-4,1],[15,13],[7,25],[9,1],[2,2],[4,-2],[3,-3],[18,0],[29,0],[6,4],[9,5],[8,3],[4,2],[2,2],[-1,6],[-2,1],[-2,1],[-5,0],[4,7],[2,3],[4,10],[21,1],[4,17],[2,7],[-13,-3],[-7,-1],[-13,-4],[-6,-1],[-13,0],[0,20],[-57,0],[2,3],[-12,4],[1,5],[-2,0],[3,16],[2,5],[2,9],[0,9],[-1,0],[0,1],[-4,0],[-2,1],[0,2],[-1,1],[-3,2],[-8,-4],[-6,-2],[-3,-1],[-3,0],[-3,-1],[-2,2],[-3,1],[-4,0],[-5,12],[-11,-3],[7,-13],[-2,-1],[-1,-1],[-7,-2],[-1,-1],[-2,-1],[-1,0],[-8,-3],[-2,0],[-2,-1],[-2,0],[-1,0],[-2,0],[-3,-1],[-3,-1],[-2,0],[-2,-1],[-2,0],[-2,-1],[-2,-1],[-2,0],[-4,-1],[-5,-2],[-10,-3],[-3,0],[-6,-2],[-3,-1],[-1,0],[-2,0],[-1,-1],[-2,0],[-3,-2],[0,-1],[-5,-2],[-22,-8]],[[6155,9659],[56,0],[103,1],[4,1],[11,0],[13,0],[41,0],[59,1],[9,0],[8,0],[38,1],[3,0],[11,0],[12,0],[84,1],[2,0],[25,-1],[12,0],[7,0],[1,0],[36,0],[15,0],[23,-1],[7,0],[18,0],[28,0],[28,0],[1,0],[1,0],[9,0],[11,0],[30,0],[3,0],[1,0],[16,0],[3,0],[12,1],[25,0],[2,0],[60,0],[34,1],[31,0],[8,0],[31,0],[15,1]],[[6153,9344],[8,-4],[23,-11],[13,-6],[27,-12],[25,-11],[28,-13],[59,-27],[50,-24],[40,-18]],[[4219,5777],[-671,158],[-2,0]],[[3546,5935],[-62,15]],[[3484,5950],[11,10],[29,25],[3,3],[27,24],[25,21],[-35,17],[4,4],[6,5],[13,12],[14,13],[14,12],[24,22],[6,5],[5,4],[21,20],[-9,4],[-18,12],[13,13],[4,4],[7,7],[5,5],[6,6],[14,14],[13,13],[7,8],[-21,10],[-11,5],[-5,3],[5,6],[34,34],[13,10]],[[3484,5950],[-105,25],[-248,61],[-30,8],[-40,10]],[[5207,2147],[1,-4],[1,-4],[-2,-4],[-3,-3],[-5,-7],[-2,-4],[-3,-4],[-3,-3],[-3,-4],[-3,-3],[-2,-4],[-2,-4],[-2,-4],[-2,-4],[-1,-3],[-1,-5],[-1,-3],[0,-5],[1,-4],[1,-4],[1,-3],[1,-4],[2,-4],[2,-4],[2,-4],[2,-4],[0,-4],[1,-4],[1,-4],[0,-4],[1,-4],[0,-4],[-1,-4],[-1,-4],[-4,-3],[-5,-3],[-5,-3],[-5,-3],[-4,-3],[-5,-3],[-4,-3],[-2,-4],[-5,-2],[-5,-3],[-6,-1],[-8,-5],[0,-5],[1,-3],[2,-4],[1,-4],[3,-4],[2,-4],[4,-3],[3,-4],[4,-3],[4,-3],[4,-3],[2,-4],[1,-4],[1,-5],[0,-4],[-2,-4],[-4,-3],[-6,-3],[-4,-2],[-6,-3],[-7,-4],[-9,-5],[-5,-7],[-1,-5],[0,-5],[1,-4],[1,-4],[0,-4],[2,-4],[1,-4],[-1,-4],[-1,-4],[0,-4],[0,-4],[-1,-4],[0,-4],[0,-4],[1,-4],[0,-4],[1,-7],[0,-6],[-4,-5],[-3,-3],[-5,-3],[-6,-4],[-6,-5],[-2,-5],[1,-5],[2,-4],[2,-3],[3,-4],[2,-4],[3,-4],[2,-4],[3,-4],[3,-3],[4,-4],[5,-2],[7,-2],[6,-1],[5,-2],[8,2],[6,0],[6,1],[6,-2],[6,-2],[3,-3],[0,-4],[-1,-4],[-2,-4],[-3,-3],[-4,-3],[1,-4],[2,-4],[0,-4],[3,-3],[3,-4],[5,-6],[7,-3]],[[4603,1700],[-6,-1],[1,87]],[[3307,5618],[74,-18],[247,-62],[58,-14]],[[2856,5705],[13,1],[17,2],[35,2],[151,-35],[61,-15],[27,-6],[26,-6],[120,-30],[1,0]],[[3307,5618],[75,98],[27,37],[117,154],[20,28]],[[2611,4660],[-39,-12],[-21,-7],[-17,-5],[-33,-11],[-31,-11],[-6,-2],[-31,-9],[-106,-33]],[[2327,4570],[0,1],[-1,3],[0,2],[-1,2],[-1,4],[-1,2],[-1,2],[0,3],[-1,1],[0,2],[-1,3],[-1,2],[-1,3],[0,2],[-1,3],[-1,1],[-1,5],[-1,1],[-1,3],[-1,4],[0,2],[-2,4],[0,1],[-1,2],[0,2],[0,1],[-1,1],[0,2],[-1,1],[-1,3],[-1,3],[0,3],[-1,1],[0,2],[-2,4],[0,2],[-1,3],[-1,4],[-2,5],[-1,3],[-1,3],[-1,3],[-1,4],[0,1],[-2,5],[-2,9],[-4,11],[-3,12],[-4,12],[0,1],[-2,-1],[-2,0],[-2,0],[-3,0],[-2,0],[-1,0],[-2,-1],[-1,0],[-1,-1],[-4,-1],[-1,1],[-4,5],[-6,6],[5,2],[10,1],[0,3],[1,5],[0,2],[-1,0]],[[2263,4750],[-17,84],[-32,112],[1,31]],[[1548,4885],[-3,-7],[-2,-5],[-1,-4],[-1,-4],[1,-4],[-1,-5],[-2,-4],[-1,-3],[-1,-5],[0,-4],[3,-3],[5,-3],[6,-2],[5,-2],[1,-5],[1,-3],[4,-4],[6,-2],[6,-1],[6,0],[7,-1],[7,0],[6,2],[4,3],[10,3],[26,-92]],[[1640,4730],[-1,0],[2,-10],[1,-2]],[[1642,4718],[-223,-7],[-90,-3]],[[2263,4750],[-10,-1],[-19,0],[-14,1],[-10,-1],[-7,0],[-1,0],[-2,0],[-1,0],[-15,-1],[-16,-1],[-3,0],[-2,0],[-9,0],[-10,-1],[-5,0],[-4,0],[-2,-1],[-4,0],[-1,0],[-2,0],[-8,0],[-10,-1],[-10,0],[-6,0],[-7,0],[-3,0],[-4,-1],[-8,0],[-4,0],[-5,0],[-8,0],[-8,-1],[-5,0],[-5,0],[-10,0],[-5,0],[-8,0],[-3,0],[-1,0],[-2,0],[-3,0],[-2,0],[-3,0],[-3,0],[-2,0],[-2,0],[-8,-1],[-11,0],[-9,0],[-2,0],[-12,-1],[-8,0],[-13,0],[-1,0],[-14,-2],[-1,0],[-1,0],[-10,0],[-11,-1],[-2,0],[-1,0],[-10,0],[-2,0],[-11,0],[-2,0],[-7,-1],[-5,0],[-16,0],[-9,0],[-4,0],[-13,-1],[-10,0],[-8,0],[-1,0],[-1,0],[-4,0],[-12,-1],[-13,0],[-8,0],[-7,-1],[-5,0],[-11,0],[-18,-1],[-4,0],[-1,0],[-8,0],[-16,-1],[-2,0],[-3,0],[-11,0],[-12,-1],[-6,0],[-7,0]],[[3115,4105],[-103,-31],[-113,-35],[-189,-59]],[[2710,3980],[0,1],[0,4],[0,3],[-1,3],[0,5]],[[2709,3996],[-36,43],[-37,43],[-36,43],[-41,47],[-32,37],[-35,40],[-34,41],[-30,34],[-12,14],[-2,10],[-5,6],[-7,8],[-4,5],[-4,0]],[[2394,4367],[-4,11],[-4,8],[-3,8],[-5,10],[-1,5],[-1,2],[-1,4],[-1,5],[-2,4],[0,1],[-2,8],[-3,8],[0,1],[-3,8],[-2,7],[-3,9],[-1,7],[-2,4],[-1,3],[-2,9],[-3,8],[-2,7],[0,1],[-2,6],[-3,9],[-3,10],[-1,1],[0,2],[0,1],[-1,1],[-1,2],[0,3],[-1,1],[0,2],[-1,3],[-1,2],[-1,2],[0,3],[-1,1],[-1,4],[-1,3],[0,2],[-1,3],[-1,3],[-1,1]],[[1762,4347],[-235,-8],[-12,0],[-17,-1],[-17,0],[-25,-1],[-37,-1],[-17,0],[-59,-1],[-15,-1],[-63,-1]],[[1642,4718],[14,-42],[1,-4],[2,-5],[1,-4],[2,-5],[1,-6],[1,-1],[2,-7],[3,-8],[0,-2],[2,-6],[2,-7],[1,0],[0,-1],[3,-8],[1,-4],[0,-2],[2,-5],[2,-6],[1,-3],[2,-6],[2,-5],[0,-3],[1,-1],[0,-1],[4,-12],[3,-8],[1,-5],[3,-9],[3,-8],[2,-7],[1,-3],[0,-1],[1,-3],[2,-7],[2,-6],[2,-6],[2,-6],[2,-7],[3,-8],[1,-3],[2,-7],[1,-1],[1,-5],[0,-1],[1,-1],[4,-12],[2,-8],[4,-12],[4,-11],[3,-11],[1,-2],[2,-7],[2,-7],[1,-2],[2,-6],[2,-8],[1,-2],[2,-5],[0,-2],[1,-2],[1,-4],[1,-3],[1,-4],[3,-7]],[[1877,4024],[-62,2],[-83,3],[-13,0],[-12,1],[-277,9],[-48,0],[-7,0],[-7,0],[-6,1],[-8,0],[-29,0],[-7,0],[-26,1],[-11,0],[-9,0],[-12,0],[-21,1]],[[1762,4347],[2,-9],[4,-9],[8,-22],[7,-18],[6,-20],[4,-10],[3,-9],[9,-25],[10,-25],[11,-30],[12,-31],[9,-26],[12,-36],[9,-26],[8,-26],[1,-1]],[[1877,4024],[6,-18],[12,-35]],[[1895,3971],[0,-2],[15,-39],[5,-13],[0,-2],[12,-37],[12,-37]],[[1939,3841],[-18,-1],[-29,-1],[-29,0],[-2,-29],[-3,-26],[-1,-20],[-1,-5],[0,-4],[0,-5],[0,-5],[-2,-8],[-1,-8],[-2,-6],[-1,-6],[-2,-7],[-2,-9],[-1,-7],[-2,-10],[-1,-5],[-2,-8],[-2,-8],[-1,-6],[-2,-6],[-1,-8],[-1,-4]],[[2239,3578],[-10,-41],[-9,-39],[-9,-38],[-10,-42],[-11,-46],[-10,-39],[-6,-26],[-2,-10],[-11,-44]],[[1939,3841],[8,-24],[16,-50],[2,-5],[3,-9],[2,-7],[2,-4],[0,-1],[3,-9],[0,-1],[6,-17],[6,-18],[16,-49],[2,-4],[1,-4],[14,-42],[3,-10],[1,0],[0,-1],[3,-11],[15,0],[2,0],[2,0],[1,0],[19,1],[27,0],[48,0],[18,0],[8,1],[1,0],[1,0],[4,0],[2,0],[22,0],[25,0],[12,1],[5,0]],[[2394,4367],[-7,0],[-30,-1],[-35,-1],[-44,-1],[-9,0],[-1,0],[-25,-1],[-6,0],[-38,-1],[-29,-1],[-31,-1],[-4,0],[-2,0],[0,-7],[-2,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[-1,0],[-1,-1],[-2,-1],[-2,-1],[-2,0],[-1,0],[-1,0],[-1,0],[-1,1],[-1,0],[-1,1],[-1,0],[0,1],[-1,0],[-1,0],[0,1],[-1,0],[-1,0],[-1,1],[-1,0],[-2,0],[-1,0],[-2,1],[-2,0],[-2,0],[-2,0],[-2,0],[-3,1],[-4,1],[-4,2],[-2,3],[-1,4],[-1,1],[-1,2],[-6,4],[-3,1],[-3,1],[-3,1],[-1,1],[0,-1],[-1,1],[-3,1],[-3,1],[-9,3],[-2,0],[-2,0],[-3,1],[-2,0],[-4,0],[0,-1],[0,-1],[-1,0],[0,-1],[1,0],[-1,-1],[-1,0],[-1,-1],[0,-1],[1,0],[0,-1],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[-1,0],[0,-1],[-1,0],[0,1],[-1,0],[-1,0],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[0,-1],[0,-1],[1,0],[-1,-1],[0,-1],[0,-1],[-7,0],[-10,0],[-2,0],[-11,-1],[-11,0],[-1,0],[-1,0],[-5,0],[-6,0],[-2,-1],[-1,0],[-7,0],[-12,0],[-14,-1],[-10,0],[-4,0],[-2,0],[-18,-1],[-7,0],[-3,0],[-1,0],[-7,-1],[-11,0],[-20,-1],[-16,0],[-9,-1],[-7,0],[-16,0],[-22,-1],[-10,-1]],[[2709,3996],[-1,0],[-1,0],[-7,0],[-3,0],[-1,0],[-3,0],[-2,0],[-6,-1],[-4,0],[-5,0],[-7,0],[-7,-1],[-7,0],[-3,0],[-3,0],[-2,0],[-4,0],[-3,0],[-1,-1],[-4,0],[-8,0],[-9,0],[-11,-1],[-4,0],[-15,0],[-6,-1],[-7,0],[-12,0],[-7,0],[-10,-1],[-14,0],[-6,-1],[-8,0],[-3,0],[-3,0],[-2,0],[-3,0],[-6,0],[-43,-2],[-44,-1],[-16,-1],[-18,-1],[-20,0],[-4,0],[-4,0],[-8,-1]],[[2344,3983],[-28,0],[-35,-1],[-41,-1],[1,3],[3,6],[3,5],[1,2],[2,3],[3,3],[3,2],[4,1],[6,2],[4,1],[3,2],[1,2],[1,1],[0,1],[-2,2],[-2,0],[-4,2],[-3,0],[-1,0],[-1,-1],[1,-1],[1,-1],[-1,-2],[-2,-2],[-4,0],[-3,0],[-3,1],[-2,1],[0,3],[-1,2],[-1,1],[-1,3],[-3,1],[-3,0],[-3,-1],[-3,-2],[-7,0],[-3,0],[-4,3],[-2,2],[0,3],[1,3],[1,2],[2,2],[2,3],[1,2],[1,0],[-4,1],[-2,5],[0,9],[-2,19],[-1,14],[-1,5],[-25,-1],[-16,0],[0,-11],[-12,0],[-12,-2],[-4,0],[-5,-2],[-3,-1],[-7,-2],[-24,-5],[3,-13],[4,-15],[5,-13],[6,-15],[3,-15],[2,-7],[6,1],[1,-12],[1,-3]],[[2139,3978],[-27,-1],[-7,0],[-11,-1],[-1,0],[-3,0],[-16,0],[-6,0],[-8,-1],[-12,0],[-6,0],[-1,0],[-5,0],[-7,0],[-6,-1],[-41,-1],[-20,0],[-67,-2]],[[2260,3735],[6,-6],[2,-1],[4,-4],[0,-1],[1,-2],[1,0],[-1,-7],[0,-4],[0,-2],[-1,-3],[0,-2],[11,-3],[2,-1],[7,-5],[6,-3],[1,-1],[3,-2],[1,0],[0,-1],[1,-1],[1,-1],[4,-5],[6,-9],[5,-5],[37,2],[1,-6],[1,-16],[-3,-1],[1,-15],[1,-10],[0,-6],[0,-1],[4,-11],[1,0],[1,-10],[-6,0],[0,-5],[1,-5]],[[2359,3582],[-19,-1],[-93,-3],[-1,0],[-1,0],[-1,0],[-4,0],[-1,0]],[[2139,3978],[2,-23],[18,0],[3,-9],[2,-7],[1,-8],[0,-2],[1,-11],[0,-1],[1,-11],[0,-5],[-11,0],[1,-16],[19,1],[3,-19],[-15,0],[1,-18],[1,-19],[5,0],[0,-2],[1,-12],[22,1],[1,-8],[1,-19],[-21,0],[1,-7],[0,-4],[1,-9],[0,-5],[0,-1],[5,0],[6,1],[10,1],[0,-4],[11,1],[0,-4],[1,-4],[5,0],[9,1],[3,-9],[9,0],[13,0],[11,-12]],[[2344,3983],[2,-2],[1,-3],[2,-3],[2,-3],[0,-1],[-1,-1],[-8,-9],[-24,13],[1,-22],[26,-1],[11,0],[13,0],[1,-5],[1,-4],[-4,0],[1,-3],[1,-7],[2,-11],[0,-2],[2,-7],[-16,-1],[-1,-10],[-27,-1],[1,-19],[7,0],[0,-19],[-40,0],[-1,-18],[0,-2],[0,-2],[-5,0],[0,-7],[0,-5],[0,-6],[0,-5],[0,-2],[0,-3],[0,-2],[-2,0],[-11,0],[-6,0],[-2,0],[-2,0],[-4,0],[-4,0],[-4,0],[-1,0],[-1,-2],[-1,-1],[0,-1],[0,-1],[-1,-1],[0,-1],[0,-1],[0,-1],[0,-1],[1,-1],[1,-1],[1,-1],[1,0],[1,0],[1,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,-1],[0,-1],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[1,-1],[1,0],[1,-1],[1,0],[1,0],[1,0],[1,0],[1,1],[1,0],[0,1],[1,0],[0,1],[0,1],[-1,1],[0,1],[-1,0],[0,1],[0,1],[0,1],[1,0],[1,0],[0,1],[1,0],[1,1],[2,0],[1,1],[1,0],[1,0],[2,0],[0,1],[2,0],[2,0],[1,0],[1,0],[1,0],[1,-1],[1,-1],[0,-1],[0,-1],[-1,0],[0,-1],[-2,-1],[-1,-1],[-2,-1],[-1,-1],[-1,0],[-1,-1],[-1,-1],[-1,0],[0,-1],[-1,0],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[0,-1],[0,-1],[-1,-1],[0,-1],[0,-1],[0,-1],[0,-2],[0,-1],[0,-1],[1,-1],[0,-1],[1,-1],[2,-1],[1,-1],[1,-1],[1,0],[1,-1],[1,0],[1,0],[2,1],[1,0],[1,1],[1,1],[1,1],[1,1],[0,1],[1,1],[1,0],[0,1],[1,0],[0,1],[0,1],[1,1],[1,1],[0,1],[1,0],[0,1],[1,0],[1,1],[1,0],[1,0],[1,1],[0,-1],[1,0],[1,0],[1,0],[1,0],[0,-1],[1,0],[1,-1],[1,0],[0,-1],[1,-1],[0,-1],[0,-1],[0,-1],[-1,-1],[0,-1],[0,-1],[1,0],[0,-1],[1,0],[1,-1],[1,0],[0,-1],[1,0],[1,-1],[0,-1],[1,0],[0,-1],[0,-1],[0,-1],[0,-1],[-1,0],[0,-1],[-3,-1],[-2,-1],[-2,-1],[-1,-1],[-3,-1],[-1,-1],[-1,-1],[-1,0],[-1,-1],[-1,0],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-2,0],[-1,0],[-1,0],[-4,0],[-1,0],[-1,0],[-2,0],[-2,0],[-1,0],[-2,0],[-2,0],[-4,0],[-3,-1],[-2,0],[-1,0],[-4,0],[-3,0],[-4,0],[-1,0],[10,-12]],[[2710,3980],[0,-2],[1,-5],[0,-5],[1,-3],[0,-2],[0,-3],[0,-3],[0,-5],[1,-1],[0,-4],[0,-5],[1,-5],[0,-4],[1,-3],[0,-3],[0,-5],[1,-2],[0,-4],[1,-7],[0,-3],[0,-1],[1,-4],[0,-1],[0,-4],[0,-7],[1,-5],[0,-5],[1,-8],[1,-12],[0,-1],[0,-5],[0,-2],[1,-2],[0,-5],[0,-6],[0,-3],[1,-7],[0,-6],[1,-10],[0,-9],[0,-9],[0,-2],[1,-5],[0,-4],[0,-2],[1,-6],[0,-3],[0,-4],[0,-1],[0,-1],[0,-1],[0,-1],[0,-2],[0,-1],[0,-1],[1,-2],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-2],[1,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-2],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[0,-1],[1,0],[0,-1],[0,-1],[0,-1],[0,-1],[0,-2],[0,-1],[0,-1],[1,-2],[0,-2],[0,-1],[0,-2],[0,-1],[0,-1],[0,-2],[1,-2],[0,-4],[0,-2],[0,-3],[0,-2],[0,-2],[0,-2],[1,-1],[0,-2],[0,-1],[0,-1],[0,-4],[0,-4],[0,-4],[1,-5],[0,-1],[0,-4],[0,-4],[0,-1],[0,-1],[0,-3],[0,-4],[0,-4],[1,-7],[0,-7],[0,-5],[0,-2],[0,-6],[0,-7],[0,-3],[0,-4],[0,-16]],[[2734,3595],[-76,-3],[-6,-1],[-1,0],[-5,0],[-8,0],[-3,0],[-6,-1],[-4,0],[-3,0],[-8,0],[-1,0],[-6,0],[-10,-1],[-1,0],[-7,0],[-1,0],[-4,0],[-5,0],[-8,0],[-7,-1],[-1,0],[-7,0],[-8,0],[-12,-1],[-1,0],[-5,0],[-18,0],[-18,-1],[-13,0],[-4,0],[-9,-1],[-2,0],[-9,0],[-1,0],[-3,0],[-15,-1],[-12,0],[-13,-1],[-13,0],[-1,0],[-20,-1],[-20,0]],[[2737,3595],[-3,0]],[[1146,8075],[66,-18],[27,-20],[-2,-12],[-15,7],[1,-12],[-17,6],[-28,-12],[37,-24],[44,-2],[23,-13],[1,-55],[-16,-11],[23,-16],[4,-43],[34,12],[9,-14],[17,3],[-9,-10],[13,3],[13,-18],[17,24],[23,-6],[4,-11],[26,27],[7,-6],[4,11],[23,2],[31,-11],[-18,-19],[22,-22],[37,22],[37,-3],[-36,1],[5,-14],[-13,5],[-16,-14],[-23,4],[-20,-10],[-23,-61],[-41,-22],[-57,-12],[-83,28],[33,13],[12,-4],[14,15],[-17,4],[-9,-12],[-8,10],[-27,-24],[-18,5],[26,39],[-18,9],[8,19],[-13,15],[-41,-5],[17,-23],[-5,-29],[-19,-14],[-114,-24],[-45,2],[-28,33],[-18,-22],[-48,-9],[-13,28],[-21,-11],[-51,39],[48,-40],[-49,-13],[54,-10],[28,-21],[66,-20],[20,-15],[-17,-13],[36,-12],[23,-62]],[[1083,7587],[-41,-43],[22,-20],[-6,-18]],[[1058,7506],[19,30],[88,-12],[28,-13],[-12,-43],[17,17],[43,-5],[75,-51],[13,-55],[-28,-39],[-35,-13],[-9,-41],[63,-11],[18,-65],[-7,-48],[-18,-14],[-8,-41],[-53,-14],[-26,33],[13,15],[-39,11],[-5,31],[-22,-4],[-10,15],[32,37],[-14,10],[16,19],[-12,16],[-25,0],[10,-33],[-31,-21],[8,-15],[-13,-10],[13,-39],[-50,-42],[-21,6],[-11,-27],[-29,-6],[1,-33],[24,-27],[-16,-9],[-25,8],[-5,-13],[7,-15],[17,20],[43,-19],[5,-23],[-23,-26],[18,2],[13,-13],[-26,-12],[-3,-32],[-62,-22],[20,-50],[-51,-40],[-24,-66],[-35,-20],[9,-15],[30,-5],[5,-10],[-20,-8],[-16,9],[-11,-8],[14,-12],[-16,-9],[32,-4],[43,21],[19,-11],[-15,-22],[22,4],[13,-16],[-22,-19],[-27,-2],[-71,-58],[46,11],[-5,-19],[43,23],[-4,16],[37,6],[13,-2],[4,-15],[30,-1],[14,-18],[23,20],[-10,-17],[16,-8],[-19,5],[-22,-14],[17,-23],[-9,-9],[-31,8],[-18,-22],[-16,17],[21,-26],[-6,-30],[-45,-12],[-50,21],[21,-28],[-27,-19],[-15,33],[-18,-3],[-4,-17],[-22,-7],[-20,7],[-10,-28],[25,-4],[-3,-20],[-37,0],[0,16],[-26,-11],[9,-12],[31,-4],[3,-17],[-38,-9],[-33,3],[-8,9],[-81,-33],[-13,-28],[-19,-1],[-5,-27],[-17,8],[-7,-19],[-17,1],[-23,-18],[1,-59],[10,15],[29,0],[49,-15],[8,-14],[-80,-106],[10,-13],[-15,-5],[-11,8],[0,-25],[25,-10],[-14,-29],[-52,-59],[-40,-21],[-11,-34],[10,-44],[-107,-45],[-3,-18],[-20,-1],[-11,-33],[19,-33],[-29,-31],[6,-19],[-16,0],[-21,-22],[29,-17],[-21,-9],[12,-8],[-9,-24],[29,5],[81,-28],[11,-27],[-16,3],[35,-20],[-12,-52],[-36,-56],[18,-9],[4,-51],[-20,1],[-21,-14],[23,-118],[29,-27],[-19,-21],[-18,2],[15,-35],[51,-6],[-16,-38],[0,-58],[47,11],[50,-19],[-1,-70],[34,-27],[9,-25],[-6,-30],[-30,-9],[9,-9],[-28,-28],[22,-20],[13,5],[18,-12],[-20,-3],[14,-10],[-2,-22],[-19,-14],[4,-13],[-25,-14],[-31,17],[-40,-63],[72,-43],[9,-49],[43,-18],[48,3],[23,-44],[-9,-16],[51,-27],[-14,-23],[12,-21],[-118,-89],[-12,-91],[12,-17],[-12,8],[-72,-30],[-44,-49],[24,-29],[-22,10],[-24,-19],[19,-2],[-46,-29],[18,-23],[-37,-21],[-4,-40],[-21,-17],[21,-6],[20,-26],[-35,15],[-33,-40],[-38,-14],[3,-18],[-13,-3],[1,-9],[19,2],[-19,-18],[46,-44],[19,-5],[-11,-3],[3,-23],[-24,-39],[-14,20],[12,20],[-15,-15],[19,-46],[-12,-19],[14,3],[-14,-18],[23,-7],[-25,2],[-22,-32],[-11,12],[18,18],[-15,1],[-11,-22],[15,-21],[97,-46],[-37,15],[-35,-7],[5,9],[-20,4],[-12,-18],[-11,3],[17,-29],[-46,-41],[-37,-12],[-14,-17],[-129,-44],[0,-16],[-50,-6],[-6,-10],[-21,5],[46,20],[23,27],[107,43],[-5,24],[20,-7],[21,15],[-9,16],[16,-9],[16,8],[-14,7],[28,3],[3,9],[-26,4],[20,3],[-13,12],[46,-6],[-12,6],[8,12],[-26,1],[25,10],[-22,2],[2,14],[21,-5],[0,14],[22,-10],[-22,25],[40,53],[-11,39],[38,46],[-68,83],[46,51],[30,5],[23,33],[-1,31],[36,44],[0,52],[38,18],[31,71],[55,21],[43,45],[-13,56],[53,108],[-26,3],[-20,41],[-27,-6],[6,-32],[-15,17],[-25,-1],[18,6],[-16,6],[19,-2],[7,20],[39,-1],[23,-35],[25,-11],[-24,83],[-34,21],[-1,14],[-19,-1],[-12,27],[-25,16],[-39,-15],[30,29],[-30,3],[-39,33],[6,68],[25,10],[-9,-4],[-19,11],[5,10],[18,11],[12,-33],[-5,21],[50,-2],[35,37],[-35,7],[-20,32],[-46,-4],[11,15],[14,-9],[32,11],[-11,20],[16,47],[-23,2],[-10,17],[16,27],[-9,20],[-34,11],[-21,36],[-52,6],[-14,11],[18,37],[-9,32],[-22,16],[19,34],[-15,35],[16,7],[-8,12],[12,-2],[-6,6],[20,9],[-22,13],[20,18],[-7,20],[-46,60],[16,26],[-16,8],[3,33],[36,27],[-22,13],[13,19],[-18,44],[7,39],[-47,21],[-39,4],[-11,-13],[-35,5],[45,-27],[-12,-23],[14,-23],[-12,-32],[-64,-9],[57,-15],[-23,7],[-26,-7],[-24,5],[7,43],[-23,17],[-24,74],[28,9],[-18,21],[16,40],[25,6],[-14,10],[45,133],[4,41],[-15,21],[50,24],[13,32],[23,-4],[18,37],[-8,91],[30,12],[12,-7],[19,11],[9,-6],[21,36],[24,4],[-15,26],[15,3],[0,18],[-87,33],[-58,51],[-6,21],[67,31],[94,4],[18,17],[19,-12],[10,12],[39,7],[-1,10],[43,6],[10,22],[7,-7],[62,45],[-19,28],[26,8],[2,26],[23,7],[0,14],[46,14],[15,18],[48,21],[35,34],[14,35],[-5,7],[-72,-14],[-64,22],[23,71],[-27,36],[17,31],[-22,24],[26,35],[-6,48],[-53,64],[-4,21],[21,19],[-18,13],[17,8],[-30,24],[-15,51],[-42,2],[1,20],[-21,9],[3,41],[-27,19],[86,65],[-38,20],[-23,126],[-32,-19],[-30,-58],[-19,-6],[15,-68],[-37,-10],[-7,-18],[51,-30],[-2,-10],[-27,-14],[-24,9],[-29,-29],[0,22],[-34,11],[-26,45],[38,92],[42,41],[24,94],[-14,31],[-21,0],[-34,20],[-33,53],[91,65],[57,25],[10,28],[-11,27],[-74,14],[-30,41],[-91,70],[20,34],[-16,14],[19,40],[-54,11],[-33,37],[9,90],[-11,16],[17,16],[-9,27],[-39,21],[-6,18],[19,16],[-10,17],[38,16],[24,35],[-32,37],[-14,53],[7,63],[-17,15],[0,30],[19,26],[-20,-1],[-8,10],[24,29],[-26,2],[-6,14],[27,24],[120,27],[130,-127],[33,-9],[26,35],[-13,28],[20,59],[-40,15],[-15,33],[-46,3],[-42,51],[-12,-4],[-17,21],[-21,3],[24,-2],[6,8],[32,94],[68,13],[7,-16],[22,10],[-8,-14],[41,36],[-24,-61],[14,8],[28,54],[25,23],[23,3],[-13,7],[38,58],[-26,19],[7,17],[-28,9],[-10,41],[-21,0],[-28,-27],[-39,-1],[5,-19],[-13,-1],[7,20],[-45,10],[-16,46],[-38,44],[34,21],[47,5],[-6,12],[37,19],[2,25],[-26,2],[-17,37],[10,18],[75,25],[8,46],[-22,51],[33,53],[-55,67],[5,59],[26,28],[47,11],[28,-12],[-1,-39],[17,-21],[35,17],[14,31],[-22,26],[0,28],[-7,-10],[-16,11],[20,55],[-37,18],[-2,63],[16,2],[-15,2],[13,16],[15,-3],[-1,20],[30,1],[-5,24],[25,4],[-7,9],[-9,-8],[0,17],[-7,-10],[-1,27],[-16,3],[16,0],[-3,23],[-12,2],[13,3],[-14,2],[37,10],[-14,7],[4,25],[63,57],[19,49],[1,16],[-14,2],[35,4],[28,-21],[3,26],[14,2],[-13,-83],[-13,2],[-7,-37],[-33,-40],[-9,-74],[20,-35],[-41,-8],[40,0],[16,-26],[-16,-11],[-30,9],[-32,-7],[13,-40],[28,20],[121,-15],[6,-35],[30,-24],[-11,-68],[-35,-84],[24,-14],[2,-16],[-38,-93],[59,-5],[-6,-41],[16,-31],[-42,-58],[5,-16],[16,2],[5,-12],[64,-14],[-24,-80],[55,76],[50,104],[-8,29],[25,55],[18,8],[2,24],[-27,2],[-8,20],[44,42],[18,2],[-6,22],[25,10],[-28,78],[39,23],[107,20],[40,30],[-2,12],[33,-6],[-27,8],[4,12],[36,40],[41,107],[27,13],[47,-3],[10,-12],[57,63],[36,16],[16,17],[9,89],[18,14],[35,1],[49,104],[32,5],[60,-18],[-39,-96],[56,59],[55,5],[98,-10],[90,-50],[7,-71],[-49,-34],[-24,-52],[-3,-108],[19,-25],[-30,-22],[-27,3],[2,-15],[-29,-8],[-8,7],[-34,-32],[-66,-9],[23,18],[-34,-11],[-6,11],[-26,-12],[-35,7],[-24,24],[56,20],[-15,8],[-33,-15],[-16,20],[22,36],[22,6],[28,34],[-50,4],[-7,15],[-42,-30],[15,11],[-58,-2],[43,-32],[-1,-18],[-24,3],[22,-13],[-9,-37],[3,36],[-18,9],[-1,17],[-26,-32],[-12,-48],[11,-11],[-34,10],[3,-30],[-19,3],[14,6],[-5,17],[-21,-23],[16,-23],[-18,15],[-14,-5],[67,84],[-45,14],[-31,-7],[-30,-45],[-59,-26],[0,-9],[-16,12],[-24,-5],[-10,-15],[-42,9],[35,-10],[-74,-119],[0,-27],[22,-25],[31,-5],[19,-25],[22,8],[31,41],[80,2],[61,-16],[62,-43],[-41,-135],[-67,-77],[12,-8],[-21,-134],[-43,-107],[7,-13],[30,35],[52,-15],[29,-21],[-13,-27],[-16,-6],[-23,6],[-9,-20],[-13,-1],[-19,-42],[6,-19],[17,-5],[-9,-19],[36,11],[22,-4],[-10,10],[14,52],[63,13],[37,55],[48,-4],[32,-26],[-26,-62],[-34,-8],[13,-16],[-9,13],[-17,-32],[-32,-13],[-22,-25],[-11,-29],[-33,-17],[-19,5],[-27,-9],[-20,-36],[-45,-26],[-56,-92],[-41,-110],[13,-11],[-11,-33],[16,-42],[-20,-95],[24,-45],[-4,-21],[-105,-35],[-64,-5],[-61,16]],[[1058,8661],[-79,-15],[4,-68],[-17,-15],[-44,4],[-26,25],[-33,-23],[-13,14],[-1,-27],[-28,-11],[-17,0],[-13,13],[-44,-59],[-39,-99],[-38,-43],[22,-41],[-10,0],[1,-67],[22,-21],[-26,-25],[16,-48],[12,5],[11,-10],[-24,-17],[7,-12],[-20,-6],[27,-15],[-14,-11],[23,-8],[-15,-13],[-14,2],[-2,-35],[15,-10],[38,13],[83,-5],[8,-45],[39,-21],[-1,-60],[11,28],[23,-13],[27,8],[26,66],[46,-16],[47,8],[14,79],[37,17],[47,-8],[-53,20],[15,15],[-12,32],[-49,14],[2,54],[-36,25],[-34,-37],[-11,-40],[-44,-3],[-28,31],[-37,-46],[5,15],[-26,17],[-10,38],[3,21],[51,0],[24,7],[9,17],[18,-6],[13,8],[-7,22],[48,40],[-16,29],[45,46],[-23,3],[31,28],[-23,19],[9,18],[31,11],[12,-11],[26,3],[16,31],[28,-15],[5,15],[27,5],[-18,12],[26,21],[-16,14],[-29,5],[-1,26],[-52,21],[2,19],[-19,10],[10,31]],[[1223,9303],[-16,-2],[-35,-30],[-41,-70],[-37,2],[-35,-53],[14,-92],[-35,-9],[-9,8],[-33,-74],[22,9],[7,20],[-6,-21],[55,-11],[-22,-35],[21,7],[-19,-37],[-13,-6],[-6,12],[-49,1],[-16,14],[-59,-68],[-11,28],[22,37],[14,-2],[-20,15],[12,15],[-53,-66],[-21,-40],[17,-12],[-7,-84],[-55,-64],[4,-41],[16,-8],[21,9],[13,-8],[-14,-62],[16,49],[27,18],[5,44],[13,2],[20,-45],[27,9],[21,-15],[-19,33],[30,28],[4,47],[-12,10],[14,84],[-19,2],[12,26],[34,6],[3,-18],[24,8],[-12,12],[67,99],[27,19],[0,29],[47,33],[-7,43],[28,9],[11,20],[52,-7],[-1,128],[-38,45]],[[748,8935],[16,13],[-21,15],[46,43],[-20,13],[40,26],[12,30],[-50,-3],[23,6],[22,27],[1,42],[36,51],[-25,22],[21,8],[-29,-6],[-13,12],[-42,1],[-22,21],[-57,-39],[1,-23],[-51,-99],[-10,-82],[-29,-19],[47,-30],[-9,-32],[64,-21],[49,24]],[[327,7974],[57,9],[5,40],[22,8],[-25,7],[22,10],[3,14],[-20,-2],[5,18],[-43,20],[-45,-17],[8,-24],[-22,-3],[2,-14],[-19,1],[5,-11],[33,2],[-7,-18],[19,-40]],[[1266,8942],[-36,-50],[21,-16],[46,35],[-7,11],[16,20],[56,-7],[7,12],[-21,33],[-26,8],[-56,-46]],[[1424,8699],[-29,-2],[-27,-15],[-13,-34],[97,38],[-21,0],[-7,13]],[[1194,8398],[-22,0],[13,-9],[-2,-70],[22,2],[9,19],[-13,18],[9,32],[-16,8]],[[1171,8855],[-36,-23],[0,-23],[65,32],[-23,23],[-6,-9]],[[553,7496],[11,-2],[18,24],[-40,25],[-15,-31],[26,-16]],[[684,7970],[-5,52],[-44,-35],[24,-17],[25,0]],[[1379,8828],[-14,-13],[5,-41],[33,33],[-24,21]],[[745,7926],[-9,5],[1,-8],[-15,0],[9,-30],[21,16],[-7,17]],[[346,3925],[-43,-25],[-21,-25],[3,-17],[61,67]],[[357,8200],[-8,19],[-12,-23],[10,-6],[10,10]],[[939,6599],[8,-9],[17,9],[-25,0]],[[1037,7305],[20,0],[-21,8],[1,-8]],[[1157,8252],[2,-11],[12,25],[-14,-14]],[[864,7898],[-12,-56],[21,-48],[-21,49],[15,62],[-3,-7]],[[714,8564],[9,7],[-18,-2],[9,-5]]]}");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(4), __webpack_require__(5)) :
  undefined;
}(this, (function (exports, $, Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(8);
            var content = __webpack_require__(9);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
// Exports
module.exports = exports;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_package_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _dist_package_js__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["bisect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["bisectLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["ascending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["bisector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["cross"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["descending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["deviation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["extent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["histogram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["thresholdFreedmanDiaconis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["thresholdScott"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["thresholdSturges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["mean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["median"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["permute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["quantile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["scan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["shuffle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["sum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["ticks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["tickStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["transpose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["variance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["zip"]; });

/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_2__["axisTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_2__["axisRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_2__["axisBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_2__["axisLeft"]; });

/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brush", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_3__["brush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushX", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_3__["brushX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushY", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_3__["brushY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushSelection", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_3__["brushSelection"]; });

/* harmony import */ var d3_chord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chord", function() { return d3_chord__WEBPACK_IMPORTED_MODULE_4__["chord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ribbon", function() { return d3_chord__WEBPACK_IMPORTED_MODULE_4__["ribbon"]; });

/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(196);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return d3_collection__WEBPACK_IMPORTED_MODULE_5__["nest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return d3_collection__WEBPACK_IMPORTED_MODULE_5__["set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return d3_collection__WEBPACK_IMPORTED_MODULE_5__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return d3_collection__WEBPACK_IMPORTED_MODULE_5__["keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return d3_collection__WEBPACK_IMPORTED_MODULE_5__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return d3_collection__WEBPACK_IMPORTED_MODULE_5__["entries"]; });

/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return d3_color__WEBPACK_IMPORTED_MODULE_6__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return d3_color__WEBPACK_IMPORTED_MODULE_6__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return d3_color__WEBPACK_IMPORTED_MODULE_6__["hsl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return d3_color__WEBPACK_IMPORTED_MODULE_6__["lab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return d3_color__WEBPACK_IMPORTED_MODULE_6__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return d3_color__WEBPACK_IMPORTED_MODULE_6__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return d3_color__WEBPACK_IMPORTED_MODULE_6__["gray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return d3_color__WEBPACK_IMPORTED_MODULE_6__["cubehelix"]; });

/* harmony import */ var d3_contour__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(203);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contours", function() { return d3_contour__WEBPACK_IMPORTED_MODULE_7__["contours"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contourDensity", function() { return d3_contour__WEBPACK_IMPORTED_MODULE_7__["contourDensity"]; });

/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return d3_dispatch__WEBPACK_IMPORTED_MODULE_8__["dispatch"]; });

/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return d3_drag__WEBPACK_IMPORTED_MODULE_9__["drag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragDisable", function() { return d3_drag__WEBPACK_IMPORTED_MODULE_9__["dragDisable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragEnable", function() { return d3_drag__WEBPACK_IMPORTED_MODULE_9__["dragEnable"]; });

/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(213);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["dsvFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["csvParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["csvParseRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["csvFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatBody", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["csvFormatBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["csvFormatRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatRow", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["csvFormatRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatValue", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["csvFormatValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["tsvParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["tsvParseRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["tsvFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatBody", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["tsvFormatBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["tsvFormatRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRow", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["tsvFormatRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatValue", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["tsvFormatValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoType", function() { return d3_dsv__WEBPACK_IMPORTED_MODULE_10__["autoType"]; });

/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(173);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeLinear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeQuad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeQuadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeQuadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeQuadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeCubic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeCubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeCubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeCubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easePoly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easePolyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easePolyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easePolyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeSin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeSinIn"]; });
