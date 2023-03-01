import React from 'react'
import Button from './Button'
import "../styles/HCMenu.css"

const HairStyle = ({ hairStyle, price, select}) => {

  const setHairStyle = () => {
    select(hairStyle);
  }

  return (
    <div className="hair-style">
      <p>{hairStyle} {price}$ <Button text={"select"}  btn_f={setHairStyle} /> </p>
    </div>
  )
}

export default HairStyle


