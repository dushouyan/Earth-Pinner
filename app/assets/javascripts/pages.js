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
		var path = window.location.pathname
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

/*
function setfullPageHeight() {
	return function () {
		if(fullPageWrapper) {
			var detectHeight = window.innerHeight;
			for(var i = 0; i < fullPageSection.length; i++) {
				fullPageSection[i].style.height = detectHeight + 'px';
			}
		}
	}
}

function setActiveClass() {
	var detectHeight = -Math.abs(window.innerHeight);
	if (hash == "") {
		fullPageSection[0].classList.add('active')
		//fullPageWrapper.style.transform = 'translate(0, 0, 0)';
	}

	else {
		for(var i = 0; i <= fullPageSection.length; i++) {
			var downHeight = ((i + 1) * detectHeight) + 'px'
			if (fullPageSection[i].id === hash) {
				fullPageSection[i].classList.add('active');
				//fullPageWrapper.style.transform = 'translate3d(0,' + downHeight + ', 0)';
				break
		}
	} 
}

}
setActiveClass()
*/
/*
document.addEventListener("keydown", function(event) {
	var d = event.which 
	var detectHeight = -Math.abs(window.innerHeight);
		if (d === 40) {
			for(var i = 0; i <= fullPageSection.length; i++) {
				if(fullPageSection[i].classList.contains('active') && i != (fullPageSection.length - 1)) {
						//window.location.href = '/plan-your-trip/#' + fullPageSection[i].nextElementSibling.id
						var downHeight = ((i + 1) * detectHeight) + 'px'
						fullPageSection[i].classList.remove('active')
						fullPageSection[i].nextElementSibling.classList.add('active')
						fullPageWrapper.style.transform = 'translate3d(0,' + downHeight + ', 0)';
						break
					}
			}
		}
		
		else if (d === 38) {
			for(var i = 1; i < fullPageSection.length; i++) {
				if(fullPageSection[i].classList.contains('active')) {
					//window.location.href = '/plan-your-trip/#' + fullPageSection[i].previousElementSibling.id
					var upHeight = -Math.abs(detectHeight * (i - 1)) + 'px';
					fullPageSection[i].classList.remove('active')
					fullPageSection[i].previousElementSibling.classList.add('active')
					fullPageWrapper.style.transform = 'translate3d(0,' + upHeight + ',0)';
					break
				}
			}
		}
})


window.onload = setfullPageHeight();
window.onresize = setfullPageHeight();

*/

/*
	for(var x = 0; x < fullpageSection.length; x++) {
		(function (x) {
			var transY = -Math.abs(x * detectHeight) + 'px';
				fullpageWrapper.addEventListener('scroll', function () {
					fullPageWrapper.style.transform = 'translate3d(0,' + transY + ', 0)';
				}, false);
		})(x); 
	}
}*/



})