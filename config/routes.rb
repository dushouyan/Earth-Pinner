Rails.application.routes.draw do

    get 'auth/:provider/callback', to: 'sessions#create'
    get 'auth/failure', to: redirect('/')
    get 'signout', to: 'sessions#destroy', as: 'signout'

    resources :sessions
    resources :users, :places

    root to: 'pages#home'

    get '/about', to: 'pages#about'

    post '/places/add_dreams', to: 'places#add_dreams'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
