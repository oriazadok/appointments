// import { useNavigate } from 'react-router-dom';
// import Button from '../components/Button'
import { useState } from 'react'

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

const SignIn = ({ setauth, authorized, uname, dataMenu }) => {

  // const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  // const [err, setErr] = useState(false);

  const handleSubmit = async (event) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Signed in 
      const user = userCredential.user;
      console.log("User signed in: ", user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
  };

  return (

    <header className="App-header"> {/* this line make an affect on the background color */}
      <div>
        <h1>Barber Appointments</h1>

        <h1 className="head">Sign In</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>

            <label>Email:</label><br/>
            <input type="email" id="email" name="email" required onChange={handleChange}/><br/><br/>
            
            <label>Password:</label><br/>
            <input type="password" id="password" name="password" required onChange={handleChange}/><br/><br/>

            <input type="submit" value="Sign In" />
      
          </form>
        </div>

        {/* {err ? <p>please try again</p> : null} */}
      </div>

    </header>
  )
}

export default SignIn
