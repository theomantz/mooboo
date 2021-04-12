json.set! @board.id do
  json.render! 'api/boards/board', board: @board, pins: @board.pins
end