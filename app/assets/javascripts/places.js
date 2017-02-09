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

$('.fillstar').eq(0).on('click', function() {
	noStars()
	$(this).addClass('filled')	
})


$('.fillstar').eq(1).on('click', function() {
	noStars()
	$('.fillstar').slice(0,2).addClass('filled')	
})


$('.fillstar').eq(2).on('click', function() {
	noStars()
	$('.fillstar').slice(0,3).addClass('filled')		
})


$('.fillstar').eq(3).on('click', function() {
	noStars()
	$('.fillstar').slice(0,4).addClass('filled')			
})


$('.fillstar').eq(4).on('click', function() {
	noStars()
	$('.fillstar').slice(0,5).addClass('filled')
})

function noStars () {
$('.fillstar').each(function() {
	$( this ).removeClass('filled')
});
}

counter = 500
$('.place_display').each(function() {
	counter = counter + 200
	$( this ).fadeIn(counter);
});






/*
var placeDisplay = document.getElementsByClassName('place_display');
i = 0

function displayPlace() {
	setTimeout(function () {
		placeDisplay[i].style.display = "block";
		i++;
		if (i < placeDisplay.length) {
			displayPlace()
		}
	}, 200)
}

displayPlace()



var stars = document.getElementsByClassName('fillstar');
console.log(stars)





function starSystem () {
	for (var i = 0; i < stars.length; i++) {
		stars[i].addEventListener('click', function() {
			console.log(this)
			unfilledStars();
			filledStars();
		})
	};
}

starSystem()


function filledStars () {
	for (var i = 0; i < 2; i++) {
		stars[i].classList.add('filled');
	};
}


function unfilledStars() {
	for (var i = 0; i < stars.length; i++) {
		stars[i].classList.remove('filled')
	}
}*/


})

