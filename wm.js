// script.js
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

var popup = document.getElementById('popup');

L.marker([51.5, -0.09]).addTo(map).on('click', function() {
  popup.style.display = 'block';
}).bindPopup('Location Name').openPopup();