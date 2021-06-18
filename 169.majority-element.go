/*
 * @lc app=leetcode id=169 lang=golang
 *
 * [169] Majority Element
 */

package leetcode

// @lc code=start
func majorityElement(nums []int) int {
	res, cnt := 0, 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == res {
			cnt++
		} else if cnt == 0 {
			res, cnt = nums[i], 1
		} else {
			cnt--
		}
	}
	return res
}

// @lc code=end
