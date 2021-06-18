/*
 * @lc app=leetcode id=136 lang=golang
 *
 * [136] Single Number
 */

package leetcode

// @lc code=start
func singleNumber(nums []int) int {
	res := 0
	for i := 0; i < len(nums); i++ {
		res ^= nums[i]
	}
	return res
}

// @lc code=end
