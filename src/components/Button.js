import React from 'react'
import '../styles/Button.css'

const Button = ({ text , btn_f, val, class_name}) => {

    const func = () => {
        btn_f(val)
    }

    if(val) {
        return (
            <button
            // {style=color="red" }
                onClick={func} 
                className={`btn ${class_name}`}>
                    {text}
            </button>
        )
    } else {
        return (
            <button
            // {style=color="red" }
                onClick={btn_f} 
                className={`btn ${class_name}`}>
                    {text}
            </button>
        )
    }
}

export default Button
