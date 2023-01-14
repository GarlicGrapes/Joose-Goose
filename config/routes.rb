Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :users, only: [:show, :create]
  resources :decks
  resources :cards
  resources :deck_cards

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
end