Rails.application.routes.draw do
  root to: 'home#index'

  get '/about', to:'home#index'
  get '/contact', to: 'home#index'
  get '/cart', to: 'home#index'
  get '/login', to: 'home#index'
  get '/logout', to: 'home#index'
  get '/user-index', to:'home#index'
  get '/product/:id', to:'home#index'
  get '/user/sign-up', to:'home#index'
  get '/home2', to:'home#index'
   
  namespace :api, format: 'json' do
    resources :products
    resources :users
    resources :auth
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
