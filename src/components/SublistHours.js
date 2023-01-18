import React from 'react'
import Hours from './Hours';

const SublistHours = ({ sublist }) => {
    const list = sublist;
    let index = 0;
  return (
    <div>
      <ul>
        {list.map((t) => <li key={index++}>{<Hours date={t} />}</li>)}
    </ul>
    </div>
  )
}

export default SublistHours
