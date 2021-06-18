/*
 * @lc app=leetcode id=122 lang=golang
 *
 * [122] Best Time to Buy and Sell Stock II
 */

package leetcode

// @lc code=start
func maxProfit(prices []int) int {
	profit := 0
	for i := 0; i < len(prices)-1; i++ {
		if prices[i] < prices[i+1] {
			profit += prices[i+1] - prices[i]
		}
	}
	return profit
}

// @lc code=end
