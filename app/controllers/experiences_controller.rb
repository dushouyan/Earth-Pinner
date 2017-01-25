class ExperiencesController < ApplicationController
  def index
  end

  def new
  end

  def new
  	@experience = Experience.new
  end

  def create
  	@experience = Experience.new
  	@experience.save
  end
  

  def destroy
  end
end
