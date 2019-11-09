(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const TU_COORDINATES = [42.656790, 23.355149]

const generatePopUpMessage = (targetName = 'Target') => `<p>${targetName}</p>`

const mymap = L.map('mapid', {
	// options
	
}).setView(TU_COORDINATES, 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoidmFsa2EtaG9uZGEiLCJhIjoiY2sycmIxM2xqMDljNzNpbzN6d3RmYnBwOSJ9.L1NFHToyjfZ3q0O-PuE-Xw'
}).addTo(mymap);

/* Go to coordinates:
map.panTo([50, 30]);
*/

let currentMarker;
let clickedLatitude;
let clickedLongitude;

const onMapClick = (e) => {
	if (currentMarker) { 
        mymap.removeLayer(currentMarker); 
	}
	clickedLatitude  = e.latlng.lat
	clickedLongitude = e.latlng.lng
    currentMarker = L.marker([clickedLatitude , clickedLongitude]).addTo(mymap);
	
}
mymap.on('click', onMapClick);



const drawLine = (pointALan, pontALng, pointBLan, pointBLng, color='red') => {
	const pointA = new L.LatLng(pointALan, pontALng);
	const pointB = new L.LatLng(pointBLan, pointBLng);
	const pointList = [pointA, pointB];

const polyline = new L.Polyline(pointList, {
		color: color,
		weight: 3,
		opacity: 0.5,
		smoothFactor: 1
	});
	polyline.addTo(mymap);
}
drawLine(TU_COORDINATES[0], TU_COORDINATES[1], TU_COORDINATES[0], TU_COORDINATES[1]+ 1)

},{}]},{},[1]);
