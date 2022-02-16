import React from 'react'

function Message() {
  return (
    <div className='message-container'>
      <div className='message-in'>
        <label for="message">Message</label>
        <textarea name="message" type="text" />
      </div>
      <div className='message-radio'>
        <input type="radio" id="choice1"
          name="contact" value="choice1" />
        <label for="choice1">Number one</label>

        <input type="radio" id="choice2"
          name="contact" value="choice2" />
        <label for="choice2">Number two</label>
      </div>
    </div>

  )
}

export default Message