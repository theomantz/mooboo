class AddIndexToBoards < ActiveRecord::Migration[5.2]
  def change
    add_index :boards, [:user_id, :title], unique: true
  end
end
