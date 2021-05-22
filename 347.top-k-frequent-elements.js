/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const lookup = {};
  const bucket = Array(nums.length + 1)
    .fill()
    .map(() => Array());
  const res = [];
  for (const num of nums) {
    lookup[num] = (lookup[num] || 0) + 1;
  }
  for (const [num, freq] of Object.entries(lookup)) {
    bucket[freq].push(num);
  }
  for (let i = nums.length; i >= 0; --i) {
    for (let j = 0; j < bucket[i].length; ++j) {
      res.push(bucket[i][j]);
      if (res.length === k) {
        return res;
      }
    }
  }
  return res;
};
// @lc code=end
