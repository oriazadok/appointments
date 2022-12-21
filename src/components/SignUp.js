import React from 'react'
import "../styles/SignUp.css"

const SignUp = () => {
  return (
    <div>
        <h1 class="head">Sign Up</h1>
            <div class="form">
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

                    {/* put here birth date */}
                    {/* need to make a script for content of the date */}

                    <label for="day">Day</label>
                    <input list="days" size="18" />
                    <datalist id="days">
                        <option value="Internet Explorer" />
                        <option value="Firefox" />
                        <option value="Chrome" />
                        <option value="Opera" />
                        <option value="Safari" />
                    </datalist>

                    <label for="month">Month</label>
                    <input list="browsers" size="18" />
                    <datalist id="browsers">
                        <option value="Internet Explorer" />
                        <option value="Firefox" />
                        <option value="Chrome" />
                        <option value="Opera" />
                        <option value="Safari" />
                    </datalist>

                    <label for="year">Year</label>
                    <input list="browsers" size="18" />
                    <datalist id="browsers">
                        <option value="Internet Explorer" />
                        <option value="Firefox" />
                        <option value="Chrome" />
                        <option value="Opera" />
                        <option value="Safari" />
                    </datalist><br/><br/>

                    <input type="submit" value="Sign Up" />
                </form>
            </div>
    </div>
  )
}

export default SignUp
