class RemoveBodyFromPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :body, :string
  end
end
