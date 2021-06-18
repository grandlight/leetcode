/*
 * @lc app=leetcode id=392 lang=golang
 *
 * [392] Is Subsequence
 */

package leetcode

// @lc code=start
func isSubsequence(s string, t string) bool {
	if len(s) == 0 {
		return true
	}
	i := 0
	for j := 0; j < len(t); j++ {
		if t[j] == s[i] {
			i++
		}
		if i == len(s) {
			return true
		}
	}
	return false
}

// @lc code=end
