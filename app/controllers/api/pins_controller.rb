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
    @numCols = params[:numCols]
    render 'api/pins/show'
  end

  def index
    @pins_unshuffled = Pin.all
    @pins = @pins_unshuffled.shuffle
    render 'api/pins/index'
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
