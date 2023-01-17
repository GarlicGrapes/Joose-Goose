# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Destroying old data"
User.destroy_all
Deck.destroy_all
DeckCard.destroy_all
Card.destroy_all

puts "Creating Users..."
RedPlayer = User.create(username: "Red Player", img_url: "https://cards.scryfall.io/large/front/a/6/a6797542-0781-43d6-aa8e-b55e5c1e08c0.jpg?1562930079", password: "123")


puts "Creating Decks..."
RDW = Deck.create(user: RedPlayer, title:"Red Deck Wins", format: "Historic")

puts "Creating Cards..."
LightningBolt = Card.create(name: "Lightning Bolt", img_url: "https://cards.scryfall.io/large/front/f/2/f29ba16f-c8fb-42fe-aabf-87089cb214a7.jpg?1673147852")
Mountain = Card.create(name: "Mountain", img_url: "https://cards.scryfall.io/large/front/c/d/cd95f833-27ce-447c-b505-02137daaba4c.jpg?1670945608")
GoblinGuide = Card.create(name: "Goblin Guide", img_url: "https://cards.scryfall.io/large/front/3/c/3c0f5411-1940-410f-96ce-6f92513f753a.jpg?1599706366")

puts "Adding Cards to Decks..."
DeckBolt = DeckCard.create(deck: RDW, card: LightningBolt, quantity: 4)
DeckMountain = DeckCard.create(deck: RDW, card: Mountain, quantity: 4)
DeckGoblin = DeckCard.create(deck: RDW, card: GoblinGuide, quantity: 4)

