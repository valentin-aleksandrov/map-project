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
