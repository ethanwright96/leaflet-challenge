// Import GEOJSON data from: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Get the data with D3 and lot it to the console
d3.json(queryUrl, function(data) {
    console.log(data)
    createFeatures(data.features);
});
