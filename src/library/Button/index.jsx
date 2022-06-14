import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <div className={'button'}>{props.label}</div>
)
}

export default Button;
