/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  let dfs = (idx, res, target) => {
    if (target < 0) return;
    else if (target === 0) {
      result.push(res.slice());
      return;
    }
    for (let i = idx; i < candidates.length; ++i) {
      res.push(candidates[i]);
      dfs(i, res, target - candidates[i]);
      res.pop();
    }
  };

  dfs(0, [], target);
  return result;
};
// @lc code=end
