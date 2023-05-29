Rails.application.routes.draw do

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"
  get "/auth", to: "users#show"
  get '/me', to: "users#show"
  get '/usercards', to: "deck_cards#count"
  
end