import {
  RENDER_CALENDAR_HOLIDAYS,
  RENDER_ERROR_NOTIFICATION,
} from '../../actions'


const initalState = {

  holidays: {},
  error: false,
  reason: '',

}

const calendarReducer = (state = initalState, action) => {
  switch (action.type) {
    case RENDER_CALENDAR_HOLIDAYS:
      return {
        ...state,
        ...action.payload,
      }
    case RENDER_ERROR_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default calendarReducer
