json.pins do
  json.array!(@pins) do |pin|
    json.extract! pin, :id, :title, :uploader_id
  end
end

json.boards do
  json.array!(@boards) do |board|
    json.extract! board, :id, :title, :user_id
  end
end

json.users do
  json.array!(@users) do |user|
    json.extract! user, :id, :username
  end
end