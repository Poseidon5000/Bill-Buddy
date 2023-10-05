import React from 'react'
import Friends from './Friends';

const Friendslist = ({friends}) => {
  
  return (
    <div>
       <ul>
          {
            friends.map((friend)=>(
              <Friends friend={friend}/>
            ))
          }
       </ul>
    </div>
  )
}

export default Friendslist