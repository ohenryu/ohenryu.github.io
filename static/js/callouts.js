//Set initial map view location
var map = L.map('mapid').setView([49.420600, -123.104069], 11);

//Set basemap
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery &copy <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    minZoom: 9,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib2hlbnJ5dSIsImEiOiJja2d5ZmtrcXUwMmhzMndtcG9iemw5Z2RkIn0.FUtlIyXCOOjcTqdxWjjPzA'
}).addTo(map);

var heat = L.heatLayer([
  [49.386521,-122.939759],
  [49.385893,-123.209953],
  [49.400362,-123.182937],
  [49.371867,-123.085797],
  [49.336868,-122.974535],
  [49.384775,-122.944911],
  [49.391885,-122.943899],
  [49.406359,-123.213241],
  [49.400515,-123.182939],
  [49.411169,-123.08915],
  [49.411001,-123.207958],
  [49.427682,-123.207597],
  [49.410526,-123.207991],
  [49.371951,-123.085807],
  [49.403154,-123.081471],
  [49.409996,-123.210262],
  [49.378573,-123.051604],
  [49.381311,-123.056075],
  [49.488368,-123.236484],
  [49.37888,-122.950061],
  [49.408069,-123.029377],
  [49.363427,-123.159486],
  [49.373096,-122.962508],
  [49.447984,-123.197944],
  [49.382205,-123.039411],
  [49.370078,-122.957741],
  [49.380194,-122.921741],
  [49.381311,-123.240003],
  [49.430124,-122.92767],
  [49.475751,-123.201033],
  [49.409493,-123.091523],
  [49.41438,-123.032515],
  [49.497065,-123.196763],
  [49.374326,-122.941609],
  [49.461765,-123.17933],
  [49.457525,-123.186158],
  [49.414105,-123.067785],
  [49.373208,-122.970001],
  [49.409493,-123.091523],
  [49.449379,-123.031104],
  [49.474287,-123.20114],
  [49.406896,-123.089717],
  [49.410136,-123.091022],
  [49.456688,-123.186374],
  [49.425211,-123.000368],
  [49.416278,-123.062165],
  [49.427612,-123.206528],
  [49.404662,-123.099132],
  [49.419363,-123.043209],
  [49.447314,-123.213572],
  [49.457525,-123.186158],
  [49.390335,-122.943541],
  [49.372593,-123.083229],
  [49.484465,-123.191767],
  [49.475974,-123.199378],
  [49.359346,-122.966216],
  [49.408823,-123.207478],
  [49.383099,-123.249274],
  [49.364433,-123.071591],
  [49.376673,-123.259751],

], {
  radius: 25,
  maxZoom: 16,
  minOpacity: 0.5,
  max: 1,
  blur: 20,
  gradient: {
      0: "#000000",
      0.2: "#570000",
      0.4: "blue",
      0.6: "lime",
      0.8: "#ffff00",
      1.0: "red" , // note the string of the key
  }
}).addTo(map);

