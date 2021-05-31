/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const tokens = path.split("/");
  for (const token of tokens) {
    if (token === "..") {
      if (stack.length) {
        stack.pop();
      }
    } else if (token && token !== ".") {
      stack.push(token);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
