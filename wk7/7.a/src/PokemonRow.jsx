import "./PokemonRow.css";

export function PokemonRow({pokemon, size, description, price, availablePokemoncenter, image, available, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td style={{fontWeight: available ? 900 : 200, color: available ? "green" : "black"}}>{pokemon}</td>
            <td>{size}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{availablePokemoncenter && "yes"}</td>
            <td><img src={image} alt={pokemon}/></td>
        </tr>
    )
}
