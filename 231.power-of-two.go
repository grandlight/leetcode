/*
 * @lc app=leetcode id=231 lang=golang
 *
 * [231] Power of Two
 */

package leetcode

// @lc code=start
func isPowerOfTwo(n int) bool {
	res := 0
	for n > 0 {
		res += n & 1
		n >>= 1
	}
	return res == 1
}

// @lc code=end
