const {MapService} = require('./MapService');

/**
 * @class Represents an implementation of the MapService interface using the {@link https://openrouteservice.org/} API.
 * @interface MapService
 */
class MapServiceImpl extends MapService {
	static API_KEY = '';

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
