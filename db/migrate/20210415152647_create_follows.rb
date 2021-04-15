class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower, foreign_key: true
      t.integer :folowee, foreign_key: true

      t.timestamps
    end
    add_index :follows, :follower
    add_index :follows, :folowee
  end
end
