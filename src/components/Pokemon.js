import PokeFetch from "./PokeFetch.js";
import { useState } from 'react'
import '../pokemon.css'


function Pokemon() {

    const [index, setIndex] = useState(1);

    function pokemonGenerator() {
        const randomNumber = Math.floor(Math.random() * 1008 + 1);
        setIndex(randomNumber);
    }

    function submitHandle(event) {
        setIndex(event.target.value)
    }

    return (
        <div className="pokemon">
            <div className="pokemon-div">
                <PokeFetch index={index} />
                <button className="pokemon-btn" onClick={pokemonGenerator}> Generate </button>
                <input type="number" value={index} onChange={submitHandle}></input>
            </div>
        </div>
    )
}

export default Pokemon;

