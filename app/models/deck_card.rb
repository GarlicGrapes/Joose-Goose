class DeckCard < ApplicationRecord
    belongs_to :deck
    belongs_to :card
    # belongs_to :user, through: :deck
end
