class UserSerializer < ActiveModel::Serializer
  attributes :username, :img_url
  has_many :decks
end
