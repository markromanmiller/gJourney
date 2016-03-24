/**
 * @return the string form of the day of the week
 */
function getDayName(number) {
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[number]
}

/**
 * @return the name of the month
 */
function getMonthName(number) {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'];
  return months[number];
}
