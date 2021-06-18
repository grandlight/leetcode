/*
 * @lc app=leetcode id=258 lang=golang
 *
 * [258] Add Digits
 */

package leetcode

// @lc code=start
func addDigits(num int) int {
	if num != 0 {
		return (num-1)%9 + 1
	} else {
		return 0
	}

	for num/10 != 0 {
		sum := 0
		for num != 0 {
			sum += num % 10
			num /= 10
		}
		num = sum
	}
	return num
}

// @lc code=end
