import React from 'react'
// import { Redirect } from "react-router-dom"

const Profile = ({ authorized }) => {

    if(! authorized) {
        // return <Redirect  to="/login" />
    }
  return (
    <div>
      <h1>This is profileo</h1>
    </div>
  )
}

export default Profile
