class PlacesController < ApplicationController

  def index
    if current_user.admin
      @places = Place.all
    else
      @places = Place.where(approved: true)
        if params[:search]
          @places = Place.search(params[:search]).order("created_at DESC")
        else
         @places = Place.all.order("created_at DESC")
        end
    end 
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
        flash[:placesuccess] = "Thanks"
      else 
        redirect_back(fallback_location: new_place_path)
        flash[:placeerror] = "Error Saving"
      end
  end

  def edit
  end

  def update
    @place = Place.find(params[:id])
    @place.update(approved: true)
  end

  def destroy
  end

  def add_dreams 
  @place = Place.find(params[:place_id])
  @user = User.find(params[:user_id])
  @user.dream.places.push(@place)
  end

end 

private 

def places_params
    params.require(:place).permit(:name, :address, :country, :avatar, :created_by, :make_id, :approved)
end