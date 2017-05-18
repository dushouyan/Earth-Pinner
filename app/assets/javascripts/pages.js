// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


//Change Nav From Display 'None' to Display 'Block' on click


$(document).ready(function () { 

var menuIcon = document.getElementsByClassName('menu-icon')[0];
var menuMain = document.getElementsByClassName('menu-main')[0];
var fullPageSection = document.getElementsByClassName('full_page_section');
var fullPageWrapper = document.getElementsByClassName('full_page_wrapper')[0];
var travelLinks = document.getElementsByClassName('travel_link');
var menuItems = menuMain.children;
//var hash = window.location.hash.slice(1)

var height = window.getComputedStyle(menuMain, null).getPropertyValue('height');

console.log(height)
// Changes Nav Bar from Display None to Display Block
function showNavBar () {
	if (menuIcon) {
	menuIcon.addEventListener('click', function () {
		var height = window.getComputedStyle(menuMain, null).getPropertyValue('height');
			if (height === '0px') {
				menuMain.style.height = '255px';
			}

			else if (height === '255px') {
				menuMain.style.height = '0px';
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
				console.log(height)
				$('.instagram-link').html('Instagram');
				$('.logo').eq(1).html('Home')
			}
	})

	$(window).resize(function () {
		var detectWidthTwo = window.innerWidth;
			if(detectWidthTwo <= 640) {
				$('.logo').eq(1).html('Home');
				$('.menu-main').css('display', 'block')
				$('.menu-main').css('height', '0px');
			}

			else if (detectWidthTwo > 640) {
				$('.menu-main').css('display', 'flex');
				$('.menu-main').css('height', '70px');
				$('.logo').eq(1).html('Earth Pinner');
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