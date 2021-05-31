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
  const helper = (cur, idx, t) => {
    if (t <= 0) {
      if (t === 0) {
        res.push(cur.slice());
      }
      return;
    }
    for (let i = idx; i < candidates.length; ++i) {
      cur.push(candidates[i]);
      helper(cur, i, t - candidates[i]);
      cur.pop();
    }
  };
  const res = [];
  helper([], 0, target);
  return res;
};
// @lc code=end
