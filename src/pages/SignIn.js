import React from 'react'
import Profile from "../components/Profile.js"

const SignIn = ({ setauth, authorized, uname, dataMenu }) => {
  return (
    <div>
      {/* <h1>Hello {user}</h1> */}
      <Profile setauth={setauth} authorized={authorized} uname={uname} dataMenu={dataMenu}/>
    </div>
  )
}

export default SignIn
