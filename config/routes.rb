Rails.application.routes.draw do

    get 'auth/:provider/callback', to: 'sessions#create'
    get 'auth/failure', to: redirect('/')
    get 'signout', to: 'sessions#destroy', as: 'signout'


    get '/places', to: 'places#index', as: 'places' 
    get '/places/new', to: 'places#new', as: 'new_place'
    get '/places/:url', to: 'places#show', as: 'place' 
    post '/places', to: 'places#create'
    post 'places/update', to: 'places#update'

    get '/places/:url/experiences/new', to: 'experiences#new', as: 'new_place_experience'
    post '/places/:url/experiences/create', to: 'experiences#create'
 
    resources :sessions
    resources :users 

   
   
    root to: 'pages#home'

    get '/about', to: 'pages#about'
    get '/plan-your-trip', to: 'pages#help', as: 'help'

    post '/places/add_dreams', to: 'places#add_dreams'
    post 'users/delete_dreams', to: 'users#delete_dreams'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
