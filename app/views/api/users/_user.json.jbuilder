json.extract! user, :id, :email, :username, :description, :location
json.photoUrl url_for(user.photo) if user.photo.attached?