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
  if (nums.length === 0) return [];

  let getRangeString = (begin, end) => {
    return begin === end ? `${nums[begin]}` : `${nums[begin]}->${nums[end]}`;
  };

  let ranges = [];
  let begin = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1] + 1) {
      ranges.push(getRangeString(begin, i - 1));
      begin = i;
    }
  }
  ranges.push(getRangeString(begin, nums.length - 1));
  return ranges;
};
// @lc code=end
