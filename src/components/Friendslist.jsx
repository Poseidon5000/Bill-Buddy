import React from "react";
import Friends from "./Friends";

const Friendslist = ({ friends, handleSelectedFriend, selectedFriends, handleCloseSelected }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friends
            friend={friend}
            key={friend.id} 
            handleSelectedFriend={handleSelectedFriend}
            selectedFriends={selectedFriends}
            handleCloseSelected = {handleCloseSelected}
          />
        ))}
      </ul>
    </div>
  );
};

export default Friendslist;
