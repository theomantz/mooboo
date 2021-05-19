Rails.application.routes.draw do
  
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json }  do

    resources :users, only: [:create, :show, :update]

    get 'users/:user_id/follows' => 'users#follows', as: :users_follows
    get 'users/pins/:id' => 'users#pins_by_user', as: :pins_by_user
    post 'users/:current_user_id/:user_id' => 'users#follow', as: :follow
    delete 'users/:current_user_id/:user_id' => 'users#unfollow', as: :unfollow
    
    resources :pins, only: [:create, :index, :show, :update, :destroy]

    resources :boards, only: [:create, :index, :show, :update, :destroy]
    post 'boards/:board_id/:pin_id' => 'boards#add_to_board', as: :add_pin_to_board
    delete 'boards/:board_id/:pin_id' => 'boards#remove', as: :remove
    
    resource :session, only: [:create, :destroy]
  end
  
end