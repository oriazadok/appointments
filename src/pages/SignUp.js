import React from 'react'
import Form from '../components/Form'

// import { useNavigate } from 'react-router-dom';

const SignUp = ({ setauth }) => {

    // const navigate = useNavigate();
    // navigate('/home');
    
    return (
        <div>
            <Form setauth={setauth}/>
            {/* <h1>This is Log in</h1>
            <button>
                onClick = {() => {
                    // history.push('/profile');
                }}
            </button> */}

            
            
        </div>
    )
}

export default SignUp
