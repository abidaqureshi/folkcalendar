import React from 'react'
import PropTypes from 'prop-types'
import { DAY_FULL_NAMES } from '../../utility/constants'

/*
  Ui control component
*/

const renderOptions = () => DAY_FULL_NAMES.map((d, k) => (
  <option value={k}>{d}</option>
))

const updateFirstDayOfWeek = (dateStr, getWeekFunc, evt) => {
  const dayOfTheWeek = evt.target.value
  const dateArray = dateStr.split('.')
  const ymdStr = [dateArray[2], dateArray[1], dateArray[0]].join('-')
  const dateObj = new Date(ymdStr)
  getWeekFunc(dateObj, dayOfTheWeek)
}

const getPrevWeek = (dateStr, dayOfWeek, getWeekFunc) => {
  console.log('date ', dateStr, 'day of the week ', dayOfWeek)
  const dateArray = dateStr.split('.')
  const ymdStr = [dateArray[2], dateArray[1], dateArray[0]].join('-')
  let dateObj = new Date(ymdStr)
  dateObj = new Date(dateObj.getTime() - (7 * 24 * 3600 * 1000))
  getWeekFunc(dateObj, dayOfWeek)
}

const getNextWeek = (dateStr, dayOfWeek, getWeekFunc) => {
  console.log('date ', dateStr, 'day of the week ', dayOfWeek)
  const dateArray = dateStr.split('.')
  const ymdStr = [dateArray[2], dateArray[1], dateArray[0]].join('-')
  let dateObj = new Date(ymdStr)
  dateObj = new Date(dateObj.getTime() + (1 * 24 * 3600 * 1000))
  getWeekFunc(dateObj, dayOfWeek)
}

const Navigation = (props) => {
  const {
    firstDayOfTheWeek,
    endDate,
    startDate,
    getNewWeek,
  } = props
  return (
    <div className="h5 text-center">
      <div className="pt-sm-3 pt-lg-3 pb-sm-3 pb-lg-3">
          Week view
      </div>
      <div className="float-right mx-sm-3 mx-lg-3">
        <label>
          Day of the week
        </label>
        <select id="dayOfWeek" onChange={(evt) => { updateFirstDayOfWeek(startDate, getNewWeek, evt) }} className=" form-control form-control-sm  py-sm-3 py-lg-3">
          {renderOptions()}
        </select>
      </div>
      <div className="float-right py-sm-4 py-lg-4 mx-sm-3 mx-lg-3">
        <button type="button" onClick={() => { getPrevWeek(startDate, firstDayOfTheWeek, getNewWeek) }} className="btn btn-primary mx-sm-3 mx-lg-3 ">
            &lt; Prev
        </button>
        <button type="button" onClick={() => { getNextWeek(endDate, firstDayOfTheWeek, getNewWeek) }} className="btn btn-primary mx-sm-3 mx-lg-3">
            Next &gt;
        </button>
      </div>
    </div>
  )
}
export default Navigation

Navigation.propTypes = {
  firstDayOfTheWeek: PropTypes.number.isRequired,
  endDate: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  getNewWeek: PropTypes.func.isRequired,
}
