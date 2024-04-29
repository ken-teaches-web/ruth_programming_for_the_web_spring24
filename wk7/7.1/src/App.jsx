import Camelid from "./assets/components/camelids"
import imgLlama from "./assets/img/llama.jpg"
import imgAlpaca from "./assets/img/alpaca.jpg"

function App() {
  const camelidFacts = [
    {name: "Llama", 
    img: <img src = {imgLlama} alt="Llama" />, 
    desc: "Llama poo produces little to no odor."},
    {name: "Alpaca", 
    img: <img src = {imgAlpaca} alt="Alpaca" />, 
    desc: "Alpacas can be housetrained"}
  ]
  return(
    <div>
      <Camelid 
      name ={camelidFacts[0].name}
      img ={camelidFacts[0].img}
      desc ={camelidFacts[0].desc}
      />
      <Camelid 
      name ={camelidFacts[1].name}
      img ={camelidFacts[1].img}
      desc ={camelidFacts[1].desc}
      />
    </div>
  )
}

export default App;