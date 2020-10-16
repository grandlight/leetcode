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
  let res = [];
  nums.sort();

  let dfs = (curr, idx) => {
    res.push(curr.slice());
    if (idx === nums.length) return;
    for (let i = idx; i < nums.length; ++i) {
      if (i > idx && nums[i] === nums[i - 1]) continue;
      curr.push(nums[i]);
      dfs(curr, i + 1);
      curr.pop();
    }
  };

  dfs([], 0);
  return res;
};
// @lc code=end
