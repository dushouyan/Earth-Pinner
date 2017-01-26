// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function () { 


var colors = ["rgba(52, 165, 111, .5)", "rgba(236, 43, 43, .5)", "rgba(28, 28, 241, .5)", "rgba(0, 0, 0, .5)"]
var placeColor = document.getElementsByClassName('place_color');


        placeColor.addEventListener('mouseenter', function () {
          colorNumber = [Math.floor(Math.random() * colors.length)];
            placeColor.style.backgroundColor = colors[colorNumber];
})
        placeColor.addEventListener('mouseleave', function () {
            placeColor.style.backgroundColor = 'transparent';
})


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
              featureType: 'administrative.country',
              elementType: 'geometry.fill',
              stylers: [{color: '#FFFFFF'}]
            },
            { 
              featureType: 'administrative.country',
              elementType: 'geometry.stroke',
              stylers: [{color: '#FFFFFF'}]
            },
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
              stylers: [{color: '#D3D3D3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{color: '#D3D3D3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#D3D3D3'}]
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


