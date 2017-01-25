class ExperiencesController < ApplicationController

  def index
  end

  def new
  	@experience = Experience.new
  end

  def create
  	@experience = Experience.new(experiences_params)
  	@experience.save
  end
  

  def destroy
  end
end


private 

def experiences_params
    params.require(:experience).permit(:user_id, :place_id, :review)
end

