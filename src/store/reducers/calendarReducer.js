import {
  GET_CALENDAR_HOLIDAYS,
  RENDER_CALENDAR_HOLIDAYS,
  RENDER_ERROR_NOTIFICATION,
} from '../../actions'


const initalState = {

  holidays: {},
  error: false,
  reason: '',
  loader: false,

}

const calendarReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_CALENDAR_HOLIDAYS:
      return {
        ...state,
        loader: true,
      }
    case RENDER_CALENDAR_HOLIDAYS:
      return {
        ...state,
        ...action.payload,
        loader: false,
      }
    case RENDER_ERROR_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
        loader: false,
      }
    default:
      return state
  }
}

export default calendarReducer
