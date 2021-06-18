/*
 * @lc app=leetcode id=349 lang=golang
 *
 * [349] Intersection of Two Arrays
 */

package leetcode

// @lc code=start
func intersection(nums1 []int, nums2 []int) []int {
	lookup := map[int]bool{}
	res := []int{}
	for i := 0; i < len(nums1); i++ {
		lookup[nums1[i]] = true
	}
	for i := 0; i < len(nums2); i++ {
		if lookup[nums2[i]] {
			lookup[nums2[i]] = false
			res = append(res, nums2[i])
		}
	}
	return res
}

// @lc code=end
