/*
 * @lc app=leetcode id=219 lang=golang
 *
 * [219] Contains Duplicate II
 */
package leetcode

// @lc code=start
func containsNearbyDuplicate(nums []int, k int) bool {
	lookup := map[int]int{}
	for i := 0; i < len(nums); i++ {
		if _, ok := lookup[nums[i]]; ok && i-lookup[nums[i]] <= k {
			return true
		}
		lookup[nums[i]] = i
	}
	return false
}

// @lc code=end
