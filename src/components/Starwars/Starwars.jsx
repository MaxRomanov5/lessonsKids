import React from 'react'
import { useState, useEffect } from 'react';
import s from "./Starwars.module.css"

export default function Starwars() {
    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState();
    const [singleCharacter, setSingleCharacter] = useState(null);
    const [dataInfo, setDataInfo] = useState();

    console.log(dataInfo)

    
    function onClickNext () {
        setPage(page+1)
        
    }

    function onClickPrev () {
      setPage(page-1)
      
  }
    useEffect(() => {
        async function getStarwarsCharecters () {
            const result = await fetch(`https://swapi.dev/api/people/?page=${page}`)
            const res = await result.json();
            setDataInfo(res)
        }
        getStarwarsCharecters()
      }, [page]);

    function handleInput(e){
         setInputValue(e.target.value)
    }
   async function onSearchCharacter(e){
    e.preventDefault();
      const result = await fetch(`https://swapi.dev/api/people/${inputValue}/`)
      const res = await result.json();
      setSingleCharacter(res)
    }

  return (
    <div>
        {dataInfo&&<><ul className={s.characterList}>{dataInfo.results.map((character)=>{
            console.log(character)
            return(<li className={s.characterListItem}><h2 className={s.name}>{character.name}</h2>
                       <p className={s.height}>height: {character.height}</p>
                       <p className={s.mass}>mass: {character.mass}</p>
                       <p className={s.gender}>gender: {character.gender}</p></li>)
        })}
        </ul><ul className={s.btnList}><li><button className={s.btn} disabled={dataInfo.previous?false:true} onClick={onClickPrev}>prev</button></li> 
                <li><button className={s.btn} disabled={dataInfo.next?false:true} onClick={onClickNext}>next</button></li>
              </ul></>}
             <form className={s.form} onSubmit={onSearchCharacter}> 
             <input className={s.input} onChange={handleInput} value={inputValue}></input>
             <button className={s.btnSubmit} type='submit'>find</button>
            </form>
             <div>
               {singleCharacter&& <section className={s.section}>
                <p style={{fontSize:"50px"}}>{singleCharacter.name}</p>
                <p>mass: {singleCharacter.mass}</p>
                <p>gender: {singleCharacter.gender}</p>
               </section> }
             </div>
    </div>
  )
}
