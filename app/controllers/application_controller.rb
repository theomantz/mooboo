class ApplicationController < ActionController::Base
  
  helper_method :current_user, :logged_in?
  
  private

  def current_user
    # debugger
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end


  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    # debugger
    !!current_user
  end

  
end
