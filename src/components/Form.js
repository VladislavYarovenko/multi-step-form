import React, { useState } from 'react';
import Checkbox from './Checkbox';
import SignUp from './SignUp';
import Message from './Message';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import app from "./firebase";
import { getDatabase, ref, push, onValue, query, limitToLast } from "firebase/database";

function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Sign Up", "Message", "Checkbox"];
    var userID = "userID";
    const db = getDatabase(app);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        address: "",
        message: "",
        choiceOne: "",
        choiceTwo: "",
        choiceThree: "",
    });
            
    function getEmails(formData) {
        const emailRef = ref(db, 'users/');
        const emails = [];
        onValue(emailRef, (snapshot) => {
            const data = snapshot.val();
            const keys = Object.keys(data);
            keys.forEach(function (key) {
                emails.push(data[key].email);
            });
        });
        console.log(emails);
        submitData(formData, emails);
    };
        
    function submitData(formData, emails) {
        if (emails.includes(formData.email)) {
            alert('This email is already taken!');
        } else {
            push(ref(db, 'users/'), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                dateOfBirth: formData.dateOfBirth,
                email: formData.email,
                address: formData.address,
                message: formData.message,
                choiceOne: formData.choiceOne,
                choiceTwo: formData.choiceTwo,
                choiceThree: formData.choiceThree,
            });
        }

    };

    const pageDisplay = () => {
        if (page === 0) {
            return <SignUp formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <Message formData={formData} setFormData={setFormData} />;
        } else {
            return <Checkbox formData={formData} setFormData={setFormData} />;
        }
    }
    return (

        <div className="form">

            <div className="form-container">
                <div className='form-container2'>
                    <div className='progress'>
                        <Stepper activeStep={page}>
                            {FormTitles.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </div>
                    <div className="header"><h1>{FormTitles[page]}</h1></div>
                    <div className="body">{pageDisplay()}</div>
                    <div className="footer">
                        {page > 0 && <button
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}>Back</button>}
                        {page < 2 && <button
                            onClick={() => {
                                setPage((currPage) => currPage + 1);
                            }}>Next Step</button>}
                        {page === 2 && <button onClick={() => { getEmails(formData) }}>Submit</button>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Form