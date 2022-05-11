'use strict';

function truncate(str, maxlength) {
  // if the length of the value is greater than the maximum => the function uses truncation and substitutes a special character "…"
  // otherwise => returns the entire string
  return (str.length > maxlength) ?
  // for the abbreviation symbol "…" the maximum value is reduced by 1 symbol
    str.slice(0, maxlength - 1) + '…' : str;
}
