import React from "react";
import Button from "./Button";

const Friends = ({ initialFriends }) => {
  return (
    <div>
      {initialFriends.map((friend) => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>

          {friend.balance < 0 && (
            <p className="red">
             
              You owe {friend.name} ${Math.abs(friend.balance)}
            </p>
          )}

          {friend.balance > 0 && (
            <p className="green">
              
            {friend.name} owes you ${friend.balance}
            </p>
          )}

          {friend.balance === 0 && (
            <p>
              You and {friend.name} are even
            </p>
          )}

          <Button>
            Select
          </Button>
        </li>
      ))}
    </div>
  );
};

export default Friends;