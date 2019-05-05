class Api::UsersController < ApplicationController
  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end
  
  def create
    
    #user = User.new(name: params[:userInfo][:name], email: params[:userInfo][:email], pass: params[:userInfo][:pass1])
    @user = User.new(name: params[:name], email: params[:email], pass: params[:pass1])
    if @user.save
      @newuser = User.find_by(email: params[:email]) 
      @info = {
        name:@user.name,
        email:@user.email,
        flashMessage:true,
        mode:"processing",
        text:"ユーザー登録が完了しました"
      }
    elsif
      @info ={
      flashMessage: true,
      mode:"error",
      text:@user.errors.full_messages[0]
      }
    end
    render json: @info
    
    # redirect_to("/")
  end



end