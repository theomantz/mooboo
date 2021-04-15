json.extract! user, :id, :email, :username, :description, :location
json.photoUrl url_for(user.photo) if user.photo.attached?
json.set! 'followers' do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :id, :username
    end
  end
end
json.set! 'followees' do
  user.followees.each do |followee|
    json.set! followee.id do
      json.extract! followee, :id, :username
    end
  end
end