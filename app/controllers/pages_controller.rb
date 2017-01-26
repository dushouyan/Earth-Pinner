class PagesController < ApplicationController
  def home
  	@places = Place.all
  end

  def about
  end

  def help
  end
end
