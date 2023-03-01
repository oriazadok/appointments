import { useState } from "react"
// import PropTypes from 'prop-types'

const AvailableHours = ({ fullDate, time }) => {

  const [value, setValue] = useState("9:00");

  const handleChange = (event) => {
    setValue(event.target.value);
    time(value);
    console.log("val", value);
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

  // console.log("hours are: ");
  // for( let i = 0; i < len*2; i++ ) { 
  //   console.log(hours[i]);
  // }
  // console.log("hours done ");

  var index = 0;

  const calcTime = (time) =>  {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if(minutes === 0) {
      return `${hours}:00`
    }
    return `${hours}:${minutes}`
  }
  

  return (
    <div>
      <p>avaliable hours</p>

      <select value={value} onChange={handleChange}>
      {hours.map((t) => <option key={index++} >{calcTime(t)}</option>)}
      </select>

      <p>Selected hour: {value}</p>


    </div>
  )
}

// AvailableHours.defaultProps = {
//   fullDate: new Date(1, 2, 3),
//   etc
// }

// AvailableHours.propTypes = {
//   title: PropTypes.string.isRequired,
// }



export default AvailableHours
