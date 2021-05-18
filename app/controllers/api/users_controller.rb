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
    if !@user.nil? && @user.id == current_user.id
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
    @user = User
    .where(id: params[:id])
    .includes(:followers, :followees)
    .first
    render :show
  end

  def index
    @user = User.where(id: params[:userId])
      .includes(:followers, :followees)
      .first

    @users = @user.followers + @user.followees

    render :index
  end

  def destroy
  end

  def pins_by_user
    @pins = Pin.where(uploader_id: params[:id])
    render 'api/pins/index'
  end

  def follow

    @user = User.find_by(id: params[:current_user_id])
    @user_to_follow = User.find_by(id: params[:user_id])

    if !@user.nil? && !@user_to_follow.nil? && @user.id == current_user.id 

      @user_to_follow.followers << @user
      @user.followees << @user_to_follow

      if @user.save && @user_to_follow.save
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 400
      end
      
    else

      render json: @user.errors.full_messages, status: 400

    end
  end

  def unfollow

    @user = User.find_by(id: params[:current_user_id])
    @following = User.find_by(id: params[:user_id])
    
    if !@user.nil? && !@following.nil? && @user.id == current_user.id 

      @following.followers.delete(@user)
      @user.followees.delete(@following)

      if @user.save && @following.save 
        render '/api/users/show'
      end

    else
      render json: @user.errors.full_messages, status: 400
    end

  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :username, :description, :location, :photo)
  end
end
