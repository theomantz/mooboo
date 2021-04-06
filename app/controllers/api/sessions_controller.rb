class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: ['Incorrect email and password combination'], status: 401
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: ['Incorrect request'], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
