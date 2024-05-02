import "./styles.css"
function App() {
  const isKenOld = "no";
  const paragraphStyleObj = {
    color: "green",
    fontSize: "36px",
    margin: "20px auto",
    width: "600px"
  }
  return (
    <>
    <h1 className={isKenOld === "yes" ? "blue" : "red"}>Css Demo</h1>
    <p style={paragraphStyleObj
    }>This is some random test</p>
    </>
  )
}

export default App
