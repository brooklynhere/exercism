package hamming

import "errors"

func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("Strands must be of equal length.")
	}

	count := 0

	// Also works!
	// for i := 0; i < len(a); i++ {
	// 	if a[i] != b[i] {
	// 		count++
	// 	}
	// }

	for i := range a{
		if a[i] != b[i]{
			count++
		}
	}

	return count, nil
}