/*
 * @lc app=leetcode id=66 lang=golang
 *
 * [66] Plus One
 */

package leetcode

// @lc code=start
func plusOne(digits []int) []int {
	for i := len(digits) - 1; i > -1; i-- {
		if digits[i] < 9 {
			digits[i]++
			return digits
		}
		digits[i] = 0
	}
	digits[0] = 1
	digits = append(digits, 0)
	return digits
}

// @lc code=end
