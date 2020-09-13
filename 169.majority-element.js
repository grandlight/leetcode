/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = new Map();
  for (let n of nums) {
    if (count.has(n)) {
      count.set(n, count.get(n) + 1);
    } else {
      count.set(n, 1);
    }
    if (count.get(n) > Math.floor(nums.length / 2)) {
      return n;
    }
  }
};
// @lc code=end
