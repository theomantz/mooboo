class CreatePinBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :pin_boards do |t|
      t.references :pins, foreign_key: true, index: true
      t.references :boards, foreign_key: true, index: true

      t.timestamps
    end
  end
end
