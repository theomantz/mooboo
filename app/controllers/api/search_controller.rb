class Api::SearchController < ApplicationController
  
  def search
    @pins = Pin.ransack(title_cont: params[:q]).result(distinct: true).limit(5)
    @boards = Board.rnnsack(title_cont: params[:q]).result(distinct: true).limit(5)
    @users = User.ransack(username_cont: params[:q]).result(distinct: true).limit(5)
    render 'api/search'
  end
  
end
