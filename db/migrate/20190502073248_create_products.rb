class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :genre
      t.string :maker
      t.string :coment
      t.integer :stocks
      t.string :count
      t.string :integer

      t.timestamps
    end
  end
end
