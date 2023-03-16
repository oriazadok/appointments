import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import "../styles/Form.css"

import { auth, googleProvider } from "../config/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// import { async } from '@firebase/util';

const Form = ({ setauth }) => {

    // const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch(err) {
            console.error(err);
        }
    };

    const logout = async() => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    const show = () => {
        setFormData({na: "ccwe"});
        console.log(formData);
    };



    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await fetch('/api/submit', {
    //             method: 'POST',
    //             body: JSON.stringify(formData),
    //             headers: { 'Content-Type': 'application/json' },
    //         });
    //         const ans = await response.json();
    //         console.log(ans);

    //         if(!ans){
    //             window.alert("Registered succesfully!");
    //             setauth(true, formData.uname);
    //             navigate('/SignIn/');
    //             // navigate('/');
    //         } else {
    //             window.alert("You already have an acount!");
    //             navigate('/');
    //         }
            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleChange = (event) => {
        // if(event.target.value === "email") {}
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        // console.log("fdfd", formData);
    };
    
    let days = [];
    for( let i = 0; i <31; i++ ) { days[i] = i + 1 }

    let months = [];
    for( let i = 0; i <12; i++ ) { months[i] = i + 1 }

    const y = new Date().getFullYear();
    let years = [];
    let index = 0;
    for( let i = y; i >= 1940; i-- ) { years[index++] = i }

    return (
        <div>
            <h1 className="head">Sign Up</h1>
            <div className="form">
                {/* <form action="" method="get"> */}
                <form>
                    <label>First name:</label><br/>
                    <input type="text" id="fname" name="fname" required onChange={handleChange}/><br/>

                    <label>Last name:</label><br/>
                    <input type="text" id="lname" name="lname" required onChange={handleChange}/><br/>
            
                    <label>User name:</label><br/>
                    <input type="text" id="uname" name="uname" required onChange={handleChange}/><br/>
                
                    <label>Email:</label><br/>
                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)}/><br/><br/>
                    <label>Password:</label><br/>
                    <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/><br/><br/>
            
                    <input type="radio" id="male" name="gender" required value="MALE" onChange={handleChange}/>
                    <label> male</label><br/>
                    <input type="radio" id="female" name="gender" required value="FEMALE" onChange={handleChange}/>
                    <label> female</label><br/><br/>

                    {/* type="number" */}
                    <label> Day: </label>
                    <input name="day" list="days" size="12" required onChange={handleChange}/>
                    <datalist id="days">
                        {days.map((op, index) => <option key={index}>{op}</option>)} 
                    </datalist>

                    
                    <label> Month: </label>
                    <input name="month" list="months" size="12" required onChange={handleChange}/>
                    <datalist id="months">
                        {months.map((op, index) => <option key={index}>{op}</option>)} 
                    </datalist>

                    <label> Year: </label>
                    <input name="year" list="years" size="12" required onChange={handleChange}/>
                    <datalist id="years">
                        {years.map((op, index) => <option key={index}>{op}</option>)} 
                    </datalist><br/><br/>

                    {/* <input type="submit" value="Sign Up" /> */}
                    <button onClick={signIn}>create</button>
                </form>
                <button onClick={show}>show</button>
                <button onClick={signInWithGoogle}>sign in with google</button>
                <button onClick={logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Form
