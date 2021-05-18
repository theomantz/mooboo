@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :username, :description, :location
  end
end