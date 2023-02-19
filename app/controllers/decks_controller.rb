# class DecksController < ApplicationController
# rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
# rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity
# skip_before_action :authorize, only: [:index]

#     def index
#         # byebug
#          render json: @current_user.decks
#     end

#     def show
#         deck = Deck.find(params[:id])
#         render json: deck, status: :ok
#     end

#     def create
#         deck = @current_user.decks.create!(deck_params)
#         render json: deck, status: :created
#     end

#     private

#     def deck_params
#         params.permit(:title, :format, :user_id)
#     end

#     def find_deck
#         Deck.find_by(id: params[:id])
#     end

#     def render_uprocessable_entity(exception)
#         render json: {error: exception.record.errors}, status: :unprocessable_entity
#     end

#     def render_not_found_response
#         render json: {error: "Deck not found"}, status: :not_found
#     end
# end

# class DecksController < ApplicationController
#     rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
#     rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity
    
#         def index
#             byebug
#              render json: Deck.all
#         end
    
#         def show
#             deck = @current_user.decks
#             render json: deck, status: :ok
#         end
    
#         def create
#             deck = @current_user.decks.create!(deck_params)
#             render json: deck, status: :created
#         end
    
#         private
    
#         def deck_params
#             params.permit(:title, :format, :user_id)
#         end
    
#         def find_deck
#             Deck.find_by(id: params[:id])
#         end
    
#         def render_uprocessable_entity(exception)
#             render json: {error: exception.record.errors}, status: :unprocessable_entity
#         end
    
#         def render_not_found_response
#             render json: {error: "Deck not found"}, status: :not_found
#         end
#     end
    


class DecksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity
    
        def index
             render json: Deck.all
        end
    
        def show
            deck = find_deck
            render json: deck, status: :ok
        end
    
        def create
            deck = @current_user.decks.create!(deck_params)
            render json: deck, status: :created
        end

        # def update
        #     deck = find_deck

        # end

        def destroy
            deck = find_deck
            return render json: {error: "Not Authorized"}, status: :unauthorized unless deck.user_id == session[:user_id]

            deck.destroy
            :no_head
        end
    
        private
    
        def deck_params
            params.permit(:id, :title, :format, :user_id)
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
    