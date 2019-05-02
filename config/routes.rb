Rails.application.routes.draw do
  root to: 'home#index'

  get '/about', to:'home#index'
  get '/contact', to: 'home#index'
  get '/cart', to: 'home#index'
  get '/login', to: 'home#index'

  namespace :api, format: 'json' do
    resources :products
    
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
