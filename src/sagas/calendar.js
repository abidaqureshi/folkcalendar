import { all, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import Config from '../config'
import {
  GET_CALENDAR_HOLIDAYS,
  RENDER_CALENDAR_HOLIDAYS,
  RENDER_ERROR_NOTIFICATION,
} from '../actions/calendarActions'

const SERVER_ADDRESS = Config.apiBaseUrl

export function* fetchGetCalendarEvents(data) {
  try {
    const response = yield axios.post(`${SERVER_ADDRESS}`, {
      apiKey: Config.apiKey,
      ...data,
    })
    yield put({ type: RENDER_CALENDAR_HOLIDAYS, payload: response.data })
  } catch (error) {
    yield put({ type: RENDER_ERROR_NOTIFICATION, payload: error.response.data })
  }
}


export function* getCalendarEvents() {
  yield takeEvery(GET_CALENDAR_HOLIDAYS, fetchGetCalendarEvents)
}

export default function* rootSaga() {
  yield all([getCalendarEvents()])
}
