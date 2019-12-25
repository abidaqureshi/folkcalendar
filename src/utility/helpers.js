import { DAYS } from './constants'

/*
  formatDate: A helper function used for converting
  dates in different formats
  Arguments: date object, dateFormat, symbole for styling the date

*/
const formatDate = (date, dateFormat = 'Ymd', symbol = '-') => {
  const d = date
  let month = `${d.getMonth() + 1}`
  let day = `${d.getDate()}`
  const year = d.getFullYear()

  if (month < 10) month = `0${month}`
  if (day < 10) day = `0${day}`
  if (dateFormat === 'Ymd') {
    return [year, month, day].join(symbol)
  }

  return [day, month, year].join(symbol)
}

/*
  generateDays: A helper function used for generating
  week dates from given day of the week in different formats
  according to date styles
  Arguments: date object, day of the week, dateFormat, symbole for styling the date
*/
const generateDays = (startDate, firstDayOfTheWeek, dateFormat = 'dmY', symbol = '.') => {
  const currentDay = startDate.getDay()
  let currentTime = startDate.getTime()
  const daysArray = []
  const datesArray = []

  if (Number(currentDay) !== Number(firstDayOfTheWeek)) {
    if (currentDay > firstDayOfTheWeek) {
      const diff = currentDay - firstDayOfTheWeek
      currentTime -= (diff * 24 * 3600 * 1000)
    } else if (currentDay < firstDayOfTheWeek) {
      const diff = firstDayOfTheWeek - currentDay
      currentTime += (diff * 24 * 3600 * 1000)
    }
  }

  for (let i = 0; i < 7; i += 1) {
    const tmpDate = new Date(currentTime + (i * 24 * 3600 * 1000))
    console.log('temp date ', tmpDate)
    daysArray.push(DAYS[tmpDate.getDay()])
    datesArray.push(formatDate(tmpDate, dateFormat, symbol))
  }

  return {
    days: daysArray,
    dates: datesArray,
  }
}

export {
  formatDate,
  generateDays,
}
