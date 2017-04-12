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

  def mostbeautiful
    
  end

  def help
    render :layout => false 
  end

end
