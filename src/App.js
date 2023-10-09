import React, { useState } from "react";
import Friendslist from "./components/Friendslist";
import Addfriend from "./components/Addfriend";
import Button from "./components/Button";
import Splitbill from "./components/Splitbill";
import Logo from "./components/Logo";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [addFriendForm, setAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriends, setSelectedFriends] = useState(null);

  function handleShowAddFriend() {
    setAddFriendForm(true);
  }

  function handleCloseAddFriend() {
    setAddFriendForm(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriends(friend);
  }

  function handleCloseSelected() {
    setSelectedFriends(null);
  }

  return (
    <>
      <Logo />
      <div className="app">
        <div className="sidebar">
          <Friendslist
            friends={friends}
            handleSelectedFriend={handleSelectedFriend}
            selectedFriends={selectedFriends}
            handleCloseSelected={handleCloseSelected}
          />
          {addFriendForm && (
            <Addfriend
              friends={friends}
              setFriends={setFriends}
              setAddFriendForm={setAddFriendForm}
            />
          )}

          {addFriendForm ? (
            <Button onClick={handleCloseAddFriend}>Close</Button>
          ) : (
            <Button onClick={handleShowAddFriend}>Add friend</Button>
          )}
        </div>

        {selectedFriends && (
          <Splitbill
            selectedFriends={selectedFriends}
            friends={friends}
            setFriends={setFriends}
          />
        )}
      </div>
    </>
  );
}

export default App;
