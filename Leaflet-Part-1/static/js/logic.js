// Import GEOJSON data from: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

// Create Tile Layer with open street map
var baseLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors, © CartoDB'
});

// Create a variable to hold a layer group
var groupOne = new L.layerGroup()

// Create Map centered on the center of the Earth
var earthquakeMap = L.map('map',{
    center: [40,10],
    zoom: 3,
    layers: [baseLayer, groupOne]
});

// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Get the data with D3 and lot it to the console
d3.json(queryUrl).then (function(data) {
    console.log(data);

    function assignColor(depth) {
        var color
        if (depth >= 90)
            color = "red";
        else if (depth >= 70)
            color = "orange";
        else if (depth >= 50)
            color = "yellow";
        else if (depth >= 30)
            color = "green";
        else if (depth >= 10)
            color = "purple";
        else color = "blue";

        return color
    }
    
    function generateStyling(feature) {
        return {
            fillColor: assignColor(feature.geometry.coordinates[2]),
            fillOpacity: .75,
            color: "black",
            radius: feature.properties.mag*3.5
        }
    }

    L.geoJson(data, {
        pointToLayer: function(feature, coord) {
            return L.circleMarker(coord)
        },
        style: generateStyling,
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h3>${feature.properties.place}</h3>
            <hr>
            <p>${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p>
            <hr>
            <p>Depth: ${feature.geometry.coordinates[2]}`)
        }
    }
        ).addTo(groupOne)

    // Create a control layer to add a legend
    var legend = L.control({
        position: "bottomright"
    })
    // Add data to legend
    legend.onAdd = function() {
        let div = L.DomUtil.create("div", "legend")
        // Write the inner HTML to the rectangular legend with the color and depth color scale
        div.innerHTML = `<div style="background-color:${assignColor(90)}"></div> 90+
        <div style="background-color:${assignColor(70)}"></div> 70-89
        <div style="background-color:${assignColor(50)}"></div> 50-69
        <div style="background-color:${assignColor(30)}"></div> 30-49
        <div style="background-color:${assignColor(10)}"></div> 10-29
        <div style="background-color:${assignColor(0)}"></div> <10`
        return div
    }
    // Add legend to Map
    legend.addTo(earthquakeMap)
});

