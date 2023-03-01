import React from 'react'
import "../styles/Table.css"

const Myappointment = ({ appointmentslist }) => {

    const list = {
        "27/02/2023": "10:30",
        "29/02/2023": "10:30",
        "15/03/2023": "10:30",
        "18/03/2023": "10:30"
    }

    const rows = Object.entries(list).map(([date, time]) => (
        <tr key={date}>
          <td>{date}</td>
          <td>{time}</td>
        </tr>
      ));

  return (
    <div>
        <h1>my appoonitments</h1>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Hour</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
  )
}

export default Myappointment
