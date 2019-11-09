const {MapServiceImpl} = require('./Services/MapServiceImpl');

const georgeJSONObject = { "type": "FeatureCollection", "bbox": [23.352772, 42.656546, 23.357248, 42.658781], "features": [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.354889, 42.656882] }, "properties": { "osm_id": 639999956, "osm_type": 1, "distance": 17.73240524, "category_ids": { "564": { "category_name": "cafe", "category_group": "sustenance" } }, "osm_tags": { "smoking": "yes", "wheelchair": "yes" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.355191, 42.658781] }, "properties": { "osm_id": 166109705, "osm_type": 2, "distance": 197.00195623, "category_ids": { "292": { "category_name": "swimming_pool", "category_group": "leisure_and_entertainment" } }, "osm_tags": { "name": "\u0411\u0430\u0441\u0435\u0439\u043d \u0422\u0423 \u0421\u043e\u0444\u0438\u044f" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.353701, 42.657585] }, "properties": { "osm_id": 704602144, "osm_type": 1, "distance": 124.84291414, "category_ids": { "601": { "category_name": "parking", "category_group": "transport" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.354195, 42.657864] }, "properties": { "osm_id": 800256550, "osm_type": 1, "distance": 115.87064049, "category_ids": { "601": { "category_name": "parking", "category_group": "transport" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.353766, 42.657317] }, "properties": { "osm_id": 704602138, "osm_type": 1, "distance": 107.61702017, "category_ids": { "566": { "category_name": "fast_food", "category_group": "sustenance" } }, "osm_tags": { "smoking": "no" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.353537, 42.657018] }, "properties": { "osm_id": 89604120, "osm_type": 2, "distance": 120.92461278, "category_ids": { "282": { "category_name": "pitch", "category_group": "leisure_and_entertainment" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.354163, 42.657324] }, "properties": { "osm_id": 704602139, "osm_type": 1, "distance": 77.7674461, "category_ids": { "566": { "category_name": "fast_food", "category_group": "sustenance" } }, "osm_tags": { "smoking": "yes" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.355389, 42.657168] }, "properties": { "osm_id": 640011054, "osm_type": 1, "distance": 35.32592646, "category_ids": { "191": { "category_name": "atm", "category_group": "financial" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.354432, 42.657044] }, "properties": { "osm_id": 640011056, "osm_type": 1, "distance": 47.67887469, "category_ids": { "191": { "category_name": "atm", "category_group": "financial" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.354007, 42.657352] }, "properties": { "osm_id": 704602145, "osm_type": 1, "distance": 90.60460253, "category_ids": { "601": { "category_name": "parking", "category_group": "transport" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.357126, 42.657113] }, "properties": { "osm_id": 2349248299, "osm_type": 1, "distance": 173.715439, "category_ids": { "192": { "category_name": "bank", "category_group": "financial" } }, "osm_tags": { "opening_hours": "Mo-Fr 08:30-17:00", "website": "https://www.sgeb.bg/", "name": "Societe Generale \u0415\u043a\u0441\u043f\u0440\u0435\u0441\u0431\u0430\u043d\u043a" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.354441, 42.658667] }, "properties": { "osm_id": 170130255, "osm_type": 2, "distance": 189.58461044, "category_ids": { "282": { "category_name": "pitch", "category_group": "leisure_and_entertainment" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.355317, 42.657282] }, "properties": { "osm_id": 639999976, "osm_type": 1, "distance": 38.96380746, "category_ids": { "564": { "category_name": "cafe", "category_group": "sustenance" } }, "osm_tags": { "smoking": "yes" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.35489, 42.656546] }, "properties": { "osm_id": 315468410, "osm_type": 2, "distance": 52.82738962, "category_ids": { "157": { "category_name": "university", "category_group": "education" } }, "osm_tags": { "name": "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 - \u0421\u043e\u0444\u0438\u044f", "website": "http://www.tu-sofia.bg/" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.355622, 42.656985] }, "properties": { "osm_id": 640011061, "osm_type": 1, "distance": 50.07759815, "category_ids": { "192": { "category_name": "bank", "category_group": "financial" } }, "osm_tags": { "name": "\u041f\u043e\u0449\u0435\u043d\u0441\u043a\u0430 \u0431\u0430\u043d\u043a\u0430", "website": "https://www.postbank.bg/" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.357177, 42.657112] }, "properties": { "osm_id": 4395839798, "osm_type": 1, "distance": 177.84014507, "category_ids": { "191": { "category_name": "atm", "category_group": "financial" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.355638, 42.657161] }, "properties": { "osm_id": 640011059, "osm_type": 1, "distance": 53.92083686, "category_ids": { "191": { "category_name": "atm", "category_group": "financial" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.353426, 42.656698] }, "properties": { "osm_id": 161464860, "osm_type": 2, "distance": 134.6543723, "category_ids": { "564": { "category_name": "cafe", "category_group": "sustenance" } }, "osm_tags": { "null": null } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.353513, 42.65743] }, "properties": { "osm_id": 707684276, "osm_type": 1, "distance": 131.35806572, "category_ids": { "564": { "category_name": "cafe", "category_group": "sustenance" } }, "osm_tags": { "smoking": "yes" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.357248, 42.657541] }, "properties": { "osm_id": 315471959, "osm_type": 2, "distance": 192.51207253, "category_ids": { "157": { "category_name": "university", "category_group": "education" } }, "osm_tags": { "name": "\u0425\u0438\u043c\u0438\u043a\u043e\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u043d \u0438 \u043c\u0435\u0442\u0430\u043b\u0443\u0440\u0433\u0438\u0447\u0435\u043d \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442", "website": "http://uctm.edu/" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.354522, 42.656894] }, "properties": { "osm_id": 704602140, "osm_type": 1, "distance": 42.28164041, "category_ids": { "564": { "category_name": "cafe", "category_group": "sustenance" } }, "osm_tags": { "wheelchair": "yes", "smoking": "yes" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.352772, 42.65749] }, "properties": { "osm_id": 1734298680, "osm_type": 1, "distance": 191.15291773, "category_ids": { "206": { "category_name": "hospital", "category_group": "healthcare" } }, "osm_tags": { "name": "\u0411\u043e\u043b\u043d\u0438\u0446\u0430 \u0437\u0430 \u0440\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u0430 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0430 \u0421\u043e\u0444\u0438\u044f" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.353003, 42.657038] }, "properties": { "osm_id": 161464876, "osm_type": 3, "distance": 164.75150139, "category_ids": { "108": { "category_name": "hotel", "category_group": "accomodation" } }, "osm_tags": { "name": "\u0412\u0438\u0442\u043e\u0448\u0430 \u041f\u0430\u0440\u043a \u0425\u043e\u0442\u0435\u043b", "website": "http://www.vitoshaparkhotel.com/" } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [23.353214, 42.656758] }, "properties": { "osm_id": 707684265, "osm_type": 1, "distance": 150.11044066, "category_ids": { "192": { "category_name": "bank", "category_group": "financial" } }, "osm_tags": { "null": null } } }], "information": { "attribution": "openrouteservice.org | OpenStreetMap contributors", "version": "0.1", "timestamp": 1573304864, "query": { "request": "pois", "geometry": { "bbox": [[23.364005216059187, 42.64721717452798], [23.34601878394081, 42.66680882547202]], "geojson": { "type": "Point", "coordinates": [23.355012, 42.657013] }, "buffer": 200 } } } }

const TU_COORDINATES = [42.656790, 23.355149]

const generatePopUpMessage = (targetName = 'Target') => `<p>${targetName}</p>`

const map = L.map('mapid', {
	// options

}).setView(TU_COORDINATES, 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoidmFsa2EtaG9uZGEiLCJhIjoiY2sycmIxM2xqMDljNzNpbzN6d3RmYnBwOSJ9.L1NFHToyjfZ3q0O-PuE-Xw'
}).addTo(map);

/* Go to coordinates:
map.panTo([50, 30]);
*/

let currentMarker;
let clickedLatitude;
let clickedLongitude;

const asyncMethod = async () => {
	const data = await fetch('https://api.github.com/users/octocat').then(res => res.json())
	console.log(data);

}

asyncMethod()

const onMapClick = (e) => {
	if (currentMarker) {
		map.removeLayer(currentMarker);
	}
	clickedLatitude = e.latlng.lat
	clickedLongitude = e.latlng.lng
	currentMarker = L.marker([clickedLatitude, clickedLongitude]).addTo(map);

}
map.on('click', onMapClick);



const drawLine = (pointALan, pontALng, pointBLan, pointBLng, color = 'red') => {
	const pointA = new L.LatLng(pointALan, pontALng);
	const pointB = new L.LatLng(pointBLan, pointBLng);
	const pointList = [pointA, pointB];

	const polyline = new L.Polyline(pointList, {
		color: color,
		weight: 3,
		opacity: 0.5,
		smoothFactor: 1
	});
	polyline.addTo(map);
}
// drawLine(TU_COORDINATES[0], TU_COORDINATES[1], TU_COORDINATES[0], TU_COORDINATES[1] + 1)

const markerOnClick = ({latlng}) => {
	console.log(latlng);
	// {lat: 42.658781, lng: 23.355191}
	L.popup()
	.setLatLng([latlng.lat, latlng.lng])
	.setContent("What should I do now?")
	.openOn(map);
}

const drawMarker = (latitude, longitude) => L.marker([latitude, longitude]).on('click', markerOnClick).addTo(map);	

const drawPointsOfInterest = (points) => {
	const {features} = points
	features.forEach(feature => {
		const [longitude, latitude] = feature.geometry.coordinates; 
		drawMarker(latitude, longitude)
	})
}
drawPointsOfInterest(georgeJSONObject)

const coordinates = [
	{
		latitude: 41.656882,
		longitude: 23.354889,
	},
	{
		latitude: 44.658781,
		longitude: 20.355191,
	},
	{
		latitude: 45.653333,
		longitude: 23.355191,
	},
	{
		latitude: 46.653333,
		longitude: 30.355191,
	},
	{
		latitude: 47.653333,
		longitude: 23.355191,
	},

]

const drawRoute = (coordinates) => {
	for(let i = 0; i < coordinates.length - 1; i++) {
		const firstLatitude = coordinates[i].latitude;
		const firstLongitude = coordinates[i].longitude;
		const finalLatitude = coordinates[i+1].latitude;
		const finalLongitude = coordinates[i+1].longitude;		
		
		drawLine(firstLatitude, firstLongitude, finalLatitude, finalLongitude)
	}
}

drawRoute(coordinates)