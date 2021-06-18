/*
 * @lc app=leetcode id=167 lang=golang
 *
 * [167] Two Sum II - Input array is sorted
 */

package leetcode

// @lc code=start
func twoSum(numbers []int, target int) []int {
	left, right := 0, len(numbers)-1
	for left < right {
		if numbers[left]+numbers[right] < target {
			left++
		} else if numbers[left]+numbers[right] > target {
			right--
		} else {
			break
		}
	}
	return []int{left + 1, right + 1}
}

// @lc code=end
