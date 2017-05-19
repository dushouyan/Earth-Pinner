# Earth-Pinner

Earth Pinner is a web application where users can search a custom Google map to find the world's most beautiful places.

The map and all information for each place is accessible to anyone who visits the website.

A user must use their facebook account to login.

What happens when a user logs in?
  1. Profile page - The user is redirected to their profile page.
  
	-Countries Visited - The user can keep track of all countries he or she has been to. An airplane button is shown on the "Country Page" when the user is logged in.
	-Dream Places - The user can save/keep track of places on their page. A button is shown on the places page.
	-Pinned Places - If the User has added a place to the database. It is shown here.
	-Experiences - The user can share experiences(reviews) of places. All shared experiences are listed here.
      
  2. Pin Your Place
	
  The User can add places to the database.
  There are 5 input forms.
  All forms need to be present. Place Name and Address Must Be Unique.
	
	-Add Photo
			- The file size is restricted to a maximum of 3MB to save memory and cut down on upload time. A thumb is produced upon submission(via Paperclip/Image Magick)
			- A small preview is shown of the image when added.
	-Name
			- A method is used to create a "URL" datatype for SEO purposes
		  	- If certain keywords are used, a place is automatically added to a "waterfall collection"
	-Address OR GPS
			-The User may enter a GPS or an Address. This is geocoded by the gem geocoder. The coordinates are used to map the places. The user can alternatively use their current location as the address. This data comes from Google's Geolocation API.
	-Country
			-A country of the place is selected. This attachs a separate table of data from the country to the place
	-Name(readonly)
	-An "approved" data attribute is submitted to the database as false until approved by the admin user.
	

3. Places Page 
	
 A button appears that allows the user to share experiences at the each place. Only one allowed for each.
      
 FOR FUTURE DEVELOPMENT - "PLAN YOUR TRIP" - An interactive trip planner.
