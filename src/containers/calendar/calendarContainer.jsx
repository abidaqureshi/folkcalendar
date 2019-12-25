import { connect } from 'react-redux'
import Calendar from './calendar'
import {
  getCalendarHolidays,
} from '../../actions'


const mapStateToProps = (state) => ({
  events: state.calendar,
})

const mapDispatchToProps = (dispatch) => ({
  getCalendarHolidays: (startDate, endDate) => {
    dispatch(getCalendarHolidays(startDate, endDate))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar)
