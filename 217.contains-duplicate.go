/*
 * @lc app=leetcode id=217 lang=golang
 *
 * [217] Contains Duplicate
 */

package leetcode

// @lc code=start
func containsDuplicate(nums []int) bool {
	lookup := map[int]bool{}
	for i := 0; i < len(nums); i++ {
		if _, ok := lookup[nums[i]]; ok {
			return true
		}
		lookup[nums[i]] = true
	}
	return false
}

// @lc code=end
