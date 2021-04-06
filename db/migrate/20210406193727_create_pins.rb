class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :uploader_id, null: false
      t.string :title, null: false
      t.text :description
      

      t.timestamps
    end
    add_index :pins, :uploader_id
    add_index :pins, :title
  end
end
