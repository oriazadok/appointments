import React, { useState } from 'react'
import Calendar from 'react-calendar';

import Button from "./Button"
import Myappointment from './Myappointment';
import HaircutMenu from './HaircutMenu';
// import AvailableHours from './AvailableHours';
import NewAvailableHours from './NewAvailableHours';

import {  useNavigate } from 'react-router-dom';
// import { Redirect } from "react-router-dom"

import '../styles/Button.css'
import '../styles/Profile.css'
import 'react-calendar/dist/Calendar.css'
import '../styles/Cal.css'


const Profile = ({ setauth, authorized, uname, dataMenu }) => {

  const navigate = useNavigate();

  // if( !authorized ) {
  //   navigate("/");
  // }

  const [showHaircutMenu, setShowHaircutMenu]=useState(false);
  const [selected, setSelected]=useState("");
  const [date, setDate]=useState(new Date());
  const [hour, setHour] = useState("9:00");


  const schedule = () => { setShowHaircutMenu(true); }
  const select = (s) => { setSelected(s); }
  const onChange = (date) => { setDate(date); }
  const setTime = (h) => { setHour(h); }

  const logout = () => {
    setauth(false, "");
    navigate("/");
  }

  const send = async (event) => {
    let schedule = {
      style: selected,
      date: date,
      hour: hour, 
    }
    event.preventDefault();
    try {
        const response = await fetch('/api/schedule', {
            method: 'POST',
            body: JSON.stringify(schedule),
            headers: { 'Content-Type': 'application/json' },
        });
        const ans = await response.json();
        console.log(typeof(ans));

    } catch (error) {
        console.error(error);
    }
};

  return (
    <div>
      <Button class_name="logout"
        text={"Log out"}
        btn_f = {logout} 
      />
      <h1>Hello {uname}</h1>
      <Myappointment />
      {/**
       * here should be data about scheduled Appointments etc
       * general message etc
       */}

      {
        showHaircutMenu === false ?
          <Button class_name="schedule-btn"
            text = "Schedule Now"
            btn_f={schedule}
          /> 
          : null
      }

      { /* haircut menu */ }
      { showHaircutMenu === true ? <HaircutMenu dataMenu={dataMenu} selected={select} /> : null }
      
      {
        selected !== "" ? <p>Selected: {selected}</p> : null
      }

      { /* date */ }
      {
        selected !== "" ? 
        // <Datepicker controls={['calendar']} touchUi={true} inputComponent="input" inputProps={props} />
        //   <input type="date" onChange={e=>setDate(e.target.value)} />
          <div className="cal-container"><Calendar onChange={onChange} value={date} /></div>
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
          <NewAvailableHours fullDate={date} ftime={setTime}/>
          : null
      }

      {/* {
        selected !== "" ? 
          <AvailableHours fullDate={date} time={setTime}/>
          : null
      } */}

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
