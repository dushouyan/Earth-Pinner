Rails.application.routes.draw do



    get 'auth/:provider/callback', to: 'sessions#create'
    get 'auth/failure', to: redirect('/')
    get 'signout', to: 'sessions#destroy', as: 'signout'

    get 'users/:id', to: 'users#show', as: 'user'
    delete '/users/:id', to: 'users#destroy'


    get '/countries', to: 'countries#index'
    get '/countries/:url', to: 'countries#show', as: 'country'
    patch '/countries/:url', to: 'countries#update', as: 'update_country'
    get '/places', to: 'places#index', as: 'places' 
    get '/places/new', to: 'places#new', as: 'new_place'
    get '/places/:url', to: 'places#show', as: 'place' 
    post '/places', to: 'places#create'
    patch '/places/:url', to: 'places#update', as: 'update_place' 
    delete '/places/:url', to: 'places#destroy', as: 'delete_place'

    get '/places/:url/experiences', to: 'experiences#index'
    get '/places/:url/experiences/new', to: 'experiences#new', as: 'new_place_experience'
    post '/places/:url/experiences/create', to: 'experiences#create'
    get '/places/:url/experiences/edit/:id', to: 'experiences#edit', as: 'edit_place_experience'
    patch '/places/:url/experiences/edit/:id', to: 'experiences#update', as: 'update_place_experience'
 
    resources :sessions
    resources :users
   
    root to: 'pages#home'

    get '/about', to: 'pages#about'
    get '/plan-your-trip', to: 'pages#help', as: 'help'

    post '/places/add_dreams', to: 'places#add_dreams'
    post '/users/delete_dreams', to: 'users#delete_dreams'
    post '/countries/add_countries', to: 'countries#add_countries'
    post '/users/delete_countries', to: 'users#delete_countries'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
