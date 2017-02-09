// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function () { 


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
	if (byFive <= allExperiences.length) {
		hideExperiences()
		for (reviewIndex; reviewIndex < byFive; reviewIndex++) {
			allExperiences[reviewIndex].style.display = "block"
		}
		byFive = byFive + 5 //increments experiences by
	}
	else if (byFive > allExperiences.length) {
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
	else if (reviewIndex > allExperiences.length) {
		hideExperiences()
		pageForward.addEventListener('click', goForward) //event listener is readded if 
		reviewIndex = reviewIndex - 10					//user goes back and index > all			
		byFive = byFive - 10
		goForward() 
	}

}

goForward()


})
