# frozen_string_literal: true

Rails.application.routes.draw do
  resources :products
  resources :categories
  resources :users
  post '/auth/login', to: 'authentication#login'
  get 'auth/verify', to: 'authentication#verify'
  get 'products/byuser/:id', to: 'products#products_by_user'
  get 'products/bycategory/:id', to: 'products#products_by_category'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
