import "./App.css"
import { PokemonRow } from "./PokemonRow.jsx"

function App() {
    const pokemonPlush = [
        {

            pokemon: "Slowpoke",
            size: "59 inches",
            description: "We may never know what Slowpoke is thinking—or if it's even thinking at all—but its willingness to happily laze the day away is worthy of admiration. With this jumbo Slowpoke plush by your side at home, school, or work, you'll always have a reminder of the importance of taking it a little slow from time to time.",
            price: "$450.00",
            availablePokemoncenter: "Yes",
            image: "./slowpoke.jpg",
            available: true,
        },
        {
            pokemon: "Spheal",
            size: "39 1/2 inches",
            description: "In the Pokémon world, Spheal stands around 2 feet and 7 inches tall. This jumbo Spheal plush isn't much different at 31 ½ inches tall and 39 ½ inches long. It's ready to be hugged, squeezed, and displayed in your bedroom or living room. With a face like this, you won't be able to avoid the cuteness of this round and rotund Pokémon!",
            price: "$449.99",
            availablePokemoncenter: "Yes",
            image: "./spheal.jpg",
            available: true,
        },
        {
            pokemon: "Mareep",
            size: "45 inches",
            description: "Just as big as it says in the Pokédex! This jumbo-size Poké Plush is a full 2 feet tall and more than 3 feet long, and it really gives you options! Will you count Mareep in the bedroom? Maybe put it under a glass tabletop? Possibly keep it near a rocking chair to maximize fluffy enjoyment during quiet times?",
            price: "$499.99",
            availablePokemoncenter: "NO",
            image: "./mareep.jpg",
            available: false,
        },
        {
            pokemon: "Altaria",
            size: "37 3/4 inches",
            description: "A beautiful and majestic Dragon- and Flying-type Pokémon, Altaria brings a calming presence wherever it goes. Now you can bring the magic and tranquility of Altaria into your own home or office with this jumbo plush that brings the Humming Pokémon to life with soft, supercuddly wings that look like comfy pillows!",
            price: "$499.99",
            availablePokemoncenter: "NO",
            image: "./altaria.jpg",
            available: false,
        }
    ]
    return (
        <>
        <h1><img src="./masterball.png" alt="master pokeball"/>Jumbo Pokemon Plushes for Future Collection<img src="./masterball.png" alt="master pokeball"/></h1>
        <p><img src="./masterball.png" alt="master pokeball"/>These are some jumbo pokemon plushes I would love to have one day in the future if money and my hubby would allow it..but ya gotta catch them all.<img src="./masterball.png" alt="master pokeball"/></p>
        <table className="pokemon-table">
            <thead>
                <tr>
                <th>Pokemon</th>
                <th>Size</th>
                <th>Description</th>
                <th>Price</th>
                <th>Available Online?</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>
            {pokemonPlush.map((pokemon, index) => {
                return (
                    <PokemonRow
                        key={pokemon.image}
                        odd={index % 2 === 0}
                        pokemon={pokemon.pokemon}
                        size={pokemon.size}
                        description={pokemon.description}
                        price={pokemon.price}
                        availablePokemoncenter={pokemon.availablePokemoncenter}
                        image={pokemon.image}
                        available={pokemon.available}
                        />
                    )
            })}
            </tbody>
        </table>
        </>
    )
}

export default App;