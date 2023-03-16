import React from 'react'
import Button from './Button'
import "../styles/HCMenu.css"

const HairStyle = ({ hairStyle, price, select}) => {

  const setHairStyle = () => {
    select(hairStyle);
  }

  return (
    <div className="hair-style">
      <p>{hairStyle}</p> <p>{price}$</p> <Button text={"select"}  btn_f={setHairStyle} class_name={"select-button"}/> 
    </div>
  )
}

export default HairStyle


