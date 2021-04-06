class Pin < ApplicationRecord
  
  validates :uploader_id, presence: true
  validates :title, presence: true

  belongs_to :user,
    foreign_key: :uploader_id,
    class_name: :User
  
end
