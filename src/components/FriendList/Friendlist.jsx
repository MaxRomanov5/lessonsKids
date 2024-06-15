import React from 'react'
import s from './Friendlist.module.css'


const Friendlist = ({friendlist}) => {
    console.log(friendlist);
  return (
    <div>
      <ul className={s.ul}>
        {friendlist.map((friend)=> {
            return(
                <li className={s.friend} key={friend.id}>
                    <img className={s.avatar} src={friend.avatar}/>
                    <p className={s.name}>{friend.name}</p>
                    <p className={friend.isOnline ? s.Online:s.Offline}>{friend.isOnline? "Online": "Offline"}</p>
                    
                </li>
            );
        })}
      </ul>
    </div>
  )
}

export default Friendlist
