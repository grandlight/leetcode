/*
 * @lc app=leetcode id=278 lang=golang
 *
 * [278] First Bad Version
 */

package leetcode

// @lc code=start
func firstBadVersion(n int) int {
	left, right := 1, n
	for left < right {
		mid := left + (right-left)/2
		if !isBadVersion(mid) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return right
}

// @lc code=end
