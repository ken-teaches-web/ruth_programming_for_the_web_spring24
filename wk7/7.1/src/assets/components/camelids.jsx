import "./camelids.css"

function Camelid({name, img, desc}) {
    console.log(name)

    return(
        <div className="camelidCard">
            <h2>{name}</h2>
            <p>{img}</p>
            <p>{desc}</p>
        </div>
    )
}
export default Camelid;