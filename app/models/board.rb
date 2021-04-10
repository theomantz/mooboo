class Board < ApplicationRecord
  

  validates :user_id, :title, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id

    
  
end
