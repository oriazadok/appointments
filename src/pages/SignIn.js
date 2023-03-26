import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'
import { useState } from 'react'
// import LogIn from '../components/Header';
// import Profile from "./Profile.js"

const SignIn = ({ setauth, authorized, uname, dataMenu }) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [err, setErr] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        });
        const uname = await response.json();
        console.log("uname", uname);

        if(uname) {
          setauth(true, uname);
          navigate('/profile/');
        } else {
          setErr(true);
        }
    } catch (error) {
        console.error(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
    // console.log("fdfd", formData);
  };

  // const signIn = ( formdata ) => {
  //   // navigate('SignIn/');
  //   navigate('profile/');
  // }
  const signUp = () => {
    navigate('/signup');
  }

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

        {err ? <p>please try again</p> : null}
        
        {/* <Button 
          text={'sign In'}
          btn_f = {signIn}/> */}

        <Button 
          text={'sign Up'}
          btn_f = {signUp}/>
      </div>

    </header>
  )
}

export default SignIn
