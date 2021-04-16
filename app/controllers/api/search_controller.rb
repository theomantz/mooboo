class Api::SearchController < ApplicationController
  
  def search
    @items = Item.ransack(title_cont: )
  end
  
end
