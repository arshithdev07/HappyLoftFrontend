import React from 'react';
import LabelInput from '../common/LabelledInput';
import PrimaryButton from '../common/PrimaryButton';

const SignUp = () => {
    return (
        <div className='app-main-page-container grid'>
            <h1 className="page-title">New Member Signup</h1>
            <div className="signup-form-scrollwindow">
                <form className="sign-up-form">
                    <LabelInput identifier="firstname" label="First Name" type="text"/>
                    <LabelInput identifier="lastname" label="Last Name" type="text"/>
                    <LabelInput identifier="email" label="EMail" type="text"/>
                    <LabelInput identifier="password" label="Password" type="password"/>
                    <LabelInput identifier="confirmpassword" label="Re-enter Password" type="password"/>
                    <LabelInput identifier="contact" label="Phone" type="number"/>
                    <LabelInput identifier="address1" label="Address Line 1" type="text"/>
                    <LabelInput identifier="address2" label="Address Line 2" type="text"/>
                    <LabelInput identifier="city" label="City" type="text"/>
                    <LabelInput identifier="state" label="State" type="text"/>
                    <LabelInput identifier="zipcode" label="ZipCode" type="number"/>
                    <PrimaryButton label="Create Account"/>
                </form>
            </div>
        </div>
    );
}

export default SignUp;