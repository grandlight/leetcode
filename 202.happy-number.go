/*
 * @lc app=leetcode id=202 lang=golang
 *
 * [202] Happy Number
 */
package leetcode

// @lc code=start
func isHappy(n int) bool {
	lookup := map[int]bool{}
	for n != 1 {
		if _, ok := lookup[n]; ok {
			break
		}
		sum := 0
		lookup[n] = true
		for n > 0 {
			sum += (n % 10) * (n % 10)
			n /= 10
		}
		n = sum
	}
	return n == 1
}

// @lc code=end
