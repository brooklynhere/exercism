//'truck' is a non-empty string (always truthy), so this condition always evaluates to true.
// remember: always use complete comparisons on both sides -> (kind === 'car' || kind === 'truck')

export function needsLicense(kind) {
  if (kind==='car'||kind=='truck') {
    return true
  } else {
    return false
  }
}

export function chooseVehicle(option1, option2) {
  if (option1<option2) {
    return option1 + ' is clearly the better choice.'
  } else {
    return option2 + ' is clearly the better choice.'
  }
}

export function calculateResellPrice(originalPrice, age) {
  if (age<3) {
    return originalPrice*0.80
  } else if (age>10){
    return originalPrice*0.50
  } else {
    return originalPrice*0.70
  }
}
