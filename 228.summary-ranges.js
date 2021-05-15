/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const res = [];
  let [start, end] = [0, 0];
  for (let i = 1; i < nums.length + 1; ++i) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      if (start === end) {
        res.push(`${nums[start]}`);
      } else {
        res.push(`${nums[start]}->${nums[end]}`);
      }
      start = end = i;
    } else {
      ++end;
    }
  }
  return res;
};
// @lc code=end
