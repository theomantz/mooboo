class Api::BoardsController < ApplicationController
  
  def create
    @board = Board.new(board_params)
    if @board.save
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 404
    end
  end

  def update
    @board = Board.find_by(id: params[:id])
    if @board.update(board_params)
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 404
    end
  end

  def index

    if params[:user_id]
      @boards = Board
        .where(user_id: params[:user_id])
        .includes(:pins)
    else
      @boards = Board
        .where(private: false)
        .includes(:pins)
    end
    if !@boards.empty?
      render 'api/boards/index'
    else
      render json: ['invalid request'], status: 404
    end
  end

  def destroy
    @board = Board.find_by(id: params[:id])
    if @board.user_id == current_user.id
      board_id = @board.id
      if @board.destroy
        render json: board_id, status: 200
      else
        render json: ['Invalid Request'], status: 404
      end
    end
  end

  def remove
    @board = Board.find_by(id: params[:board_id])
    @pin = @board.pins.find_by(id: params[:pin_id])
    if @board && @pin && ( @board.user_id == current_user.id )
      @board.pins.delete(@pin)
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 404
    end
  end

  def show
    @board = Board.includes(:pins).find_by(id: params[:id])
    render 'api/boards/show'
  end

  def add_to_board

    @pin = Pin.find_by(id: params[:pin_id])
    @board = Board.find_by(id: params[:board_id])

    if @board.nil?
      all_pins_board = Board.where(user_id: current_user.id, title: 'Quick Save')
      @board = all_pins_board
    end
    
    if (!@pin.nil? && !@pin.boards.include?(@board))

      @pin.boards << @board
      @board.pins << @pin

      if @board.save && @pin.save
        render '/api/boards/show'
      end

    else
      render json: ['Invalid request parameters'], status: 400
    end

  end

  private

  def board_params
    params.require(:board).permit(:user_id, :title, :private)
  end
  
end
