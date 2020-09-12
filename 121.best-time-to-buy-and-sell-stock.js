/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity;
  let profit = 0;
  for (let price of prices) {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }
  return profit;
};
// @lc code=end
