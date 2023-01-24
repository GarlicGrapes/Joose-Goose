Rails.application.routes.draw do

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


  resources :users, only: [:show, :create]
  resources :decks, only: [:index, :show, :create]
  resources :cards
  resources :deck_cards
  resources :sessions, only: [:create, :destroy]

  get '/decks', to: "decks#index"
  post '/decks', to: "decks#create"
  get '/decks/:id', to: "decks#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"
  get "/auth", to: "users#show"
  patch '/deck_card/:id', to: "deck_cards#update"
  # get '/me', to: "users#show"

end