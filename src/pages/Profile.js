import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';

import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";

import Button from "../components/Button"
import ScheduledAppointments from '../components/ScheduledAppointments';
import HaircutMenu from '../components/HaircutMenu';
import NewAvailableHours from '../components/NewAvailableHours';


import '../styles/Button.css'
import '../styles/Profile.css'
import 'react-calendar/dist/Calendar.css'
import '../styles/Cal.css'

const Profile = ({ authorized, setauth, userCredential, dataMenu }) => {

  const navigate = useNavigate();

  if( !authorized ) {
    navigate("/");
  }

  const [uname, setUname]=useState(false);                  // show haircut menu button
  const [appointmentslist, setAppointmentslist]=useState([]);                  // show haircut menu button
  const [showHaircutMenu, setShowHaircutMenu]=useState(false);                  // show haircut menu button
  const [selected, setSelected]=useState("");                                   // selected hair style option
  const [date, setDate]=useState(new Date());                                   // selected date option
  const [hour, setHour] = useState("9:00");                                     // selected hour option


  const schedule = () => { setShowHaircutMenu(true); }
  const select = (s) => { setSelected(s); }
  const onChange = (chosen_date) => { setDate(chosen_date); }
  const setTime = (h) => { setHour(h); }

  useEffect((event) => {
  const fetchData = async () => {
    try {
      // Fetch data from the database
      const uid = userCredential.user.uid;
      const response = await fetch(`/api/unameAndAppointmentsList?uid=${uid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      console.log("datatat: ", data.appointments);
      
      // Update the state with the fetched data
      setUname(data.uname);
      setAppointmentslist(data.appointments.appointments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
}, [appointmentslist]);

    
    
  //   // Call the fetchData function
  //   fetchData();
  // }, [userCredential.user.uid, appointmentslist]); // Include appointmentslist in the dependency array
  

  const logout = async() => {
    try {
        await signOut(auth);
        setauth(false, null);
        navigate("/");
    } catch (err) {
        console.error(err);
    }
  }

  const send = async (event) => {
    const dataToSchedule = {
      style: selected,
      date: date.toISOString(),
      hour: hour, 
    }
    const uid = userCredential.user.uid;
    try {
      const response = await fetch('/api/schedule', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uid, dataToSchedule})
      });

      const res = await response.json();

      if (response.ok) {
        console.log('Field updated successfully', res);
        setAppointmentslist(res.appointments);
        // Handle any further actions if needed
      }
    } catch (error) {
      console.error('Error updating field:', error);
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
      <ScheduledAppointments appointmentslist={appointmentslist}/> 

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
