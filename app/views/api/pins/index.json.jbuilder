@pins.each do |pin|
  json.set! pin.id do
    json.partial! "api/pins/pin", pin: pin
    json.column_id rand(@numCols)
  end
end