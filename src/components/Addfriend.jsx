import React from 'react'
import Button from './Button'

const Addfriend = () => {
  return (
   <form className='form-add-friend'>
    <label>👨🏾‍🤝‍👨🏿Friend name</label>
    <input type='text'/>

    
    <label>🎇 Image url</label>
    <input type='text'/>

    <Button>Add</Button>
   </form>
  )
}

export default Addfriend