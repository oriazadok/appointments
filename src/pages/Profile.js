import React, { useState } from 'react'
import Calendar from 'react-calendar';
// import { auth } from "../config/firebase-config";
// import { signOut } from "firebase/auth";

import Button from "../components/Button"
import ScheduledAppointments from '../components/ScheduledAppointments';
import HaircutMenu from '../components/HaircutMenu';
import NewAvailableHours from '../components/NewAvailableHours';

import { useNavigate } from 'react-router-dom';
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

  const [showHaircutMenu, setShowHaircutMenu]=useState(false);                  // show haircut menu button
  const [selected, setSelected]=useState("");                                   // selected hair style option
  const [date, setDate]=useState(new Date());                                   // selected date option
  const [hour, setHour] = useState("9:00");                                     // selected hour option


  const schedule = () => { setShowHaircutMenu(true); }
  const select = (s) => { setSelected(s); }
  const onChange = (chosen_date) => { setDate(chosen_date); }
  const setTime = (h) => { setHour(h); }

  // const logout = async() => {
  //   try {
  //       await signOut(auth);
  //   } catch (err) {
  //       console.error(err);
  //   }
  // }
  
  const logout = () => {
    setauth(false, "");
    navigate("/");
  }

  const send = async (event) => {
    const schedule = {
      style: selected,
      date: date.toISOString(),
      hour: hour, 
    }
    console.log("zzz2", schedule)
    event.preventDefault();
    try {
        const response = await fetch('/api/schedule', {
            method: 'POST',
            body: JSON.stringify(schedule),
            headers: { 'Content-Type': 'application/json' },
        });
        const ans = await response.json();
        console.log("zzz3", ans);
        // console.log("zzz4", new Date(Date.parse(ans.date)));
        // console.log("zzz5", ans.hour);

    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div>
      <Button class_name="logout"
        text={"Log Out"}
        btn_f = {logout} 
      />

      <h1 style={{clear: "left"}}>Hello {uname}</h1>
      <h2 style={{margin: "10px"}}>my appoonitments</h2>
      {/* table of scheduled appointments */}
      <ScheduledAppointments /> 

      {/* showHaircutMenu button  */}
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
          <div className="cal-container"><Calendar onChange={onChange} value={date} /></div>
        : null
      }
      
      {
        selected !== "" ? 
          <p> Date: {date.toDateString()} </p>
          : null
      }

      { /* avaliable hours */ }
      {
        selected !== "" ? 
          <NewAvailableHours fullDate={date} ftime={setTime}/>
          : null
      }

      {
        selected !== "" && hour !== "0" ? 
          <p>Selected hour: {hour}</p>
          : null
      }

      {
        selected !== "" && hour !== "0" ? 
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
