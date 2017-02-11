class PagesController < ApplicationController
  def home
  	 @places = Place.where(:approved => true)
  		@url_array = []
  		@places.each do |place|
       if place.latitude != nil && place.longitude != nil 
  			@url_array.push(place.url)
      end
		end
  end

  def about
  end

  def help
  end

end
