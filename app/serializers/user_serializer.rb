class UserSerializer < ActiveModel::Serializer
  attributes :username
  has_many :decks
end
