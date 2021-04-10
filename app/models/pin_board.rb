class PinBoard < ApplicationRecord
  
  belongs_to :pin_id
  belongs_to :board_id
  
end
