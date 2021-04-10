class Board < ApplicationRecord
  

  validates :user_id, :title, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id

  has_many :pins,
    through: :pin_boards

  has_many_attached :photos,
    through: :pins
  
end
