// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function () { 

var latitude = document.getElementsByClassName('latitude')[0].innerHTML;
var longitude = document.getElementsByClassName('longitude')[0].innerHTML;
var latitude = parseFloat(latitude)
var longitude = parseFloat(longitude)

window.initMap = function () {
        var uluru = {lat: latitude, lng: longitude };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru,
          styles: [
            {
              featureType: 'landscape.natural.landcover',
              elementType: 'geometry.fill',
              stylers: [{color: '#34A56F'}]
            },
               {
              featureType: 'landscape.natural.terrain',
              elementType: 'geometry.fill',
              stylers: [{color: '#FFFAFA'}]
            },
            {
              featureType: 'road.local',
              elementType: 'geometry.fill',
              stylers: [{color: '#D3D3D3'}]
            },
            {
              featureType: 'road.local',
              elementType: 'geometry.stroke',
              stylers: [{color: '#191919'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{color: '#D3D3D3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#191919'}]
            },
            { 
              featureType: 'poi.park',
              elementType: 'geometry.fill',
              stylers: [{color: '#7CFC00'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#00E5EE'}]
            },
          
          ]
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


})


