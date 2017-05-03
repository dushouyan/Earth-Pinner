class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @places = Place.all
    @countries = Country.all
  end

  def destroy
    @user = User.find(params[:id])
    session[:user_id] = nil
    @user.delete
    redirect_to '/'
  end

  def delete_dreams 
    @user = User.find(params[:user_id])
    @place = Place.find(params[:place_id])
    @user.dream.places.delete(@place)
    redirect_back(fallback_location: user_path(@user.id))
  end

  def delete_countries 
    @country = Country.find(params[:country_id])
    @user = User.find(params[:user_id])
    @user.countrylist.countries.delete(@country)
    redirect_back(fallback_location: user_path(@user.id))
  end
end

