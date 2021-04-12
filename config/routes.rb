Rails.application.routes.draw do
  
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json }  do
    resources :users, only: [:create, :show, :update]
    resources :pins, only: [:create, :index, :show, :update]
    resources :boards, only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    get 'users/pins/:id' => 'users#pins_by_user', as: :pins_by_user
  end
  
end