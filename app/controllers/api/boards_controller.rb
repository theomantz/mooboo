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
    @boards = Board.where(user_id: params[:userId]).includes(:pins)
    unless @boards
      @board = Board.create(user_id: :userId, title: 'First Board!')
      render 'api/boards/show'
    end
    render 'api/boards/index'
  end

  def show
    @board = Board.find_by(id: params[:id]).includes(:pins)
    render 'api/boards/show'
  end

  def add_to_board
    @pin = Pin.find_by(id: params[:pin_id])
    @board = Board.find_by(id: params[:board_id])

    if @board.nil?
      all_pins_board = Board.where(user_id: current_user.id, title: 'Quick Save')
      if all_pins_board.empty?
        @board = Board.create(user_id: current_user.id, title: 'Quick Save')
      else
        @board = all_pins_board
      end
    end
    
    if (!@pin.nil? & !@pin.boards.include?(@board))
      @pin.boards << @board
      render json: ['Pin added successfully'], status: 201
    else
      render json: ['Invalid request parameters'], status: 400
    end

  end

  private

  def board_params
    params.require(:board).permit(:user_id, :title, :pin_ids)
  end
  
end
