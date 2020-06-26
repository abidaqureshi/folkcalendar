import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/calendar.scss'
import CalendarDays from '../../components/calendar/calendar_days'
import CalendarDates from '../../components/calendar/calendar_dates'
import CalendarEvents from '../../components/calendar/calendar_events'
import Navigation from '../../components/calendar/navigation'
import { generateDays } from '../../utility/helpers'

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      startDateObj: new Date(),
      firstDayOfTheWeek: 0,
    }
  }

  componentDidMount() {
    const { getCalendarHolidays } = this.props
    const { startDateObj, firstDayOfTheWeek } = this.state
    const weekObject = generateDays(startDateObj, firstDayOfTheWeek, 'Ymd', '-')
    const weekStartDate = weekObject.dates[0]
    const weekEndDate = weekObject.dates.pop()
    getCalendarHolidays(weekStartDate, weekEndDate)
  }

  getNewWeek = (startDate, firstDayOfTheWeek) => {
    const { getCalendarHolidays } = this.props

    const weekObject = generateDays(startDate, firstDayOfTheWeek, 'Ymd', '-')
    const weekStartDate = weekObject.dates[0]
    const weekEndDate = weekObject.dates.pop()
    getCalendarHolidays(weekStartDate, weekEndDate)
    this.setState({
      startDateObj: startDate,
      firstDayOfTheWeek,
    })
  }

  render() {
    const { events } = this.props
    const {
      holidays,
      error,
      reason,
      loader,
    } = events
    const { startDateObj, firstDayOfTheWeek } = this.state
    const weekObject = generateDays(startDateObj, firstDayOfTheWeek, 'dmY', '.')
    const { days, dates } = weekObject
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <div className="calendar">
              <div className="row">
                <div className="col-sm-12 col-lg-12">
                  <div className={`alert alert-info ${Object.keys(holidays).length === 0 ? 'calendar--info--js__show' : 'calendar--info--js__hide'}`} role="alert">
                    <b>Info: </b>
                    No events available for this week
                  </div>
                  <div className={`alert alert-danger ${error ? 'calendar--error--js__show' : 'calendar--error--js__hide'}`} role="alert">
                    <b>Error: </b>
                    {reason}
                  </div>

                  <Navigation
                    getNewWeek={this.getNewWeek}
                    startDate={dates[0]}
                    endDate={dates[dates.length - 1]}
                    firstDayOfTheWeek={firstDayOfTheWeek}
                    loader={loader}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-12 ">
                  <div className="calendar calendar--days float-left mt-sm-2  text-center">
                    <CalendarDays
                      weekdDays={days}
                    />
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-12 ">
                  <div className="calendar calendar--days float-left  text-center">
                    <CalendarDates
                      weekDates={dates}
                    />
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-12 ">
                  <div className="calendar calendar--events float-left  text-center">
                    {Object.keys(holidays).length > 0 ? (
                      <CalendarEvents
                        weekHolidays={holidays}
                        weekDates={dates}
                      />
                    ) :
                      ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Calendar.propTypes = {

  getCalendarHolidays: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
}
