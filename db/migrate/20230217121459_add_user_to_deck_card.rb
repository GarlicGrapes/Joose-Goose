class AddUserToDeckCard < ActiveRecord::Migration[7.0]
  def change
    add_column :deck_cards, :user_id, :integer
  end
end
