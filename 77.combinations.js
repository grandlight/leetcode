/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];

  let dfs = (idx, curr, level) => {
    if (level === k) {
      res.push(curr.slice());
      return;
    }
    for (let i = idx; i < n + 1; ++i) {
      curr.push(i);
      dfs(i + 1, curr, level + 1);
      curr.pop();
    }
  };

  dfs(1, [], 0);
  return res;
};
// @lc code=end
