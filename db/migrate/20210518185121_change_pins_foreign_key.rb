class ChangePinsForeignKey < ActiveRecord::Migration[5.2]
  def change
    rename_column :pins, :uploader_id, :user_id
  end
end
