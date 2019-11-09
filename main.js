const {MapServiceImpl} = require('./Services/MapServiceImpl');
const TU_SOFIA_COORDINATES = [42.656790, 23.355149];

const service = new MapServiceImpl();

const map = L.map('mapid', {
	// options
}).setView(TU_SOFIA_COORDINATES, 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoidmFsa2EtaG9uZGEiLCJhIjoiY2sycmIxM2xqMDljNzNpbzN6d3RmYnBwOSJ9.L1NFHToyjfZ3q0O-PuE-Xw'
}).addTo(map);

const markerOnClick = async ({latlng}) => {
	var elevationJSON = await service.getElevationAsync([latlng.lat, latlng.lng]);
	var elevation = JSON.parse(elevationJSON).geometry.coordinates[2];
	L.popup()
	.setLatLng([latlng.lat, latlng.lng])
	.setContent(elevation.toString().concat('m'))
	.openOn(map);

	var coords = [];
	var directionsJSON = await service.getDirectionsAsync(TU_SOFIA_COORDINATES, [latlng.lat, latlng.lng]);
	var directions = JSON.parse(directionsJSON);
	for (var coord of directions.features[0].geometry.coordinates)
		coords.push([coord[1], coord[0]]);

	var polyline = new L.Polyline(coords, {
		color: 'red',
		weight: 3,
		opacity: 0.5,
		smoothFactor: 1
	});
	polyline.addTo(map);
};

const drawMarker = (latitude, longitude) => L.marker([latitude, longitude]).on('click', markerOnClick).addTo(map);	

const initPOIs = async () => {
	var responseJSON = await service.getPOIsAsync(TU_SOFIA_COORDINATES, 1);
	var features = JSON.parse(responseJSON).features;
	for (var feature of features)
		drawMarker(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
};

initPOIs();

// let currentMarker;
// let clickedLatitude;
// let clickedLongitude;

// const onMapClick = (e) => {
// 	if (currentMarker) {
// 		map.removeLayer(currentMarker);
// 	}
// 	clickedLatitude = e.latlng.lat;
// 	clickedLongitude = e.latlng.lng;
// 	currentMarker = L.marker([clickedLatitude, clickedLongitude]).addTo(map);

// }
// map.on('click', onMapClick);

// const drawLine = (pointALan, pontALng, pointBLan, pointBLng, color = 'red') => {
// 	const pointA = new L.LatLng(pointALan, pontALng);
// 	const pointB = new L.LatLng(pointBLan, pointBLng);
// 	const pointList = [pointA, pointB];

// 	const polyline = new L.Polyline(pointList, {
// 		color: color,
// 		weight: 3,
// 		opacity: 0.5,
// 		smoothFactor: 1
// 	});
// 	polyline.addTo(map);
// }

// const drawRoute = (coordinates) => {
// 	for(let i = 0; i < coordinates.length - 1; i++) {
// 		const firstLatitude = coordinates[i].latitude;
// 		const firstLongitude = coordinates[i].longitude;
// 		const finalLatitude = coordinates[i+1].latitude;
// 		const finalLongitude = coordinates[i+1].longitude;		
		
// 		drawLine(firstLatitude, firstLongitude, finalLatitude, finalLongitude);
// 	}
// }

// drawRoute(coordinates);