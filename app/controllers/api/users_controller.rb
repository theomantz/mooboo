class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)  
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def update
    @user = User.find_by(session_token: session[:session_token])
    # debugger
    if !@user.nil?
      if @user.update(user_params)
        @user
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 404
      end
    else
      render json: ['You must be logged in to do that'] , status: 404
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def destroy
  end

  def pins_by_user
    @pins = Pin.where(uploader_id: params[:id])
    render 'api/pins/index'
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :username, :description, :location)
  end
end
