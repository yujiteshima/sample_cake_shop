class Api::ProductsController < ApplicationController
  # GET /products
  def index
    @products = Product.order("RANDOM()").limit(15)
    render json: @products
  end

  def create
    #render plain: params.inspect
    #@message = {message: params.inspect}
   @message = {message: params[:data] }
  # @message = {message: params[:key].inspect} 
    render json: @message
    # render plain: params[:key].inspect
    
  end
end