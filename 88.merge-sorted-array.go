/*
 * @lc app=leetcode id=88 lang=golang
 *
 * [88] Merge Sorted Array
 */

package leetcode

// @lc code=start
func merge(nums1 []int, m int, nums2 []int, n int) {
	i, j, last := m-1, n-1, m+n-1
	for i >= 0 && j >= 0 {
		if nums1[i] > nums2[j] {
			nums1[last] = nums1[i]
			i, last = i-1, last-1
		} else {
			nums1[last] = nums2[j]
			j, last = j-1, last-1
		}
	}
	for j >= 0 {
		nums1[last] = nums2[j]
		j, last = j-1, last-1
	}
}

// @lc code=end
