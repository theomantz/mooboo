Rails.application.routes.draw do
  
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json }  do
    resources :users, only: [:create, :show, :update]
    resources :pins, only: [:create, :index, :show, :update, :destroy]
    resources :boards, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    get 'users/pins/:id' => 'users#pins_by_user', as: :pins_by_user
    post 'boards/:board_id/:pin_id' => 'boards#add_to_board', as: :add_pin_to_board
    delete 'boards/:board_id/:pin_id' => 'boards#remove', as: :remove
  end
  
end