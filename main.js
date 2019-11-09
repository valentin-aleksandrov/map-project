console.log('Main.js');
const generatePopUpMessage = (targetName = 'Target') => `<p>${targetName}</p>`


const mymap = L.map('mapid', {
	// options
	
}).setView([42.657, 23.352], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoidmFsa2EtaG9uZGEiLCJhIjoiY2sycmIxM2xqMDljNzNpbzN6d3RmYnBwOSJ9.L1NFHToyjfZ3q0O-PuE-Xw'
}).addTo(mymap);

/* Go to coordinates:
map.panTo([50, 30]);
*/




// get coordinates on mouse click
const onMapClick = (e) => {
	
	const lat = e.latlng.lat
	const lng = e.latlng.lng
	console.log(lat, lng);
	
	
	L.marker([lat, lng]).addTo(mymap);
}
mymap.on('click', onMapClick);