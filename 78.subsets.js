/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];
  for (let i = 0; i < nums.length; ++i) {
    const len = res.length;
    for (let j = 0; j < len; ++j) {
      res.push(res[j].concat([nums[i]]));
    }
  }
  return res;
};
// @lc code=end
