@pins.each_with_index do |pin, i|
  json.set! pin.id do
    json.partial! "api/pins/pin", pin: pin
  end
end