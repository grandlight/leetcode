/*
 * @lc app=leetcode id=35 lang=golang
 *
 * [35] Search Insert Position
 */

package leetcode

// @lc code=start
func searchInsert(nums []int, target int) int {
	left, right := 0, len(nums)
	for left < right {
		mid := left + (right-left)/2
		if nums[mid] == target {
			return mid
		} else if nums[mid] < target {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return right
}

// @lc code=end
