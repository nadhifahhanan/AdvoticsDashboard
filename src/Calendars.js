import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useSelector, useDispatch } from 'react-redux'

export default function Calendars(props) {
  const [value, onChange] = useState(new Date());
  console.log(props)

  
  const data = useSelector(state => {
    if(props.startDate) {
        return state.changeDate.startDate
    }
    return state.changeDate.endDate;
 })
  

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={data}
      />
    </div>
  );
}