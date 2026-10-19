export function totalBirdCount(birdsPerDay) {
  let birbCount = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    birbCount += birdsPerDay[index];
  }
  return birbCount;
}

export function birdsInWeek(birdsPerDay, week) {
  let birbSum = 0;
  let index = 0;
  
  if (week===1) {
    index = 0;
  } else {
    index = (week*7)-7;
  }
  
  for (index; index < week*7; index++) {
    birbSum += birdsPerDay[index];
  }
  return birbSum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {

  for (let index = 0; index < birdsPerDay.length; index+=2) {
    birdsPerDay[index] += 1;
  }
}