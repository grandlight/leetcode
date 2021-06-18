/*
 * @lc app=leetcode id=342 lang=golang
 *
 * [342] Power of Four
 */

package leetcode

// @lc code=start
func isPowerOfFour(n int) bool {
	for n > 0 && n%4 == 0 {
		n /= 4
	}
	return n == 1
}

// @lc code=end
