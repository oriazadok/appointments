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
            const userRecord = await response.json();
            console.log(userRecord);

            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            // Signed in 
            const user = userCredential.user;
            console.log("User signed in: ", user);
            
        } catch (error) {
            console.error(error);
        }
        navigate("/profile");
    };
    
    return (
        <div>
            <Form signUp={signUpAndSignIn}/>
        </div>
    )
}

export default SignUp
