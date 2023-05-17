import "../styles/Table.css"

const ScheduledAppointments = ({ appointmentslist }) => {

    // const list = {
    //     "27/02/2023": "10:30",
    //     "29/02/2023": "10:30",
    //     "15/03/2023": "10:30",
    //     "18/03/2023": "10:30"
    // }

    console.log(appointmentslist);
    console.log("ty", typeof(appointmentslist));


    if (appointmentslist === undefined || appointmentslist.length === 0) {
        return (
          <div>
            <p>You don't have any appointments yet.</p>
          </div>
        );
    } else {
        const rows = appointmentslist.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.date}</td>
            <td>{appointment.hour}</td>
            <td>{appointment.style}</td>
          </tr>
        ));
    
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Hour</th>
                  <th>Style</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        );
      }
}

export default ScheduledAppointments
