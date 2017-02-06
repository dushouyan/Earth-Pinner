class ExperiencesController < ApplicationController

  before_action :set_experience, only: [:edit, :update, :destroy]

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
    @place = Place.find_by_url(params[:url])
  end

  def update
    @experience.update(experiences_params)
    redirect_to new_place_experience_path
  end
  
  def destroy
  end
end


private 

def set_experience 
 @experience = Experience.find(params[:id])
end

def experiences_params
    params.require(:experience).permit(:user_id, :place_id, :user_name, :review, :rating)
end

