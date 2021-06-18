/*
 * @lc app=leetcode id=26 lang=golang
 *
 * [26] Remove Duplicates from Sorted Array
 */

package leetcode

// @lc code=start
func removeDuplicates(nums []int) int {
	i := 0
	for _, num := range nums {
		if i < 1 || num > nums[i-1] {
			nums[i], i = num, i+1
		}
	}
	return i
}

// @lc code=end
