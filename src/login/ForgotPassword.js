import React, { useState } from 'react';
import './login.css';
import LabelInput from '../common/LabelledInput';
import PrimaryButton from '../common/PrimaryButton';
import SuccessMessage from '../common/SuccessMessage';

const ForgotPassword = (props) => {
    const [showEmailSentMessage, changeStatus] = useState(false);
    return(
        <div className="login-page-container">
            <div className="forgot-password-container position-center">
                <h2>Forgot Password?</h2>
                <div style={{display: !showEmailSentMessage ? 'block' : 'none' }}>
                    <LabelInput identifier="username" label="Enter Registered Email ID" type="text"/>
                    <PrimaryButton label="Send" onClick={() => changeStatus(!showEmailSentMessage)}/>
                </div>
                <div style={{display: showEmailSentMessage ? 'block' : 'none' }}>
                    <SuccessMessage text="An email with password reset instructions has been sent to your email address, if it exists on our system."/>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;