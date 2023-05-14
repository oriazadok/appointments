import React from 'react'
import Form from '../components/Form'

const SignUp = ({ setauth }) => {

    const signUp = async (formData) => {
        
        try {
            const response = await fetch('/api/signUp', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });
            const ans = await response.json();
            console.log("anss", ans);
    
        } catch (error) {
            console.error(error);
        }
    };


 
    return (
        <div>
            <Form signUp={signUp}/>
        </div>
    )
}

export default SignUp
