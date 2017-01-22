class PlacesController < ApplicationController
  def index
    @places = Place.all
  end

  def show
    @place = Place.find_by_url(params[:url])
  end

  def new
    @place = Place.new
  end

  def create
    @place = Place.new(places_params)
      if @place.save 
        redirect_back(fallback_location: new_place_path)
      else 
        flash[:placeerror] = "Error Saving"
      end
  end

  def edit
  end

  def update
  end

  def destroy
  end
end

private 

def places_params
    params.require(:place).permit(:name, :city, :country, :closest_city, :website)
end