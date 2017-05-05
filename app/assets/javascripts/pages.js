// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


//Change Nav From Display 'None' to Display 'Block' on click


$(document).ready(function () { 

var menuIcon = document.getElementsByClassName('menu-icon')[0];
var menuMain = document.getElementsByClassName('menu-main')[0];
var fullPageSection = document.getElementsByClassName('full_page_section');
var fullPageWrapper = document.getElementsByClassName('full_page_wrapper')[0];
var travelLinks = document.getElementsByClassName('travel_link');
//var hash = window.location.hash.slice(1)


// Changes Nav Bar from Display None to Display Block
function showNavBar () {
	if (menuIcon) {
	menuIcon.addEventListener('click', function () {
		var displayStyle = window.getComputedStyle(menuMain, null).getPropertyValue('display')
			if (displayStyle === 'none') {
				menuMain.style.display = 'block'
			}

			else if (displayStyle === 'block') {
				menuMain.style.display = 'none'
			}
		})
	}
}

showNavBar() 

//Fix some changes for better looking display in Mobile
function mobileDisplay () {
	$(window).load(function () {
		var detectWidthOne = window.innerWidth;
			if (detectWidthOne <= 640) {
				$('.instagram-link').html('Instagram');
				$('.logo').eq(1).html('Home')
			}
	})

	$(window).resize(function () {
		var detectWidthTwo = window.innerWidth;
			if(detectWidthTwo <= 640) {
				$('.menu-main').css('display', 'none');
				$('.logo').eq(1).html('Home')
			}
			else if (detectWidthTwo > 640) {
				$('.menu-main').css('display', 'flex')
				$('.logo').eq(1).html('Earth Pinner')
			}
	})

}

mobileDisplay()


$(window).on('scroll', function () {
	var pageY = window.pageYOffset;
		if(pageY > 500) {
			$('.glyphicon-hand-up').css('display', 'inline-block')
		}

		else if (pageY < 500) {
			$('.glyphicon-hand-up').css('display', 'none') 
		}
});


$('.glyphicon-hand-up').on('click', function () {
	 $("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
}) 


})