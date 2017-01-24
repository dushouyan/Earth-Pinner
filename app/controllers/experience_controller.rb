class ExperienceController < ApplicationController
  def index
  end

  def new
  	@experience = Experience.new
  end

  def create
  	@experience = Experience.new(experience_params)
  	@experience.save
  end

  def destroy
  end
end
