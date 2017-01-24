// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function () { 

var latitude = document.getElementsByClassName('latitude')[0].innerHTML;
var longitude = document.getElementsByClassName('longitude')[0].innerHTML;
var latitude = parseFloat(latitude)
var longitude = parseFloat(longitude)


console.log(latitude)
console.log(longitude)


})


 window.initMap = function () {
        var uluru = {lat: latitude, lng: longitude };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

