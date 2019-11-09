(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * @class Represents a Map service with various functionalities.
 */
class MapService {

	constructor() {
		if (new.target === MapService)
			throw new Error('Cannot instantiate an interface directly.');
	}

	/**
	 * Gets a basic route between two points.
	 * @param {Array} start The coordinates of the start point.
	 * @param {Array} end The coordinates of the end point.
	 * @returns {Array} An array containing the coordinates of the route.
	 */
	async getDirectionsAsync(start, end) { throw new Error('Cannot invoke abstract method.'); }

	/**
	 * Gets the elevation of a point.
	 * @param {Array} point The coordinates of the point.
	 * @returns {Number} The elevation.
	 */
	async getElevationAsync(point) { throw new Error('Cannot invoke abstract method.'); }

	/**
	 * Gets the points of interest in the area surrounding a point.
	 * @param {Array} point The coordinates of the point.
	 * @param {Number} distance The square distance around the point in which to search.
	 * @returns {Array} An array containing the coordinates of the points of interest.
	 */
	async getPOIsAsync(point, distance) { throw new Error('Cannot invoke abstract method.'); }
}

exports.MapService = MapService;

},{}],2:[function(require,module,exports){
const {MapService} = require('./MapService');

/**
 * @class Represents an implementation of the MapService interface using the {@link https://openrouteservice.org/} API.
 * @interface MapService
 */
class MapServiceImpl extends MapService {
	static API_KEY = '5b3ce3597851110001cf6248d13ead77318046b39b7a00a922741de3';

	/**
	 * MapService.getDirectionsAsync override.
	 */
	async getDirectionsAsync(start, end) {
		const response = await new Promise(
			resolve => {
				var request = new XMLHttpRequest();
				request.open('GET', `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${MapServiceImpl.API_KEY}&start=${start[1]},${start[0]}&end=${end[1]},${end[0]}`);

				request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

				request.onload = (e) => {
					resolve(request.response);
				}

				request.onerror = (e) => {
					resolve(null);
				}

				request.send();
			}
		);

		return response;
	}

	/**
	 * MapService.getElevationAsync override.
	 */
	async getElevationAsync(point) {
		const response = await new Promise(
			resolve => {
				var request = new XMLHttpRequest();
				request.open('GET', `https://api.openrouteservice.org/elevation/point?api_key=${MapServiceImpl.API_KEY}&geometry=${point[1]},${point[0]}`);

				request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

				request.onload = (e) => {
					resolve(request.response);
				}

				request.onerror = (e) => {
					resolve(null);
				}

				request.send();
			}
		);

		return response;
	}

	/**
	 * MapService.getPOIsAsync override.
	 */
	async getPOIsAsync(point, distance) {
		const bbox = MapServiceImpl.calculateBBox(point, distance);
		const response = await new Promise(
			resolve => {
				var request = new XMLHttpRequest();
				request.open('POST', 'https://api.openrouteservice.org/pois');

				request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
				request.setRequestHeader('Content-Type', 'application/json');
				request.setRequestHeader('Authorization', MapServiceImpl.API_KEY);

				request.onload = (e) => {
					resolve(request.response);
				}

				request.onerror = (e) => {
					resolve(null);
				}

				var body = `{"request":"pois","geometry":{"bbox":[[${[bbox[0][1], bbox[0][0]]}],[${[bbox[1][1], bbox[1][0]]}]],"geojson":{"type":"Point","coordinates":[${[point[1], point[0]]}]},"buffer":200}}`;

				request.send(body);
			}
		);

		return response;
	}

	/**
	 * Calculates a square bounding box with a given offset distance around a point.
	 * @param {Array} point The coordinate of the point.
	 * @param {Number} distance The offset distance in kilometers.
	 * @returns {Array} An array containing the coordinates of the south-west (bottom-left) and the north-east (top-right) corner of the bounding box.
	 */
	static calculateBBox(point, distance) {
		const R = 6371; // radius of the Earth in km

		var lon = point[0];
		var lat = point[1];

		return [
			[lon - MapServiceImpl.toDegrees(distance / R / Math.cos(MapServiceImpl.toRadians(lat))),
			lat + MapServiceImpl.toDegrees(distance / R)],

			[lon + MapServiceImpl.toDegrees(distance / R / Math.cos(MapServiceImpl.toRadians(lat))),
			lat - MapServiceImpl.toDegrees(distance / R)]
		];
	}

	/**
	 * Helper function to convert degrees to radians.
	 */
	static toRadians(degrees) {
		return degrees * (Math.PI / 180);
	}

	/**
	 * Helper function to convert radians to degrees.
	 */
	static toDegrees(radians) {
		return radians * ( 180 / Math.PI);
	}
}

exports.MapServiceImpl = MapServiceImpl;

},{"./MapService":1}],3:[function(require,module,exports){
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

// currentLocationCoordinates = currentLocationCoordinates || TU_SOFIA_COORDINATES;


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

},{"./Services/MapServiceImpl":2}]},{},[3]);
