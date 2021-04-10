class CreateBoardsPins < ActiveRecord::Migration[5.2]
  def change
    create_table :boards_pins do |t|
      t.references :pin, foreign_key: true, index: true
      t.references :board, foreign_key: true, index: true
    end
  end
end
