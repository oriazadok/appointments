import React from 'react'
import '../styles/Button.css'

const Button = ({ text , btn_f, class_name}) => {
    return (
        <button
        // {style=color="red" }
            onClick={btn_f} 
            className={`btn ${class_name}`}>
                {text}
        </button>
    )
}

// function MyComponent(props) {
//     if (props.myProp) {
//       // do something with the prop
//     } else {
//       console.log('myProp is not defined');
//     }
    
//     return (
//       // your component's JSX here
//     );
//   }


export default Button
