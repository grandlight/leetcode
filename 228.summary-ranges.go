/*
 * @lc app=leetcode id=228 lang=golang
 *
 * [228] Summary Ranges
 */

package leetcode

import "strconv"

// @lc code=start
func summaryRanges(nums []int) []string {
	res := []string{}
	i, n := 0, len(nums)
	for i < n {
		j := 1
		for i+j < n && nums[i+j]-nums[i] == j {
			j++
		}
		s := strconv.Itoa(nums[i])
		if j != 1 {
			s += "->" + strconv.Itoa(nums[i+j-1])
		}
		res, i = append(res, s), i+j
	}
	return res
}

// @lc code=end
