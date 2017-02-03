class ExperiencesController < ApplicationController


  def index
    @place = Place.find_by_url(params[:url])
  end

  def new
  	@experience = Experience.new
    @place = Place.where(url: params[:url]).first
  end

  def create
  	@experience = Experience.create(experiences_params)
    redirect_to place_path
  end

  def edit
    @experiences = Experience.where(user_id: current_user.id && place_id: @place.id)
    @place = Place.where(url: params[:url]).first
  end

  def update
  end
  
  def destroy
  end
end


private 

def experiences_params
    params.require(:experience).permit(:user_id, :place_id, :user_name, :review, :rating)
end

