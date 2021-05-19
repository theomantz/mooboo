class Follow < ApplicationRecord

  belongs_to :follower, foreign_key: :follower_id, class_name: :User
  belongs_to :followee, foreign_key: :followee_id, class_name: :User
  
  validates :follower_id, presence: true
  validates :followee_id, presence: true

end
