class Pin < ApplicationRecord
  
  validates :user_id, presence: true
  validates :title, presence: true

  validate :ensure_photo
  
  has_one_attached :photo

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_and_belongs_to_many :boards , dependent: :nullify
    
  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << 'Must attach a photo'
    end
  end
  
end
