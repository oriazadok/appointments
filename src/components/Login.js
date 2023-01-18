// import React from 'react'

const Login = () => {
  return (
    <div>
      <h1 className="head">Sign In</h1>
      <div className="form">
        <form action="" method="get">

          <label>Email:</label><br/>
          <input type="email" id="email" name="email" /><br/><br/>
          
          <label>Password:</label><br/>
          <input type="password" id="pwd" name="pwd" /><br/><br/>
    
        </form>
      </div>
    </div>
  )
}

export default Login
