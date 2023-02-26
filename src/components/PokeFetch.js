import React, { useState, useEffect } from 'react'



function PokeFetch({ index }) {

    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;


    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [number, setNumber] = useState();

    useEffect(() => {

        fetch(pokeUrl)
            .then((response) => {
                const data = response.json();
                return data;
            })
            .then((parsedData) => {
                setName(parsedData.name);
                setImage(parsedData.sprites.front_default);
                setNumber(parsedData.id);
            })

    }, [index])

    return <div className="pokeFetch-div">
        <img className="pokemon-img" src={image} alt="" />
        <p className="pokemon-p"> #{number} - {name} </p>
    </div>

}

export default PokeFetch