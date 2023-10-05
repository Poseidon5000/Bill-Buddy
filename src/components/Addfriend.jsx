import React, { useState } from 'react'
import Button from './Button'

const Addfriend = ({friends, setFriends}) => {
const [name, setName] = useState("")
const [imageUrl, setImageUrl] = useState("")

const id = crypto.randomUUID()
const image = `https://i.pravatar.cc/48?u=${id}`

    function handleSubmit(e){
        e.preventDefault()
    

        const friendData = {
            name,
            image,
            id,
            balance:0,
        }

      

        setFriends([...friends, friendData])
        setName("")
        setImageUrl("")
    }

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleUrlChange(e){
        setImageUrl(image)
    }


  return (
   <form className='form-add-friend' onSubmit={handleSubmit}>
    <label>👨🏾‍🤝‍👨🏿 Friend's name</label>
    <input type='text' value={name} onChange={handleNameChange}/>
   

    
    <label>🎇 Image url</label>
    <input type='text'onClick={handleUrlChange} value={imageUrl} readOnly/>
    

    <Button>Add</Button>
   </form>
  )
}

export default Addfriend