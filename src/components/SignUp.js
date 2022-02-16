import React, { useState, Component } from 'react'
import db from "./firebase";
import { ref, set } from "firebase/database";


function SignUp() {

    const [fName, setfName] = useState('FirstName');
    const [lName, setlName] = useState('LastName');

    function writeUserData(fName, lName) {
        set(ref(db, 'users/'), {
          FirstName: fName,
          LastName: lName,
        });
      }

      const handleChange = (e) => {
        setfName(e.target.value);
      };
      const createName = (event) => {
        event.preventDefault();
        const nameRef = db().ref("Name");
        const name = {
          fName,
        };
        nameRef.push(name);
        setfName("");
      };

    return (
        <div className='sign-up-container'>
            <div className='group'>
                <label for="fName">First Name</label>
                <input type="text" name="fName" onChange={handleChange}/>
                <label for="lName">Last Name</label>
                <input type="text" name="lName"/>
            </div>
            <div className='group'>
                <label for="date">Date of Birth</label>
                <input name="date" type="date" />
                <label for="mail">Email Address</label>
                <input name="mail" type="email" />
            </div>
            
            <div name="address" className='address'>
            <label for="address">Address</label>
                <input name="address" type="text" />
            </div>

        </div>
    )
}

export default SignUp