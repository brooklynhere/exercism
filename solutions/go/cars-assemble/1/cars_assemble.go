package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate)*(successRate/float64(100))
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	var prev float64 = float64(productionRate)*(successRate/float64(100))
	var perMin int = int(prev)/60
	return perMin
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	var tenCars uint = uint(carsCount)/10
	var otherCars uint = uint(carsCount)-(tenCars*10)
	var totalCost  uint = (tenCars*95000) + (otherCars*10000)
	return totalCost
}
