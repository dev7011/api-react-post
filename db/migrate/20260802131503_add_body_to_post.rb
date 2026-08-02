class AddBodyToPost < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :body, :text unless column_exists?(:posts, :body)
  end
end
