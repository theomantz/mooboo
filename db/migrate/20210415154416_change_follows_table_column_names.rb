class ChangeFollowsTableColumnNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :follows, :follower, :follower_id
    rename_column :follows, :folowee, :followee_id
  end
end
