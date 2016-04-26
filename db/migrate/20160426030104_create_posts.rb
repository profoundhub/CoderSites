class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.string :author
      t.text :url

      t.timestamps
    end
  end
end
