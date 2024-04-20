import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const happy = "true";
  const tired = "true";
  return (
    <>
      <div>
      Hello World!
      {happy ? (<div>I am Happy </div>) : (<div>I am not so happy</div>)}
      {tired && (<div>And I am so tired</div>)}
      </div>
    </>
  )
}

export default App
