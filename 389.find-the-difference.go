/*
 * @lc app=leetcode id=389 lang=golang
 *
 * [389] Find the Difference
 */

package leetcode

// @lc code=start
func findTheDifference(s string, t string) byte {
	res := byte(0)
	for i := 0; i < len(s); i++ {
		res ^= s[i]
	}
	for i := 0; i < len(t); i++ {
		res ^= t[i]
	}
	return res
}

// @lc code=end
