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
  let stk = [];
  let lookup = { "(": ")", "[": "]", "{": "}" };
  for (p of s) {
    if (p in lookup) {
      stk.push(p);
    } else if (stk.length === 0 || lookup[stk.pop()] !== p) {
      return false;
    }
  }
  return stk.length === 0;
};
// @lc code=end
