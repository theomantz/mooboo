class Api::PinsController < ApplicationController
  
  def create
    @pin = Pin.new(pin_params)
    if @pin.save
      render 'api/pins/show'
    else
      render json: @pin.error.full_messages, status: 400
    end
  end

  def show
    @pin = Pin.find_by(id: params[:id])
    render 'api/pins/show'
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
    if @pin.destroy
      render json: {}
    else
      render json: ['invalid request'], status: 404
    end
  end

  private
  
  def pin_params
    params.require(:pin).permit(:uploader_id, :title, :description)
  end
  
end
