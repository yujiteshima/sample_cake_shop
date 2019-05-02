class Api::ProductsController < ApplicationController
  # GET /products
  def index
    @products = Product.order("RANDOM()").limit(15)
    render json: @products
  end
end