class DeckCardSerializer < ActiveModel::Serializer
  attributes :id, :quantity

  belongs_to: :card
end
