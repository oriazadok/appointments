import { useState } from 'react'
import "../styles/Form.css"

const Form = ({ signUp }) => {

    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp(formData);
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
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
                <form onSubmit={handleSubmit}>
                    <label>First name:</label><br/>
                    <input type="text" id="fname" name="fname" required onChange={handleChange}/><br/>

                    <label>Last name:</label><br/>
                    <input type="text" id="lname" name="lname" required onChange={handleChange}/><br/>
            
                    <label>User name:</label><br/>
                    <input type="text" id="uname" name="uname" required onChange={handleChange}/><br/>
                
                    <label>Email:</label><br/>
                    <input type="email" id="email" name="email" required onChange={handleChange}/><br/><br/>
                    <label>Password:</label><br/>
                    <input type="password" id="password" name="password" required onChange={handleChange}/><br/><br/>
            
                    <input type="radio" id="male" name="gender" required value="MALE" onChange={handleChange}/>
                    <label> male</label><br/>
                    <input type="radio" id="female" name="gender" required value="FEMALE" onChange={handleChange}/>
                    <label> female</label><br/><br/>

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

                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    )
}

export default Form
