class CountryController < ApplicationController

  before_action :set_place, only: [:update]

  def index

  	@countries = Country.all
  end

  def show
  	@country = Country.find_by_url(params[:url])
  end

  def update 
  	@country.update(country_params)
    redirect_back(fallback_location: countries_path)
  end
end

private

def set_place 
    @country = Country.find_by_url(params[:url])
end

def country_params
    params.require(:country).permit(:avatar)
end
