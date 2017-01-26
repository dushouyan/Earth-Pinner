// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function () { 


var colorsArray = ["rgba(52, 165, 111, .5)", "rgba(236, 43, 43, .5)", "rgba(28, 28, 241, .5)", "rgba(0, 0, 0, .5)", "rgba(245, 249, 5, .5)"]

function changeColor() {
  var thumbsGet = document.getElementsByClassName('place_color');
      for (var i = 0; i < thumbsGet.length; i++) {
        thumbsGet[i].addEventListener('mouseenter', function () {
          colorNumber = [Math.floor(Math.random() * colorsArray.length)];
            this.style.backgroundColor = colorsArray[colorNumber];
})

        thumbsGet[i].addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'transparent';
})
}
}

changeColor()

})


