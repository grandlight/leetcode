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
  const helper = (cur, idx, target) => {
    if (target < 0) {
      return;
    }
    if (cur.length === k) {
      if (target === 0) {
        res.push(cur.slice());
      }
      return;
    }
    for (let i = idx; i < 10; ++i) {
      cur.push(i);
      helper(cur, i + 1, target - i);
      cur.pop();
    }
  };
  const res = [];
  helper([], 1, n);
  return res;
};
// @lc code=end
