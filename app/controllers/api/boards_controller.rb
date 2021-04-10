class Api::BoardsController < ApplicationController
  
  def create
    @board = Board.new(board_params)
    if @board.save
      render :show
    else
      render json: @board.error.full_messages, status: 404
    end
  end

  def update
    @board = Board.find_by(id: params[:id])
    if @board.update(board_params)
      render :show
    else
      render json: @board.error.full_messages
    end
  end

  def index
    @boards = Board.find_by(user_id: params[:userId])
    render :index
  end

  private

  def board_params
    params.require(:board).permit(:user_id, :title, :pin_ids)
  end
  
end
