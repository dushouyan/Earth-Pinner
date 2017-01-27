class ExperiencesController < ApplicationController

  def index
  end

  def new
  	@experience = Experience.new
    @place = Place.where(url: params[:url]).first
  end

  def create
  	@experience = Experience.create!(experiences_params)
  end
  
  def destroy
  end
end


private 

def experiences_params
    params.require(:experience).permit(:user_id, :place_id, :user_name, :review)
end

