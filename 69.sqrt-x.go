/*
 * @lc app=leetcode id=69 lang=golang
 *
 * [69] Sqrt(x)
 */

package leetcode

// @lc code=start
func mySqrt(x int) int {
	if x < 2 {
		return x
	}
	left, right := 0, x
	for left < right {
		mid := left + (right-left)/2
		if mid <= x/mid {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return right - 1
}

// @lc code=end
