export const viewConverter = (number) => {
  if (number < 1000000) {
    return number.toString() + " views";
  }
  // divide the number by 1 million and round to two decimal places
  const millions = (number / 1000000).toFixed(2);

  // add the word "million" to the end and return the result
  return millions + " million views";
};

export const convertDatestampToTimeAgo=(datestamp)=> {
  // convert the datestamp to a Date object
  const date = new Date(datestamp);

  // get the current time as a Date object
  const now = new Date();

  // calculate the difference in milliseconds between the two dates
  const diffMs = now - date;

  // calculate the difference in seconds, minutes, hours, and days
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  // choose the appropriate time unit and return the result
  if (diffDays > 0) {
    return diffDays + " day" + (diffDays > 1 ? "s" : "") + " ago";
  } else if (diffHours > 0) {
    return diffHours + " hour" + (diffHours > 1 ? "s" : "") + " ago";
  } else if (diffMins > 0) {
    return diffMins + " minute" + (diffMins > 1 ? "s" : "") + " ago";
  } else {
    return diffSecs + " second" + (diffSecs > 1 ? "s" : "") + " ago";
  }
}
