/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort();
  let result = [];

  let dfs = (idx, res, target) => {
    if (target < 0) return;
    else if (target === 0) {
      result.push(res.slice());
      return;
    }
    for (let i = idx; i < candidates.length; ++i) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      res.push(candidates[i]);
      dfs(i + 1, res, target - candidates[i]);
      res.pop();
    }
  };

  dfs(0, [], target);
  return result;
};
combinationSum2([3, 1, 3, 5, 1, 1], 8);
// @lc code=end
