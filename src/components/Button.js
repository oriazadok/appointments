import React from 'react'

const Button = ({ text , btn_f}) => {
    return (
        <button 
        // {style=color="red" }
            onClick={btn_f} 
            className='btn'>
                {text}
        </button>
    )
}

export default Button
