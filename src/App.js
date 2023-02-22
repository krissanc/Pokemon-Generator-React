import React, { useState } from 'react'
import Pokemon from './components/Pokemon.js'




// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tours-project'





function App() {

  const [index, setIndex] = useState(1);

  function pokemonGenerator() {
    const randomNumber = Math.floor(Math.random() * 1008 + 1);
    setIndex(randomNumber);
  }


  return (
    <div>
      <Pokemon index={index} />
      <button onClick={pokemonGenerator}> Generate </button>

    </div>
  )
}

export default App
