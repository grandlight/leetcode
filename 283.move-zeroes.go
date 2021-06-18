/*
 * @lc app=leetcode id=283 lang=golang
 *
 * [283] Move Zeroes
 */

package leetcode

// @lc code=start
func moveZeroes(nums []int) {
	nz := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[i], nums[nz] = nums[nz], nums[i]
			nz++
		}
	}
}

// @lc code=end
