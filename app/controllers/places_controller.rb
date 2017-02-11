class PlacesController < ApplicationController

  before_action :set_place, only: [:edit, :update, :destroy]

  def index
    if current_user.try(:admin?)
      @places = Place.where(:approved => false)
    else  
      @places = Place.where(:approved => true)
    end 
  end

  def show
    if current_user.try(:admin?)
      @place = Place.where(:approved => false).find_by_url(params[:url])
        @totalratings = 0
        @averagerating = 0
        @place.experiences.each do |experience|
          @totalratings += experience.rating
          @averagerating = @totalratings.to_f / @place.experiences.length.to_f
        end 
    else 
      @place = Place.where(:approved => true).find_by_url(params[:url])
        @totalratings = 0
        @averagerating = 0
        @place.experiences.each do |experience|
          @totalratings += experience.rating
          @averagerating = @totalratings.to_f / @place.experiences.length.to_f
        end
    end
  end

  def new
    @place = Place.new
    @countries = Country.all
  end

  def create
    @place = Place.new(places_params)
      if @place.save 
        redirect_back(fallback_location: new_place_path)
        flash[:placesuccess] = "Your Place Was Submitted! Thanks!"
      else
          redirect_back(fallback_location: new_place_path)
          flash[:placeerror] = "Place Already Exists Or Forms Were Blank" 
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
    @place = Place.find_by_url(params[:url])
end

def places_params
    params.require(:place).permit(:name, :address, :country_id, :avatar, :created_by, :make_id, :approved)
end