class DeckCardsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity

    def update
        deck_card = find_deck_card
        deck_card.update(deck_card_params)
        render json: deck_card
    end

    # READ OR INDEX

    def create
        deck_card = DeckCard.create(deck_card_params)
        render json: deck_card
    end

    def destroy
        deck_card = find_deck_card
        deck_card.destroy
        :no_head
    end

    private

    def deck_card_params
        params.permit(:id, :deck_id, :card_id, :user_id, :quantity)
    end

    def find_deck_card
        DeckCard.find_by(id: params[:id])
    end

    def render_uprocessable_entity(exception)
        render json: {error: exception.record.errors}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Deck Card not found"}, status: :not_found
    end

end
