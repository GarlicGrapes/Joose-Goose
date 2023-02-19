Rails.application.routes.draw do

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


  resources :users, only: [:show, :create]
  resources :decks, only: [:index, :show, :create, :destroy]
  resources :cards, only: [:index, :create]
  resources :deck_cards, only: [:update, :create, :destroy]
  resources :sessions, only: [:create, :destroy]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"
  get "/auth", to: "users#show"
  get '/me', to: "users#show"
  get '/usercards', to: "deck_cards#count"
  
end