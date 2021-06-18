/*
 * @lc app=leetcode id=171 lang=golang
 *
 * [171] Excel Sheet Column Number
 */

package leetcode

// @lc code=start
func titleToNumber(columnTitle string) int {
	res := 0
	for i := 0; i < len(columnTitle); i++ {
		res = res*26 + int(columnTitle[i]) - 64
	}
	return res
}

// @lc code=end
