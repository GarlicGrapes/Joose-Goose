class UsersController < ApplicationController  
    skip_before_action :authorized, only: :create
     
    def create
        user = User.create!(user_params)
        render json: user
    end

    private 

    def user_params
        params.permit(:username, :password)
    end
end
