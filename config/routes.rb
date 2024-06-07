Rails.application.routes.draw do
  root 'pages#home'
  get 'about', to: 'pages#about'
  resources :articles
  get 'signup', to: 'users#new'
  resources :users, except: [:new]
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  
   # Namespace for API routes
   namespace :api do
    namespace :v1 do
      get 'articles_with_users', to: 'articles#with_users'
    end
  end
end

