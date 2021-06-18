/*
 * @lc app=leetcode id=263 lang=golang
 *
 * [263] Ugly Number
 */

package leetcode

// @lc code=start
func isUgly(n int) bool {
	if n < 1 {
		return false
	}
	pf := [3]int{2, 3, 5}
	for i := 0; i < 3; i++ {
		for n%pf[i] == 0 {
			n /= pf[i]
		}
	}
	return n == 1
}

// @lc code=end
