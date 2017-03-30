// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


//Change Nav From Display 'None' to Display 'Block' on click


$(document).ready(function () { 

var menuIcon = document.getElementsByClassName('menu-icon')[0];
var menuMain = document.getElementsByClassName('menu-main')[0];
var detectWidth = window.innerWidth;
var currentPage = window.location.href;

function showNavBar () {
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

showNavBar() 

function mobileDisplay () {
	if(detectWidth <= 600) {
		$('#sign_out').unwrap('<ul></ul>');
		$('#wrap').wrap('<li></li>');
		$('.re-wrap').unwrap('<li></li>');
		$('.instagram-link').html('Instagram');
	}

	else if(detectWidth > 600 && currentPage === 'http://www.earthpinner.com') {
		$('.logo').addClass('writelogo')
	}
}

mobileDisplay()


})