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
BluePlayer = User.create(username: "Blue Player", img_url: "https://cards.scryfall.io/large/front/a/6/a6797542-0781-43d6-aa8e-b55e5c1e08c0.jpg?1562930079", password: "123")


puts "Creating Decks..."
RDW = Deck.create(user: RedPlayer, title:"Red Deck Wins", format: "Historic")
Nope = Deck.create(user: BluePlayer, title:"Nope!", format: "Standard")

puts "Creating Cards..."
LightningBolt = Card.create(name: "Lightning Bolt", img_url: "https://cards.scryfall.io/large/front/f/2/f29ba16f-c8fb-42fe-aabf-87089cb214a7.jpg?1673147852")
GoblinGuide = Card.create(name: "Goblin Guide", img_url: "https://cards.scryfall.io/large/front/3/c/3c0f5411-1940-410f-96ce-6f92513f753a.jpg?1599706366")
CounterSpell = Card.create(name: "Counterspell", img_url: "https://cards.scryfall.io/large/front/0/c/0c9a7cb0-5bff-48ff-b620-2838816ac9b5.jpg?1580013910")
Divination = Card.create(name: "Divination", img_url: "https://cards.scryfall.io/large/front/c/b/cb3b35b8-f321-46d8-a441-6b9a6efa9021.jpg?1562304347")
WindDrake = Card.create(name: "Wind Drake", img_url: "https://cards.scryfall.io/large/front/5/e/5e227a63-abea-494e-9d66-6ff0a3da14ca.jpg?1576381503")
Plains = Card.create(name: "Plains", img_url: "https://cards.scryfall.io/large/front/d/b/db14da86-6721-4e22-9b61-4a5680d4e5a3.jpg?1670974958")
Island = Card.create(name: "Island", img_url: "https://cards.scryfall.io/large/front/f/a/fa641d46-d002-4903-af72-e96971f558bc.jpg?1670945567")
Swamp = Card.create(name: "Swamp", img_url: "https://cards.scryfall.io/large/front/d/4/d485c620-f1fb-4715-b7c5-d2d56588308d.jpg?1670945584")
Mountain = Card.create(name: "Mountain", img_url: "https://cards.scryfall.io/large/front/c/d/cd95f833-27ce-447c-b505-02137daaba4c.jpg?1670945608")
Forest = Card.create(name: "Forest", img_url: "https://cards.scryfall.io/large/front/9/f/9f9e911e-7e12-4d99-806c-5cfba19ea8f3.jpg?1670945627")


puts "Adding Cards to Decks..."
DeckBolt = DeckCard.create(deck: RDW, card: LightningBolt, quantity: 4, user: RedPlayer)
DeckMountain = DeckCard.create(deck: RDW, card: Mountain, quantity: 4, user: RedPlayer)
DeckGoblin = DeckCard.create(deck: RDW, card: GoblinGuide, quantity: 4, user: RedPlayer)
DeckCounterspell = DeckCard.create(deck: Nope, card: CounterSpell, quantity: 4, user: BluePlayer)
DeckDivination = DeckCard.create(deck: Nope, card: Divination, quantity: 4, user: BluePlayer)
DeckWindDrake = DeckCard.create(deck: Nope, card: WindDrake, quantity: 4, user: BluePlayer)
DeckIsland = DeckCard.create(deck: Nope, card: WindDrake, quantity: 4, user: BluePlayer)

