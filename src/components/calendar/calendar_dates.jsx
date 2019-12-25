import React from 'react'

/*
  Calender dates listing components
*/

const CalendarDates = (props) => {
  const { weekDates } = props
  return weekDates.map((wkDate) => (
    <div key={new Date().getTime() + Math.random()} className="calendar--week__date py-sm-2 float-left">
      {wkDate}
    </div>
  ))
}

export default CalendarDates
