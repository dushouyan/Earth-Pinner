class UsersController < ApplicationController


  def index
  end

  def show
    @user = User.find(params[:id])
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
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
end

