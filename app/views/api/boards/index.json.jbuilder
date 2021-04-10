@boards.each do |board|
  json.set! board.id do
    json.render 'api/boards/board', board: board
  end
end