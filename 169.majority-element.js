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
  let res = 0;
  let cnt = 0;
  for (const num of nums) {
    if (num === res) {
      ++cnt;
    } else if (cnt === 0) {
      res = num;
      cnt = 1;
    } else {
      cnt -= 1;
    }
  }
  return res;
};
// @lc code=end
