import React from 'react'

function Checkbox({formData, setFormData}) {
  return (
    <div className='checkbox-container'>
      <div className='image-radio'>
        <span><input id="image1" type="radio" name="img" value="image1" />
        <label class="drinkcard-cc image1" for="image1"></label></span>
        <span><input id="image2" type="radio" name="img" value="image2" />
        <label class="drinkcard-cc image2" for="image2"></label></span>
        <br></br>
      </div>
      <div className='last-radio'>
        <span>
          <label><input type="radio" id="choice3"
            name="contact" value="choice3" />I want to add this option</label>
        </span>
        <br></br>
        <span>
          <input type="radio" id="choice4"
            name="contact" value="choice4" />
          <label for="choice3">Let me click on this checkbox and choose some cool stuff</label>
        </span>
      </div>
    </div>
  )
}

export default Checkbox