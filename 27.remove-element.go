/*
 * @lc app=leetcode id=27 lang=golang
 *
 * [27] Remove Element
 */

package leetcode

// @lc code=start
func removeElement(nums []int, val int) int {
	i := 0
	for _, num := range nums {
		if num != val {
			nums[i], i = num, i+1
		}
	}
	return i
}

// @lc code=end
