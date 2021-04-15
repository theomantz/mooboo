json.extract! user, :id, :email, :username, :description, :location
json.photoUrl url_for(user.photo) if user.photo.attached?
json.set! 'followers' do
  user.followers.each do |follower|
    json.extract! follower, :id
  end
end
json.set! 'followees' do
  user.followees.each do |followee|
    json.extract! followee, :id
  end
end