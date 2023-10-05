import React, { useState } from "react";
import Friendslist from "./components/Friendslist";
import Addfriend from "./components/Addfriend";
import Button from "./components/Button";
import Splitbill from "./components/Splitbill";
import Logo from "./components/Logo";



function App(){
  const [addFriendForm, setAddFriendForm] = useState(false)

  function handleShowAddFriend(){
    setAddFriendForm(console.log("hello"))
  }

  return(
    <>
    <Logo/>
    <div className="app">
   
      <div className="sidebar">
        <Friendslist />
        {addFriendForm &&   <Addfriend />}
      
        <Button onClick ={handleShowAddFriend} >Add friend</Button>
    
      </div>

      <Splitbill />
    </div>
    </>
  
  )
}


export default App;