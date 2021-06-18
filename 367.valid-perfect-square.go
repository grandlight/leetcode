/*
 * @lc app=leetcode id=367 lang=golang
 *
 * [367] Valid Perfect Square
 */

package leetcode

// @lc code=start
func isPerfectSquare(num int) bool {
	if num == 1 {
		return true
	}
	left, right := 0, num
	for left < right {
		mid := left + (right-left)/2
		if mid < num/mid {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return right*right == num
}

// @lc code=end
