class AddPrivateToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :private, :boolean
  end
end
