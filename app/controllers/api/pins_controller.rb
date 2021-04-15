class Api::PinsController < ApplicationController
  
  def create
    debugger
    @pin = Pin.new(pin_params)
    if @pin.save
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 400
    end
  end

  def show
    @pin = Pin.find_by(id: params[:id])
    if !@pin.nil?
      render 'api/pins/show'
    else
      render json: ["invalud request"], status: 400
    end
  end

  def index
    @pins = Pin.all
    render 'api/pins/index'
  end

  def update
    @pin = Pin.find_by(id: params[:id])
    if @pin.update(pin_params)
      render 'api/pins/show'
    else
      reunder json: @pin.error.full_messages, status: 400
    end
  end

  def destroy
    @pin = Pin.find_by(id: params[:id])
    if @pin && ( @pin.uploader_id == current_user.id )
      pin_id = @pin.id
      @pin.destroy
      render json: pin_id, status: 200 
    else
      render json: ['invalid request'], status: 404
    end
  end

  private
  
  def pin_params
    params.require(:pin).permit(:uploader_id, :title, :description, :board_ids, :photo)
  end
  
end
