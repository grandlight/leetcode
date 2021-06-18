/*
 * @lc app=leetcode id=119 lang=golang
 *
 * [119] Pascal's Triangle II
 */

package leetcode

// @lc code=start
func getRow(rowIndex int) []int {
	res := make([]int, rowIndex+1)
	res[0] = 1
	for i := 1; i < rowIndex+1; i++ {
		for j := i; j > 0; j-- {
			res[j] += res[j-1]
		}
	}
	return res
}

// @lc code=end
