/*
 * @lc app=leetcode id=191 lang=golang
 *
 * [191] Number of 1 Bits
 */
package leetcode

// @lc code=start
func hammingWeight(num uint32) int {
	res := 0
	for num > 0 {
		res++
		num &= num - 1
	}
	return res
}

// @lc code=end
