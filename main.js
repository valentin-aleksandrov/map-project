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
