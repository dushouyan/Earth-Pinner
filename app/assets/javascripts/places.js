// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () { 

var colorsArray = ["rgba(236, 43, 43, .5)", "rgba(28, 28, 241, .5)", "rgba(245, 249, 5, .5)", "rgba(255, 69, 0, .5)", "rgba(50, 205, 50, .5)", "rgba(102, 51, 153, .5)", "rgba(173, 216, 230, .5)",]

//Changes Overlay Color of Places to random color while hovering

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

//Change Color of Input forms on Focus
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


var fileInput = document.getElementById('place_avatar');
var fileDisplay = document.getElementById('file_display');

//The change event is sent to an element when its value changes. This event is limited to
//<input> elements, <textarea> boxes and <select> elements. For select boxes, checkboxes, and
// radio buttons, the event is fired immediately when the user makes a selection with the mouse 
// but for the other element types the event is deferred until the element loses focus

function displayUnloadedImage () {
	if(fileInput) {

		fileInput.addEventListener('change', function (event) {
			var file = fileInput.files[0] //Get "filelist" of event target & Grab first file
			var reader = new FileReader(); //HTML 5 filereader API

			reader.onload = function(file) {
				fileDisplay.removeChild(fileDisplay.childNodes[0])
				var img = new Image(); //Creates new image
				img.src = reader.result;
				img.style.width = '80%';
				img.style.height = '200px';

					img.onload = function() {
    				var originalWidth = this.naturalWidth;
    				var originalHeight = this.naturalHeight;
    					if (originalHeight >= originalWidth) {
    						var warning = document.createElement('span')
    						warning.innerHTML = "Please Use Horizontal Image. Submission Will Be Deleted."
    						fileDisplay.appendChild(warning)
    					}

    					else if (originalHeight < originalWidth) {
    						fileDisplay.appendChild(img)
    					}
					}
					
			}
			reader.readAsDataURL(file) /*The readAsDataURL() method takes in a File or Blob and produces a data URL. This is basically a base64 encoded string of the file data. You can use this data URL for things like setting the src property for an image.*/
		})
	}
}

displayUnloadedImage()

//Function for rating experiences/unfills stars then refills

var stars = document.getElementsByClassName('fillstar');
var starIndex = 0

function starSystem () {
	for (var index = 0; index < stars.length; index++) {

		(function(index) {
			stars[index].addEventListener('click', function() {
				starIndex = index; 
				unfilledStars();
				filledStars();
			}, false);
		})(index);

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


//Hide Experiences//GoForward//GoBack Functions
var allExperiences = document.getElementsByClassName('experiences');
var pageBack = document.getElementsByClassName('experience_page')[0];
var pageForward = document.getElementsByClassName('experience_page')[1];
var reviewIndex = 0
var byFive = 5
pageForward.addEventListener('click', goForward)
pageBack.addEventListener('click', goBack)


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




