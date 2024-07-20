import React, { useState, useEffect } from 'react'

export default function Pokemons() {

    const [pokemonList, setPokemonList] = useState([]);
    
    const listWrap = document.querySelector('#list')

  useEffect(() => {

    async function getPokemons () {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
        const res = await result.json()
        console.log(res)

const newArray = await res.results.map(async(pokemon)=>{
  const result = await fetch(pokemon.url);
    const res = await result.json();
    console.log(res);
   const markup = ` <li>
  <p>${res.name}</p><p>${res.id}</p> 
  <img  src=${res.sprites.other.dream_world.front_default}   alt="">      
</li>`
   listWrap.insertAdjacentHTML('beforeend', markup)
})
        setPokemonList(newArray)
    }
    
    getPokemons()
  }, []);

  
  // async function getSinglePokemon(url){
  //   const result = await fetch(url);
  //   const res = await result.json();
  //   console.log(res);
  //   return(
  //     <li>
  //       <p>{res.name}</p>
  //       <p>{res.id}</p>        
  //     </li>
  //   )
  // } 
  
  return (
    <ul id='list'>
        
    </ul>
  )
}
