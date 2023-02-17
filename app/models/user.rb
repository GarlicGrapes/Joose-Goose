class User < ApplicationRecord
    has_secure_password
    
    has_many :decks, dependent: :destroy 
    has_many :deck_cards, through: :decks

    validates :username, presence: true, uniqueness: true
end
