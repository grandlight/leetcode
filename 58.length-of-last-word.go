/*
 * @lc app=leetcode id=58 lang=golang
 *
 * [58] Length of Last Word
 */

package leetcode

// @lc code=start
func lengthOfLastWord(s string) int {
	res := 0
	for i := len(s) - 1; i > -1; i-- {
		if s[i] == ' ' {
			if res > 0 {
				return res
			}
		} else {
			res++
		}
	}
	return res
}

// @lc code=end
