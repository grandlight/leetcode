/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const helper = (cur, left, right) => {
    if (left > right) {
      return;
    }
    if (left === 0 && right === 0) {
      res.push(cur);
      return;
    }
    if (left > 0) {
      helper(cur + "(", left - 1, right);
    }
    if (right > 0) {
      helper(cur + ")", left, right - 1);
    }
  };

  const res = [];
  helper("", n, n);
  return res;
};
// @lc code=end
