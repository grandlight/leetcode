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
  let res = [];

  let dfs = (curr, idx) => {
    res.push(curr.slice());
    for (let i = idx; i < nums.length; ++i) {
      curr.push(nums[i]);
      dfs(curr, i + 1);
      curr.pop();
    }
  };

  dfs([], 0);
  return res;
};
// @lc code=end
