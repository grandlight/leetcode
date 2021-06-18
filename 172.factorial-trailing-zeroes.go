/*
 * @lc app=leetcode id=172 lang=golang
 *
 * [172] Factorial Trailing Zeroes
 */

package leetcode

// @lc code=start
func trailingZeroes(n int) int {
	res := 0
	for n > 0 {
		res += n / 5
		n /= 5
	}
	return res
}

// @lc code=end
