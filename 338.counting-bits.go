/*
 * @lc app=leetcode id=338 lang=golang
 *
 * [338] Counting Bits
 */

package leetcode

// @lc code=start
func countBits(n int) []int {
	dp := make([]int, n+1)
	for i := 1; i < n+1; i++ {
		dp[i] = dp[i&(i-1)] + 1
	}
	return dp
}

// @lc code=end
