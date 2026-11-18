export function twoSum(array1, array2) {
  return Number(String(array1.join(""))) + Number(String(array2.join("")));
}

export function luckyNumber(value) {
  if (String(value)===value.toString().split('').reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input){
    return 'Required field';
  } else if (!Number(input)){
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}