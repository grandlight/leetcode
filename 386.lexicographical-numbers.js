/*
 * @lc app=leetcode id=386 lang=javascript
 *
 * [386] Lexicographical Numbers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const res = Array(n).fill(0);
  let cur = 1;
  for (let i = 0; i < n; ++i) {
    res[i] = cur;
    if (cur * 10 <= n) {
      cur *= 10;
    } else {
      if (cur >= n) {
        cur = Math.trunc(cur / 10);
      }
      ++cur;
      while (cur % 10 === 0) {
        cur = Math.trunc(cur / 10);
      }
    }
  }
  return res;
};
// @lc code=end
