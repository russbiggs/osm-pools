const fs = require('fs'),
    centroid = require('@turf/centroid'),
    helpers = require('@turf/helpers');

fs.readFile('./data/pools.geojson', 'utf8', function(err, data) {
    points = []
    let features = JSON.parse(data).features;
    features.forEach(function(feature) {
        let point = centroid(feature)
        points.push(point)
    }, this);
    let collection = helpers.featureCollection(points);
    fs.writeFile('./data/points.geojson', JSON.stringify(collection), function() {
        console.log('done');
    })
});