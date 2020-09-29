/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true;

  let stack = [];
  for (let ch of s) {
    if (ch === "(") stack.push(")");
    else if (ch === "[") stack.push("]");
    else if (ch === "{") stack.push("}");
    else if (ch !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
