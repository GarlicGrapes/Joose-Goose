class DecksController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
         render json: @user.decks
    end

    def show
        deck = find_deck
        render json: deck, status: :ok
    end

    private

    def find_deck
        Deck.find_by(id: params[:id])
    end

    def render_not_found_response
        render json: {error: "Deck not found"}, status: :not_found
    end
end
