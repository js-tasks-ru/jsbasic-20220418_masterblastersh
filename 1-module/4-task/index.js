'use strict';

function checkSpam(str) {
  // convert string value to lower case (to make the function case insensitive):
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('1xbet') || lowerStr.includes('xxx')

  // check value for spam:
  if ( lowerStr.includes('1xbet') || lowerStr.includes('xxx') ) {
    return true

  // if the value is not spam, the function returns false:
  } else {
    return false
  }
}