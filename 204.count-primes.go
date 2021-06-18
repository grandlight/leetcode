/*
 * @lc app=leetcode id=204 lang=golang
 *
 * [204] Count Primes
 */

package leetcode

// @lc code=start
func countPrimes(n int) int {
	res, primes := 0, make([]bool, n)
	for i := 0; i < n; i++ {
		primes[i] = true
	}
	for i := 2; i < n; i++ {
		if !primes[i] {
			continue
		}
		res++
		for j := 2; i*j < n; j++ {
			primes[i*j] = false
		}
	}
	return res
}

// @lc code=end
