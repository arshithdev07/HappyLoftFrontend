import React, { useState } from 'react';
import './login.css';
import LabelInput from '../common/LabelledInput';
import PrimaryButton from '../common/PrimaryButton';

const LoginComponent = (props) => {
    const [isError, setErrorState] = useState(props.isError);
    let isErrorClassName = isError ? "shake-animation active":"shake-animation";
    return(
        <div className="login-page-container">
            <div className="login-container position-center">
                <div className={isErrorClassName}>
                    <LabelInput identifier="username" label="Username" type="text"/>
                    <LabelInput identifier="password" label="Password" type="password"/>
                    <PrimaryButton label="Submit" onClick={() => setErrorState(!isError)}/>
                    <div className="signup-links-container">
                        <a href="/forgot-password">Forgot Password?</a>
                        <a href="/sign-up">New User/Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;