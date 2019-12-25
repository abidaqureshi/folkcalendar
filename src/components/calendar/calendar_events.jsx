import React from 'react'

/*
  Calender event listing components
*/

const drawEvents = (date, holidaysObject) => {
  const dateArray = date.split('.')
  const dateStr = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
  if (holidaysObject.hasOwnProperty(dateStr)) {
    return holidaysObject[dateStr].map((event) => (
      <div className={`calendar--events__${event.type} py-sm-3 py-lg-3 my-sm-2 my-lg-2`}>
        {event.name}
      </div>
    ))
  }
  return <div />
}

const CalendarEvents = (props) => {
  const { weekHolidays, weekDates } = props
  return (
    weekDates.map((d) => (
      <div className="calendar--week__date py-sm-2 float-left">
        {drawEvents(d, weekHolidays)}
      </div>
    ))

  )
}

export default CalendarEvents
