json.extract! board, :user_id, :title
json.set! 'pins' do
  pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end

