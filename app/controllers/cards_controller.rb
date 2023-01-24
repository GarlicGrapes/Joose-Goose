class CardsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity

    def index
        render json: Card.all
    end

    def create
        card = Card.create(card_params)
        render json: card
    end

    private

    def card_params
        params.permit(:name, :cmc, :img_url)
    end

    def find_card
        Card.find_by(id: params[:id])
    end

    def render_uprocessable_entity(exception)
        render json: {error: exception.record.errors}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Card not found"}, status: :not_found
    end
    
end
