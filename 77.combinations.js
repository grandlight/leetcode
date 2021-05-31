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
  const helper = (cur, idx) => {
    if (cur.length === k) {
      res.push(cur.slice());
      return;
    }
    for (let i = idx; i < n + 1; ++i) {
      cur.push(i);
      helper(cur, i + 1);
      cur.pop();
    }
  };
  const res = [];
  helper([], 1);
  return res;
};
// @lc code=end
