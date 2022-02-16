import React from 'react'

function Message({formData, setFormData}) {
  return (
    <div className='message-container'>
      <div className='message-in'>
        <label for="message">Message</label>
        <textarea name="message" type="text" value={formData.message} onChange={(event) => setFormData({...formData, message :event.target.value})}/>
      </div>
      <div className='message-radio'  >
        <input type="radio" id="choice1"
          name="contact"/>
        <label for="choice1">Number one</label>

        <input type="radio" id="choice2"
          name="contact" />
        <label for="choice2">Number two</label>
      </div>
    </div>

  )
}

export default Message