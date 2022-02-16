import React from 'react'

function Checkbox({formData, setFormData}) {
  const handleInputChange = e => {
    const {name, value} = e.target;
    console.log(name, value);
    setFormData({ ...formData, choiceTwo: value })
  }

  const handleInputChange2 = e => {
    const {name, value} = e.target;
    console.log(name, value);
    setFormData({ ...formData, choiceThree: value })
  }

  return (
    <div className='checkbox-container'>
      <div className='image-radio'>
        <span><input id="image1" type="radio" name="img" value="image1" onChange={handleInputChange}/>
        <label class="drinkcard-cc image1" for="image1"></label></span>
        <span><input id="image2" type="radio" name="img" value="image2" onChange={handleInputChange}/>
        <label class="drinkcard-cc image2" for="image2"></label></span>
        <br></br>
      </div>
      <div className='last-radio'>
        <span>
          <label><input type="radio" id="choice3"
            name="contact" value="1" onChange={handleInputChange2}/>I want to add this option</label>
        </span>
        <br></br>
        <span>
          <input type="radio" id="choice4"
            name="contact" value="2" onChange={handleInputChange2}/>
          <label for="choice3">Let me click on this checkbox and choose some cool stuff</label>
        </span>
      </div>
    </div>
  )
}

export default Checkbox