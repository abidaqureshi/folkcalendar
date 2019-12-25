import React from 'react'
/*
  Calendar day listing component
*/

const CalendarDays = (props) => {
  const { weekdDays } = props

  return weekdDays.map((v) => (
    <div className="calendar--week__day py-sm-2 float-left">
      {v}
    </div>
  ))
}

export default CalendarDays
