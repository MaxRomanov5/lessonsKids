import React, { useState, useEffect } from 'react'

export default function Pokemons() {

    const [pokemonList, setPokemonList] = useState();
    
  useEffect(() => {

    async function getPokemons () {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
        const res = await result.json()
        console.log(res)

        setPokemonList(res)
    }

    getPokemons()
  }, []);

  return (
    <div>
        {pokemonList.results.map((pokemon)=>{
            return(
                <div>
                    {pokemon.name}   
                </div>
            )
        })}
    </div>
  )
}
