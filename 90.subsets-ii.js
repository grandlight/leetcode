/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [[]];
  let prevLen = 1;
  for (let i = 0; i < nums.length; ++i) {
    const currLen = res.length;
    for (let j = 0; j < currLen; ++j) {
      if (i === 0 || nums[i] !== nums[i - 1] || j >= prevLen) {
        res.push([...res[j], nums[i]]);
      }
    }
    prevLen = currLen;
  }
  return res;
};
// @lc code=end
