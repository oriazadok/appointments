import React from 'react'
import Button from './Button'

const HairStyle = ({ hairStyle, price, select}) => {

  const setHairStyle = () => {
    select(hairStyle);
  }

  return (
    <div>
      <p>{hairStyle} {price}$ <Button text={"select"}  btn_f={setHairStyle} /> </p>
    </div>
  )
}

export default HairStyle
