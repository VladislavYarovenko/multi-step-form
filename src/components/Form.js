import React, { useState } from 'react';
import Checkbox from './Checkbox';
import SignUp from './SignUp';
import Message from './Message';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Sign Up", "Message", "Checkbox"];

    const pageDisplay = () => {
        if (page === 0) {
            return <SignUp />;
        } else if (page === 1) {
            return <Message />;
        } else {
            return <Checkbox />;
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
                        {page === 2 && <button>Submit</button>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Form