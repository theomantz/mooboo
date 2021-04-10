class Api::BoardsController < ApplicationController
  
  def create
    @board = Board.new(board_params)
    if @board.save
      render 'api/boards/show'
    else
      render json: @board.error.full_messages, status: 404
    end
  end

  def update
    @board = Board.find_by(id: params[:id])
    if @board.update(board_params)
      render 'api/boards/show'
    else
      render json: @board.error.full_messages
    end
  end

  def index
    @boards = Board.where(user_id: params[:userId])
    unless @boards
      @board = Board.create(user_id: :userId, title: 'First Board!')
      render 'api/boards/show'
    end
    render 'api/boards/index'
  end

  private

  def board_params
    params.require(:board).permit(:user_id, :title, :pin_ids)
  end
  
end
