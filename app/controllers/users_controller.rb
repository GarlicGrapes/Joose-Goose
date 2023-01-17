class UsersController < ApplicationController  
    wrap_parameters format: []
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity

    def show
        current_user = User.find_by(id: session[:user_id])
        # byebug
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

    private 

    def user_params
        params.permit(:username, :password, :img_url)
    end

    def render_uprocessable_entity(exception)
        render json: {error: exception.record.errors}, status: :unprocessable_entity
    end
end
