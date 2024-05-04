import "./PokemonRow.css";

export function PokemonRow({pokemon, size, description, price, availablePokemoncenter, image, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td>{pokemon}</td>
            <td>{size}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{availablePokemoncenter}</td>
            <td><img src={image} alt={pokemon}/></td>
        </tr>
    )
}
