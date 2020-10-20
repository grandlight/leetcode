/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];

  let dfs = (curr, idx, sum) => {
    if (sum > n) return;
    if (curr.length === k) {
      if (sum === n) res.push(curr.slice());
      return;
    }
    for (let i = idx; i < 10; ++i) {
      curr.push(i);
      dfs(curr, i + 1, i + sum);
      curr.pop(i);
    }
  };

  dfs([], 1, 0);
  return res;
};
// @lc code=end
