class DeckCardSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :card
  belongs_to :card
  belongs_to :user
end
