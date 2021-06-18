/*
 * @lc app=leetcode id=53 lang=golang
 *
 * [53] Maximum Subarray
 */

package leetcode

// @lc code=start
func maxSubArray(nums []int) int {
	res, cur := nums[0], 0
	for i := range nums {
		cur = max53(cur+nums[i], nums[i])
		res = max53(res, cur)
	}
	return res
}

func max53(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// @lc code=end
