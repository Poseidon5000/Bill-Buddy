import React from "react";
import Button from "./Button";

const Friends = ({ friend, handleSelectedFriend, selectedFriends, handleCloseSelected}) => {
  const isSelected = selectedFriends?.id === friend?.id

  return (
    <div>

        <li className={isSelected ? "selected" : ""}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>

          {friend.balance < 0 && (
            <p className={friend.balance < 0 ? "red" : "green"}>
          
              You owe {friend.name} ${Math.abs(friend.balance)}
            </p>
          )}

          {friend.balance > 0 && (
            <p className={friend.balance < 0 ? "red" : "green"}>
              
            {friend.name} owes you ${friend.balance}
            </p>
          )}

          {friend.balance === 0 && (
            <p>
              You and {friend.name} are even
            </p>
          )}

          
          {
            isSelected ? <Button onClick= {handleCloseSelected} >Close</Button> : 
            <Button onClick={()=> handleSelectedFriend(friend)}>Select</Button>
          }
            
        </li>
      
    </div>
  );
};

export default Friends;
