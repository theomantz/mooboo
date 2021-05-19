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

  def follows
    
    @user = User.where(id: params[:user_id])
      .includes(:followers, :followees)
      .first
      
    if @user 

      @users = @user.followers + @user.followees
      render :index

    else

      render json: @user.errors.full_messages

    end

  end

  def destroy
  end

  def pins_by_user
    @pins = Pin.where(uploader_id: params[:id])
    render 'api/pins/index'
  end

  def follow

    @user = User.where(id: params[:current_user_id])
      .includes(:followees)
    @user_to_follow = User.where(id: params[:user_id])
      .includes(:followers)

    if !@user.nil? && !@user_to_follow.nil? && @user.id == current_user.id 

      
      if !@user_to_follow.followers.include?(@user)
        @user_to_follow.followers << @user
        @user
        render 'api/users/show'
      else
        render json: ['Already following that user'], status: 400
      end
      
    else

      render json: @user.errors.full_messages, status: 400

    end
  end

  def unfollow

    @user = User.find_by(id: params[:current_user_id])
    @following = User.find_by(id: params[:user_id])
    
    if !@user.nil? && !@following.nil? && @user.id == current_user.id 

      
      if @following.followers.delete(@user)
        @user
        render '/api/users/show'
      end

    else
      render json: @user.errors.full_messages, status: 400
    end

  end

  private
  def index_params
    params.require(:user_id).permit()
  end
  def user_params
    params.require(:user).permit(:user_id, :email, :password, :username, :description, :location, :photo)
  end
end
