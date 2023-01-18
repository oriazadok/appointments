// import React from 'react'
// import "../styles/Header.css"
import Button from './Button'
import Login from './Login'


const Header = ({ signIn, signUp }) => {

  return (
    <header className="App-header"> {/* this line make an affect on the background color */}
      <div>
        <h1>Barber Appointments</h1>

        <Login />
        
        <Button 
          text={'sign In'}
          btn_f = {signIn}/>

        <Button 
          text={'sign Up'}
          btn_f = {signUp}/>
      </div>

    </header>
  )
}

export default Header
