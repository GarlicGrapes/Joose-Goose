Rails.application.routes.draw do

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


  resources :users, only: [:show, :create]
  resources :decks
  resources :cards
  resources :deck_cards
  resources :sessions, only: [:create, :destroy]

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  get '/auth', to: "users#show"
  # get '/me', to: "users#show"
  delete '/logout', to: "sessions#destroy"
end