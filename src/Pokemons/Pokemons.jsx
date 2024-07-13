import React, { useState, useEffect } from 'react'

export default function Pokemons() {

    const [pokemonList, setPokemonList] = useState([]);
    
  useEffect(() => {

    async function getPokemons () {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
        const res = await result.json()
        console.log(res)

        setPokemonList(res)
    }
    
    getPokemons()
  }, []);
  async function getSinglePokemon(url){
    const result = await fetch(url);
    const res = await result.json();
    console.log(res);
    return(
      <div>
        <p>{res.name}</p>
        <p>{res.id}</p>        
      </div>
    )
  } 
  
  return (
    <div>
        {pokemonList?.results && pokemonList?.results?.map((pokemon)=>{
            return(
                <div>
                    {getSinglePokemon(pokemon.url)}   
                </div>
            )
        })}
    </div>
  )
}
