const { MapServiceImpl } = require('./Services/MapServiceImpl');
const TU_SOFIA_COORDINATES = [42.656790, 23.355149];

let currentLocationCoordinates;
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(({ coords }) => {

		const { latitude, longitude } = coords;
		currentLocationCoordinates = [latitude, longitude];
		currentLocationCoordinates = currentLocationCoordinates || TU_SOFIA_COORDINATES;
		main(currentLocationCoordinates)
	});
}

function main(currentLocationCoordinates) {
	const service = new MapServiceImpl();

	const map = L.map('mapid', {
		// options
	}).setView(currentLocationCoordinates, 16);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoidmFsa2EtaG9uZGEiLCJhIjoiY2sycmIxM2xqMDljNzNpbzN6d3RmYnBwOSJ9.L1NFHToyjfZ3q0O-PuE-Xw'
	}).addTo(map);

	let currentDrawnPolyLine;
	const markerOnClick = async ({ latlng }) => {
		var elevationJSON = await service.getElevationAsync([latlng.lat, latlng.lng]);
		var elevation = JSON.parse(elevationJSON).geometry.coordinates[2];
		L.popup()
			.setLatLng([latlng.lat, latlng.lng])
			.setContent(elevation.toString().concat('m'))
			.openOn(map);

		var coords = [];
		var directionsJSON = await service.getDirectionsAsync(currentLocationCoordinates, [latlng.lat, latlng.lng]);
		var directions = JSON.parse(directionsJSON);
		for (var coord of directions.features[0].geometry.coordinates){
			coords.push([coord[1], coord[0]]);
		}
		
		currentDrawnPolyLine && map.removeLayer(currentDrawnPolyLine);

		currentDrawnPolyLine = new L.Polyline(coords, {
			color: 'red',
			weight: 3,
			opacity: 0.5,
			smoothFactor: 1
		});
		
		currentDrawnPolyLine.addTo(map);
		
	};

	const drawMarker = (latitude, longitude) => L.marker([latitude, longitude]).on('click', markerOnClick).addTo(map);

	const initPOIs = async () => {
		var responseJSON = await service.getPOIsAsync(currentLocationCoordinates, 1);
		var features = JSON.parse(responseJSON).features;
		for (var feature of features)
			drawMarker(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
	};

	initPOIs();
}
