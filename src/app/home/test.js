/**
 * Formats a Date object into a string with the format "Weekday Day Month" (e.g., "Fri 1 Aug").
 * @param date The Date object to format.
 * @returns The formatted date string.
 */
function getFormattedDate(date) {
  // Define arrays for abbreviated weekday and month names.
  // Using an array is more reliable than toLocaleString() for a specific order.
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Get the individual parts of the date.
  const weekday = weekdays[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];

  // Combine the parts into the desired format.
  return `${weekday} ${day} ${month}`;
}

// Example usage with a specific date
const myDate = new Date(2025, 7, 1); // August 1, 2025
const formattedDate = getFormattedDate(myDate);

console.log(formattedDate);
// Expected Output: "Fri 1 Aug"
