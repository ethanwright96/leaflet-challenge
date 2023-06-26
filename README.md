# USGS Earthquake Data Visualization

This project aims to visualize earthquake data provided by the United States Geological Survey (USGS) using Leaflet, a JavaScript library for interactive maps. The visualization will help educate the public and government organizations about the Earth's seismic activity and its impact on our planet.

## Background

The United States Geological Survey (USGS) is responsible for providing scientific data on natural hazards, ecosystem health, climate change, and land-use change. They collect a massive amount of earthquake data from around the world daily but lack a meaningful way to display it. This project aims to develop a visualization tool to represent the USGS earthquake data effectively.

## Part 1: Create the Earthquake Visualization

### Instructions

1. Create a new repository called `leaflet-challenge` for this project.
2. Clone the repository to your local machine.
3. Inside the local repository, create two directories: `Leaflet-Part-1` and `Leaflet-Part-2`.
4. Add all the necessary HTML and JavaScript files for this challenge.
5. Push the changes to GitHub.

### Earthquake Visualization

To visualize the earthquake dataset, follow these steps:

1. Obtain the dataset: The USGS provides earthquake data in various formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize. You can select "All Earthquakes from the Past 7 Days" or any other dataset of your choice.
2. Click on the dataset to view its JSON representation. Copy the URL of the JSON data.
3. Import and visualize the data using Leaflet:
   - Use Leaflet to create a map and plot all the earthquakes from the chosen dataset based on their longitude and latitude.
   - Customize the data markers to reflect the earthquake magnitude (size) and depth (color). Larger markers should represent earthquakes with higher magnitudes, and darker colors should indicate greater depths.
   - Include popups that provide additional information about each earthquake when its associated marker is clicked.
4. Create a legend to provide context for the map data.

The resulting visualization should resemble the map shown below:

![Earthquake Visualization](images/earthquake_visualization.png)

## Part 2: Gather and Plot More Data (Optional)

In this optional part, you can challenge yourself by plotting a second dataset to illustrate the relationship between tectonic plates and seismic activity. The dataset for tectonic plates can be found [here](https://github.com/fraxen/tectonicplates).

### Instructions

1. Pull in the tectonic plates dataset and visualize it alongside the original earthquake data.
2. Place each dataset into separate overlays that can be turned on and off independently.
3. Add layer controls to the map, allowing users to toggle between different base maps and overlays.

The resulting visualization should resemble the map shown below:

![Advanced Earthquake Visualization](images/advanced_earthquake_visualization.png)

## Conclusion

By visualizing earthquake data using Leaflet, we can effectively communicate important information about seismic activity to the public and government organizations. This project provides an opportunity to explore and understand the impacts of earthquakes on our planet, making it easier to educate others and advocate for necessary actions.

Feel free to contribute to this project by adding additional features, improving the visualization, or exploring other datasets related to earthquakes and tectonic plates. Together, we can create a more informed and aware society.
