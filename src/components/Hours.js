import React from 'react'

const Hours = ({ date }) => {

    let time = new Date(date);
    let hours = time.getHours();
    let minutes = time.getMinutes();

    var index = 0;
    return (
        <div>
        <p key={index}>{hours}:{minutes}</p>
        </div>
    )
}

export default Hours
