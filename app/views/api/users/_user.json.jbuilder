json.extract! user, :id, :email, :username, :description, :location
json.photoUrl url_for(pin.photo) if user.photo.attached?