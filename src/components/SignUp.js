import React from 'react'

function SignUp({ formData, setFormData }) {
  return (
    <div className='sign-up-container'>
        <div className='group'>
          <label for="fName">First Name</label>
          <input type="text" name="fName" value={formData.firstName} onChange={(event) => setFormData({ ...formData, firstName: event.target.value })} />
          <label for="lName">Last Name</label>
          <input type="text" name="lName" value={formData.lastName} onChange={(event) => setFormData({ ...formData, lastName: event.target.value })} />
        </div>
        <div className='group'>
          <label for="date">Date of Birth</label>
          <input name="date" type="date"
            value={formData.dateOfBirth}
            onChange={(event) => setFormData({ ...formData, dateOfBirth: event.target.value })} />
        </div>
        <div className='mailValid'>
          <label for="mail">Email Address</label>
          <input name="mail" type="email"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required />
          <span>Error message</span>
        </div>

        <div name="address" className='address'>
          <label for="address">Address</label>
          <input name="address" type="text" value={formData.address} onChange={(event) => setFormData({ ...formData, address: event.target.value })} />
        </div>
    </div>
  )
}

export default SignUp