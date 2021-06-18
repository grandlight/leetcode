/*
 * @lc app=leetcode id=326 lang=golang
 *
 * [326] Power of Three
 */

package leetcode

// @lc code=start
func isPowerOfThree(n int) bool {
	for n > 0 && n%3 == 0 {
		n /= 3
	}
	return n == 1
}

// @lc code=end
