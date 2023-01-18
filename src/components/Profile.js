import React, { useState } from 'react'
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css'
import '../styles/Cal.css'

import Button from "./Button"
import HaircutMenu from './HaircutMenu';
import AvailableHours from './AvailableHours';
// import { Redirect } from "react-router-dom"

const Profile = ({ authorized }) => {

  // if(! authorized) {
  //     // return <Redirect  to="/login" />
  // }


  const [showHaircutMenu, setShowHaircutMenu]=useState(false);
  const [selected, setSelected]=useState("");
  const [date, setDate]=useState(new Date());

  const schdule = () => { setShowHaircutMenu(true); }
  const select = (s) => { setSelected(s); }
  const onChange = (date) => { setDate(date); }

  const send = () => {
    console.log("sending")
  }

  return (
    <div>
      <h1>Hello User</h1>
      {/**
       * here should be data about scheduled Appointments etc
       * general message etc
       */}

      {
        showHaircutMenu === false ?
          <Button 
            text = "Schedule Now"
            btn_f={schdule}
          /> 
          : null
      }

      { /* haircut menu */ }
      { showHaircutMenu === true ? <HaircutMenu selected={select} /> : null }
      
      {
        selected !== "" ? <p>Selected: {selected}</p> : null
      }

      { /* date */ }
      {
        selected !== "" ? 
        // <Datepicker controls={['calendar']} touchUi={true} inputComponent="input" inputProps={props} />
        //   <input type="date" onChange={e=>setDate(e.target.value)} />
          <Calendar onChange={onChange} value={date} />
        : null
      }
      
      {
        selected !== "" ? 
          <p>Selected Date: {date.toDateString()} </p>
          : null
      }

      { /* avaliable hours */ }

      {
        selected !== "" ? 
          <AvailableHours fullDate={date}/>
          : null
      }

      {
        selected !== "" ? 
          <Button text="save" btn_f={send}/>
          : null
      }
      
      
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    

    
  )
}

export default Profile
