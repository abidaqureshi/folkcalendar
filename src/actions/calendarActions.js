
// eslint-disable-next-line import/prefer-default-export
export const GET_CALENDAR_HOLIDAYS = 'GET_CALENDAR_HOLIDAYS'
export const RENDER_CALENDAR_HOLIDAYS = 'RENDER_CALENDAR_HOLIDAYS'
export const RENDER_ERROR_NOTIFICATION = 'RENDER_ERROR_NOTIFICATION'
export const getCalendarHolidays = (startDate, endDate) => (
  {
    type: GET_CALENDAR_HOLIDAYS,
    startDate,
    endDate,
  }
)
