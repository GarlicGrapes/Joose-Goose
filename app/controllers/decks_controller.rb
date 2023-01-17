class DecksController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity

    def index
         render json: @user.decks
    end

    def show
        deck = @current_user.decks
        byebug
        render json: deck, status: :ok
    end

    def create
        deck = @current_user.decks.create!(deck_params)
        render json: deck, status: :created
    end

    private

    def deck_params
        params.permit(:title, :format, :user_id)
    end

    def find_deck
        Deck.find_by(id: params[:id])
    end

    def render_uprocessable_entity(exception)
        render json: {error: exception.record.errors}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Deck not found"}, status: :not_found
    end
end
