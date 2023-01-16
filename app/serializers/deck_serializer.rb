class DeckSerializer < ActiveModel::Serializer
  attributes :id, :title
  belongs_to :user
  has_many :deck_cards
end
