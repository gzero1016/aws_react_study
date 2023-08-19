import React from 'react';

function Input({ type, name, isDisabled, isAutoFocus, placeholder, onChange, onKeyUp }) {
    return (
        <>
            <input type={type}
            name={name}
            disabled={isDisabled}
            autoFocus={isAutoFocus}
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUp}
            />
        </>
    );
}

Input.defaultProps = {
    type: "text",
    isDisabled:false,
    isAutoFocus: false,
    placeholder: "",
    value: "",
    onChange: null,
    onKeyUp: null
}

export default Input;