import React, { useState, useEffect } from 'react'





function Pokemon({ index }) {

    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {

        fetch(pokeUrl)
            .then((response) => {
                const data = response.json();
                return data;
            })
            .then((parsedData) => {
                setName(parsedData.name);
                setImage(parsedData.sprites.front_default);
            })

    }, [index])

    return <div className="pokemon-div">
        <img className="pokemon-div-img" src={image} alt="" />
        <p> {name} </p>
    </div>

}

export default Pokemon