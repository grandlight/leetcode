/*
 * @lc app=leetcode id=67 lang=golang
 *
 * [67] Add Binary
 */

package leetcode

import "strconv"

// @lc code=start
func addBinary(a string, b string) string {
	res, carry, i, j := "", 0, len(a)-1, len(b)-1
	for i > -1 || j > -1 {
		value := carry
		if i > -1 {
			ai, _ := strconv.Atoi(string(a[i]))
			value, i = value+ai, i-1
		}
		if j > -1 {
			bj, _ := strconv.Atoi(string(b[j]))
			value, j = value+bj, j-1
		}
		carry = value / 2
		value %= 2
		res = strconv.Itoa(value) + res
	}
	if carry > 0 {
		return "1" + res
	}
	return res
}

// @lc code=end
