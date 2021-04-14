class Board < ApplicationRecord
  

  validates :user_id, :title, presence: true
  validates :private, inclusion: { in: [ true, false ] }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id

  has_and_belongs_to_many :pins, dependent: :nullify
    
end
