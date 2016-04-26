class AddAuthorUrlToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :author, :string
    add_column :posts, :url, :string
  end
end
