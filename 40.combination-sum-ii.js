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
  const helper = (cur, idx, t) => {
    if (t <= 0) {
      if (t === 0) {
        res.push(cur.slice());
      }
      return;
    }
    for (let i = idx; i < candidates.length; ++i) {
      if (i > idx && candidates[i] === candidates[i - 1]) {
        continue;
      }
      cur.push(candidates[i]);
      helper(cur, i + 1, t - candidates[i]);
      cur.pop();
    }
  };
  candidates.sort((a, b) => a - b);
  const res = [];
  helper([], 0, target);
  return res;
};
// @lc code=end
