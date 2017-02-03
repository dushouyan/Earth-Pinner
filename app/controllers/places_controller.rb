class PlacesController < ApplicationController

  before_action :set_place, only: [:edit, :update, :destroy]

  def index
    if current_user.try(:admin?)
      @places = Place.where(:approved => false)
    else  
      @places = Place.where(:approved => true)
        if params[:search]
          @places = Place.search(params[:search]).order("created_at DESC")
        else
          @places = Place.where(:approved => true).order("created_at DESC")
        end
    end 
  end

  def show 
    @place = Place.where(:approved => true).find_by_url(params[:url])
    @totalratings = 0
    @averagerating = 0
    @place.experiences.each do |experience|
      @totalratings += experience.rating
      @averagerating = @totalratings.to_f / @place.experiences.length.to_f
    end
  end

  def new
    @place = Place.new
  end

  def create
    @place = Place.new(places_params)
      if @place.save 
        redirect_back(fallback_location: new_place_path)
        flash[:placesuccess] = "Your Place Was Submitted! Thanks!"
      else 
        redirect_back(fallback_location: new_place_path)
        flash[:placeerror] = "Place Must Be Unique Or Some Forms Were Left Blank"
      end
  end

  def edit
  end

  def update
    @place.update(:approved => true)
    redirect_back(fallback_location: places_path)
  end

  def destroy
    @place.delete
    redirect_back(fallback_location: places_path)
  end

  def add_dreams 
  @place = Place.find(params[:place_id])
  @user = User.find(params[:user_id])
  @user.dream.places.push(@place)
  end

end 

private 

def set_place 
  @place = Place.find(params[:id])
end

def places_params
    params.require(:place).permit(:name, :address, :country, :avatar, :created_by, :make_id, :approved)
end