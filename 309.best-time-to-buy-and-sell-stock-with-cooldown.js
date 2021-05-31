/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices) {
    return 0;
  }
  const n = prices.length;
  const buy = Array(n).fill(0);
  buy[0] = -prices[0];
  const sell = Array(n).fill(0);
  const rest = Array(n).fill(0);
  for (let i = 1; i < n; ++i) {
    buy[i] = Math.max(buy[i - 1], rest[i - 1] - prices[i]);
    sell[i] = buy[i - 1] + prices[i];
    rest[i] = Math.max(sell[i - 1], rest[i - 1]);
  }
  return Math.max(sell[n - 1], rest[n - 1]);
};
// @lc code=end
