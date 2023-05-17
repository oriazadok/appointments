import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

import Form from '../components/Form'

const SignUp = ({ setauth }) => {

    const navigate = useNavigate();

    const signUpAndSignIn = async (formData) => {

        try {
            const response = await fetch('/api/signUp', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });
            await response.json();
            // console.log("user record", userRecord);

            if (response.ok) {
                const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);

                setauth(true, userCredential);
                navigate("/profile");
            } else {
                // Handle error response
                console.error('Sign-up request failed:', response.status);
            }
            
        } catch (error) {
            console.error(error);
        }
        
    };
    
    return (
        <div>
            <Form signUp={signUpAndSignIn}/>
        </div>
    )
}

export default SignUp
