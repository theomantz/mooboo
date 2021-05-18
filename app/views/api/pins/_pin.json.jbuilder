json.extract! pin, :id, :uploader_id, :title, :description, :updated_at, :created_at
json.photoUrl url_for(pin.photo)