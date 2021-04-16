json.pins do
  json.array!(@pins) do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :title
    end
  end
end

json.boards do
  json.array!(@boards) do |board|
    json.set! board.id do
      json.extract! board, :id, :title
    end
  end
end

json.users do
  json.array!(@users) do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end