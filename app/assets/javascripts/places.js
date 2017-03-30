// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () { 

var colorsArray = ["rgba(236, 43, 43, .5)", "rgba(28, 28, 241, .5)", "rgba(245, 249, 5, .5)", "rgba(255, 69, 0, .5)", "rgba(50, 205, 50, .5)", "rgba(102, 51, 153, .5)", "rgba(173, 216, 230, .5)",]

//Changes Overlay Colors of Places while hovering

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

$('.places_form_input').each(function(index) {
	$('.places_form_input').eq(index).focus(function () {
		$('.places_form_label').eq(index).css('color', 'rgb(52, 165, 111)')
	})
})

$('.places_form_input').each(function(index) {
	$('.places_form_input').eq(index).blur(function () {
		$('.places_form_label').eq(index).css('color', 'black')
	})
})

//Function for rating experiences/unfills stars then refills

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

//Hide Experiences//GoForward//GoBack Functions
var allExperiences = document.getElementsByClassName('experiences');
var pageBack = document.getElementsByClassName('experience_page')[0];
var pageForward = document.getElementsByClassName('experience_page')[1];
pageForward.addEventListener('click', goForward)
pageBack.addEventListener('click', goBack)
var reviewIndex = 0
var byFive = 5

function hideExperiences() {
	for (var v = 0; v < allExperiences.length; v++) {
			allExperiences[v].style.display = "none"
		} //hides all experiences
}

function goForward() {
	if (byFive < allExperiences.length) {
		hideExperiences()
		for (reviewIndex; reviewIndex < byFive; reviewIndex++) {
			allExperiences[reviewIndex].style.display = "block"
		}
		byFive = byFive + 5 //increments experiences by
	}
	else if (byFive >= allExperiences.length) {
		hideExperiences()
		for (reviewIndex; reviewIndex < allExperiences.length; reviewIndex++) {
			allExperiences[reviewIndex].style.display = "block"
		}
		reviewIndex = byFive //shows remaining experiences, removeEventListner	
		byFive = byFive + 5
		pageForward.removeEventListener('click', goForward)
	}
}

function goBack() {
	if (reviewIndex > 5 && reviewIndex < allExperiences.length) {
		hideExperiences()
		reviewIndex = reviewIndex - 10
		byFive = byFive - 10
		goForward()		
	}
	else if (reviewIndex > 5 && reviewIndex > allExperiences.length) {
		hideExperiences()
		pageForward.addEventListener('click', goForward) //event listener is readded if 
		reviewIndex = reviewIndex - 10					//user goes back and index > all			
		byFive = byFive - 10
		goForward() 
	}

}

goForward()

})


/*
 
//Simplier Function For Filled Stars. Heroku won't allow let variable for some reason;

var stars = document.getElementsByClassName('fillstar');
var starIndex = 0

function starSystem () {
	for (let index = 0; index < stars.length; index++) {
		stars[index].addEventListener('click', function() {
			starIndex = index; 
			unfilledStars();
			filledStars();
		})
	};
}
starSystem()
function filledStars () {
	for (var x = 0; x <= starIndex; x++) {
		stars[x].classList.add('filled');
	};
}
function unfilledStars() {
	for (var x = 0; x < stars.length; x++) {
		stars[x].classList.remove('filled')
	}
}
*/



