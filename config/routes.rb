Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  get "home/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "home#index"
end
