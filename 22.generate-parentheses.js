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
  let result = [];

  let dfs = (left, right, curr) => {
    if (!left && !right) {
      result.push(curr);
      return;
    } else if (left > right) return;

    if (left) dfs(left - 1, right, curr + "(");
    if (right) dfs(left, right - 1, curr + ")");
  };

  dfs(n, n, "");
  return result;
};
// @lc code=end
