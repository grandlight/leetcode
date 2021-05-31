/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  let maxIndex = 0;
  const dp = Array(nums.length).fill(1);
  const prev = Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] % nums[j] === 0) {
        if (dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
          prev[i] = j;
        }
      }
    }
    if (dp[maxIndex] < dp[i]) {
      maxIndex = i;
    }
  }
  const res = [];
  for (let i = maxIndex; i !== -1; i = prev[i]) {
    res.push(nums[i]);
  }
  return res.reverse();
};
// @lc code=end
