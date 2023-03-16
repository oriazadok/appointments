import { useState } from "react"
import Button from "./Button";

import "../styles/AvailableHours.css"

const NewAvailableHours = ({ fullDate, ftime }) => {
    const [time, setTime] = useState("9:00");

    const cdate = (fulldate) => {
        let date = new Date(fulldate);
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    const handleChange = (val) => {
      setTime(val);
      ftime(time);
      console.log("tttval", time);
    }
  
    let date = new Date(fullDate);
    let hours = [];
  
    let len = 0;
    let day = date.getDay();
    
    if(day === 5) { len = 7; }
    else if(day < 5) { len = 10; }
  
    date.setHours(0,0,0);
  
    for(let i = 9 ; i < len + 9; i++) { 
      date.setHours(i);
  
      let newDate = new Date(date);
      hours.push(newDate);
  
      let newDate2 = new Date(date);
      newDate2.setMinutes(30);
      hours.push(newDate2);
    }
  
    const calcTime = (time) =>  {
      let hours = time.getHours();
      let minutes = time.getMinutes();
      if(minutes === 0) {
        return `${hours}:00`
      }
      return `${hours}:${minutes}`
    }

    const currDate = cdate(fullDate);
  
    return (
      <div>
        <h6>Curr Date: {currDate}</h6>
        <div className="hours hour-button">
          {/* {hours.map((t, index) => {<Button key={index} text={calcTime(t)} />)} */}
          {hours.map((t, index) => {
              return <Button key={index} text={calcTime(t)} btn_f={handleChange} val={calcTime(t)}/>
            })
          }
        </div>
        <p>Selected hour: {time}</p>
      </div>
    )
  
}

export default NewAvailableHours



