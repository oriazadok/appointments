// import React from 'react'
// import "../styles/Header.css"
import Button from './Button'


const Header = ({signIn, signUp}) => {

  return (
    <header className="App-header">
      <div>
        <h1>Barber Appointments</h1>
        <Button 
          text={'sign In'}
          btn_f = {signIn}/>

        <Button 
          text={'sign Up'}
          btn_f = {signUp}/>
      </div>

      <div>
        
      </div>
    </header>
  )
}

export default Header
