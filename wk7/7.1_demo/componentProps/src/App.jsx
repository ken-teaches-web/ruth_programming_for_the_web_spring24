import Color from "./components/Color"
function App() {
  const colorData = [
    {name: "Puce", hex:"#cc8899", desc: "A color with a hilarious name"},
    {name: "Green", hex:"#00b200", desc: "The hulk and plants color"},
    {name: "Purple", hex:"#600060", desc: "Royal Color"}
  ]
  return(
    <div>
      <h2>Colors</h2>
      <Color 
      name={colorData[0].name} 
      desc={colorData[0].desc} 
      hex={colorData[0].hex}
      />
      <Color 
      name={colorData[1].name} 
      desc={colorData[1].desc} 
      hex={colorData[1].hex} 
      />
            <Color 
      name={colorData[2].name} 
      desc={colorData[2].desc} 
      hex={colorData[2].hex} 
      />
    </div>
  )
}

export default App;