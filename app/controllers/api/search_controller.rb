class Api::SearchController < ApplicationController
  
  def search
    @pins = Pin.where("title LIKE ?", "%#{params[:q]}" ).limit(3)
    @boards = Board.where("title LIKE ?", "%#{params[:q]}" ).limit(3)
    @users = User.where("username LIKE ?", "%#{params[:q]}" ).limit(3)
    render 'api/search/search'
  end
  

  private
  def force_json
    request.format = :json
  end

end
