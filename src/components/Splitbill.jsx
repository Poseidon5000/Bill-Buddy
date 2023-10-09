import React, { useState } from "react";
import Button from "./Button";

const Splitbill = ({ selectedFriends, friends, setFriends }) => {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [paying, setPaying] = useState("user");
  const friendsExpense = bill ? bill - expense : "";


  function handleSubmit(e){
    e.preventDefault()
    const value = paying === "user" ? friendsExpense : -friendsExpense

    if(!bill || !expense) return

    setFriends(
      friends.map(friend => friend.id === selectedFriends.id? {...friend, balance:friend.balance + value} : friend)
    )

    setBill("")
    setExpense("")
    setPaying("user")
  }

  

 
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriends.name}</h2>

      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍🏽Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
        setExpense(
        Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />

      <label>👨🏾‍🤝‍👨🏿 {selectedFriends.name}'s expense</label>
      <input type="text" value={friendsExpense} disabled />

      <label>❓Who is paying the bill?</label>
      <select value={paying} onChange={(e)=> setPaying(e.target.value)} >
        <option value="user">You</option>
        <option value="friend">{selectedFriends.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default Splitbill;
