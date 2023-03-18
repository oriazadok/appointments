import React, { useState } from 'react'
import Calendar from 'react-calendar';

import Button from "../components/Button"
import ScheduledAppointments from '../components/ScheduledAppointments';
import HaircutMenu from '../components/HaircutMenu';
// import AvailableHours from './AvailableHours';
import NewAvailableHours from '../components/NewAvailableHours';

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
  const onChange = (chosen_date) => { setDate(chosen_date); }
  const setTime = (h) => { setHour(h); console.log("cudate", date) }

  const logout = () => {
    setauth(false, "");
    navigate("/");
  }

  const send = async (event) => {
    const schedule = {
      style: selected,
      date: date,
      hour: hour, 
    }
    console.log("zzzzzz", schedule)
    event.preventDefault();
    try {
        const response = await fetch('/api/schedule', {
            method: 'POST',
            body: JSON.stringify(schedule),
            headers: { 'Content-Type': 'application/json' },
        });
        const ans = await response.json();
        console.log("anss", ans);

    } catch (error) {
        console.error(error);
    }
  };

  const clear = {
    clear: "left"
  };
  
  const h2 = {
    margin: "10px"
  };

  return (
    <div>
      <Button class_name="logout"
        text={"Log Out"}
        btn_f = {logout} 
      />

      <h1 style={clear}>Hello {uname}</h1>
      <h2 style={h2}>my appoonitments</h2>
      <ScheduledAppointments /> {/* table of scheduled appointments */}

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
          <div className="cal-container"><Calendar onChange={onChange} value={date} d/></div>
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
