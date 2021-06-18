/*
 * @lc app=leetcode id=121 lang=golang
 *
 * [121] Best Time to Buy and Sell Stock
 */

package leetcode

// @lc code=start
func maxProfit(prices []int) int {
	minPrice, maxProfit := prices[0], 0
	for i := 1; i < len(prices); i++ {
		if prices[i] < minPrice {
			minPrice = prices[i]
		}
		if prices[i]-minPrice > maxProfit {
			maxProfit = prices[i] - minPrice
		}
	}
	return maxProfit
}

// @lc code=end
