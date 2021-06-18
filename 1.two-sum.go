/*
 * @lc app=leetcode id=1 lang=golang
 *
 * [1] Two Sum
 */

package leetcode

// @lc code=start
func twoSum(nums []int, target int) []int {
	lookup := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		if idx, ok := lookup[target-nums[i]]; ok {
			return []int{idx, i}
		}
		lookup[nums[i]] = i
	}
	return nil
}

// @lc code=end
