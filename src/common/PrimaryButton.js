import React from 'react';

const PrimaryButton = (props) => {
    return(
        <button className="primary-button" onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default PrimaryButton;