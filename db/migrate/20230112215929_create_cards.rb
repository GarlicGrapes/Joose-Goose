class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :cmc
      t.string :img_url

      t.timestamps
    end
  end
end
