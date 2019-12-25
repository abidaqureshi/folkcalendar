import React from 'react'
/*
  Calendar day listing component
*/

const CalendarDays = (props) => {
  const { weekdDays } = props

  return weekdDays.map((v) => (
    <div key={new Date().getTime() + Math.random()} className="calendar--week__day py-sm-2 float-left">
      {v}
    </div>
  ))
}

export default CalendarDays
