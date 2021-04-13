@boards.each do |board|
  json.set! board.id do
    json.partial! 'api/boards/board', board: board
    if !board.pins.empty?
      json.set! :pins do
        board.pins.each do |pin|
          json.set! pin.id do
            json.partial! 'api/pins/pin', pin: pin
          end
        end
      end
    end
  end
end