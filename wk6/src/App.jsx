
function App() {
  const [count, setCount] = useState(0)
  const llamaFacts = [
    "Llama poo produces little to no odor.",
    "Llamas are members of the camelid family meaning they're pretty closely related to vicuñas and camels.",
    "Camelids first appeared on the Central Plains of North America about 40 million years ago.",
    "About 3 million years ago, llamas' ancestors migrated to South America.",
    "Llamas can grow as much as 6 feet tall though the average llama between 5 feet 6 inches and 5 feet 9 inches tall.",
    "Llamas weigh between 280 and 450 pounds and can carry 25 to 30 percent of their body weight.",
    // and so on(llama facts)
    console.log(llamaFacts(true))
    ];
  return (
    <>
      <div>
        <h1>LlamaFacts!</h1>
        <h2>Facts about Llamas are fun</h2>
        <p>Llama poo produces little to no odor.</p>
        <p>Llamas are members of the camelid family meaning they're pretty closely related to vicuñas and camels.</p>
        <p>Camelids first appeared on the Central Plains of North America about 40 million years ago.</p>
        <p>About 3 million years ago, llamas' ancestors migrated to South America.</p>
        <p>Llamas can grow as much as 6 feet tall though the average llama between 5 feet 6 inches and 5 feet 9 inches tall.</p>
        <p>Llamas weigh between 280 and 450 pounds and can carry 25 to 30 percent of their body weight.</p>
      </div>

      <div>
        {llamaFacts && (<div>Llamas are super cool</div>)}
        {llamaFacts ? (<div> are not fun</div>) : (<div>are super fun</div>)}
      </div>
    </>
  )
}

export default App