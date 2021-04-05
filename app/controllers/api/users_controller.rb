class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)  
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def update
    @user = User.find_by_credentials(user_params)
    if !@user.nil?
      render :update
    else
      render json: ['Incorrect email and password combination'] , status: 404
    end
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
