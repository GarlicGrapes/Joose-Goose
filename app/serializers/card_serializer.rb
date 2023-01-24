class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :cmc, :img_url
end
