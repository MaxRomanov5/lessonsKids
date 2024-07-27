import React from 'react'
import { useState, useEffect } from 'react';
import S from "./Starwars.module.css"

export default function Starwars() {

    const [dataInfo, setDataInfo] = useState();

    console.log(dataInfo)

    useEffect(() => {
        async function getStarwarsCharecters () {
            const result = await fetch("https://swapi.dev/api/people/")
            const res = await result.json();
            setDataInfo(res)
        }
        getStarwarsCharecters()
      }, []);

  return (
    <div>
        {dataInfo&&<ul className={S.characterList}>{dataInfo.results.map((character)=>{
            console.log(character)
            return(<li className={S.characterListItem}><h2 className={S.name}>{character.name}</h2>
                       <p className={S.height}>height: {character.height}</p>
                       <p className={S.mass}>mass: {character.mass}</p>
                       <p className={S.gender}>gender: {character.gender}</p></li>)
        })}
        </ul>}
    </div>
  )
}
