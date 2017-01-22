Rails.application.routes.draw do

    get 'auth/:provider/callback', to: 'sessions#create'
    get 'auth/failure', to: redirect('/')
    get 'signout', to: 'sessions#destroy', as: 'signout'


    get '/places', to: 'places#index', as: 'places'
    get '/places/new', to: 'places#new', as: 'new_place'
    get '/places/:url', to: 'places#show', as: 'place'
    post '/places', to: 'places#create'
 
    resources :sessions
    resources :users

    root to: 'pages#home'

    get '/about', to: 'pages#about'

   

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
