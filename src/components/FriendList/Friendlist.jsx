import React from 'react'


const Friendlist = ({friendlist}) => {
    console.log(friendlist);
  return (
    <div>
      <ul>
        {friendlist.map((friend)=> {
            return(
                <li key={friend.id}>
                    <img src={friend.avatar}/>
                    <p>{friend.name}</p>
                    <p>{friend.isOnline? "Online": "offline"}</p>
                    
                </li>
            );
        })}
      </ul>
    </div>
  )
}

export default Friendlist
