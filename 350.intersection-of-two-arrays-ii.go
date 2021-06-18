/*
 * @lc app=leetcode id=350 lang=golang
 *
 * [350] Intersection of Two Arrays II
 */

package leetcode

// @lc code=start
func intersect(nums1 []int, nums2 []int) []int {
	lookup := map[int]int{}
	res := []int{}
	for i := 0; i < len(nums1); i++ {
		lookup[nums1[i]]++
	}
	for i := 0; i < len(nums2); i++ {
		if lookup[nums2[i]] > 0 {
			lookup[nums2[i]]--
			res = append(res, nums2[i])
		}
	}
	return res
}

// @lc code=end
