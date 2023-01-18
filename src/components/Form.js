// import React from 'react'
import "../styles/Form.css"

const Form = () => {
    
    let days = [];
    for( let i = 0; i <31; i++ ) { days[i] = i + 1 }

    let months = [];
    for( let i = 0; i <12; i++ ) { months[i] = i + 1 }

    const y = new Date().getFullYear();
    let years = [];
    for( let i = 1940; i <=y; i++ ) { years[i] = i }

    return (
        <div>
            <h1 className="head">Sign Up</h1>
            <div className="form">
                <form action="" method="get">
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" /><br/>

                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" /><br/>
            
                    <label for="uname">User name:</label><br/>
                    <input type="text" id="uname" name="uname" /><br/>
                
                    <label for="pwd">Password:</label><br/>
                    <input type="password" id="pwd" name="pwd" /><br/><br/>
                    <label for="email">Email:</label><br/>
                    <input type="email" id="email" name="email" /><br/><br/>
            
                    <input type="radio" id="male" name="gender" value="MALE" />
                    <label for="male">male</label><br/>
                    <input type="radio" id="female" name="gender" value="FEMALE" />
                    <label for="female">female</label><br/><br/>

                    {/* type="number" */}
                    <label for="day">Day: </label>
                    <input list="days" size="12"/>
                    <datalist id="days">
                        {days.map((op) => <option>{op}</option>)} 
                    </datalist>

                    
                    <label for="month"> Month: </label>
                    <input list="months" size="12" />
                    <datalist id="months">
                        {months.map((op) => <option>{op}</option>)} 
                    </datalist>

                    <label for="year"> Year: </label>
                    <input list="years" size="12" />
                    <datalist id="years">
                        {years.map((op) => <option>{op}</option>)} 
                    </datalist><br/><br/>

                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    )
}

export default Form
