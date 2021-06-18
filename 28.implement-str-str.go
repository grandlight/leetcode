/*
 * @lc app=leetcode id=28 lang=golang
 *
 * [28] Implement strStr()
 */

package leetcode

// @lc code=start
func strStr(haystack string, needle string) int {
	if len(needle) == 0 {
		return 0
	}
	for i := 0; i < len(haystack); i++ {
		for j := 0; j < len(needle)+1; j++ {
			if j == len(needle) {
				return i
			} else if i+j == len(haystack) {
				return -1
			} else if haystack[i+j] != needle[j] {
				break
			}
		}
	}
	return -1
}

// @lc code=end
