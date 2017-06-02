class CountriesController < ApplicationController

  before_action :set_country, only: [:update]

  def index
  	@countries = Country.all.sort_by{|country| -country.places.length}
  end

  def show
  	@country = Country.find_by_url(params[:url])
  end

  def update 
  	@country.update(countries_params)
    redirect_back(fallback_location: countries_path)
  end

  def add_countries 
    @country = Country.find(params[:country_id])
    @user = User.find(params[:user_id])
    @user.countrylist.countries.push(@country)
    redirect_back(fallback_location: countries_path)
  end

end
  
private

def set_country 
    @country = Country.find_by_url(params[:url])
end

def countries_params
    params.require(:country).permit(:avatar)
end
