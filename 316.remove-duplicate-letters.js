/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const res = ["0"];
  const count = {};
  const visited = {};
  for (let i = 0; i < s.length; ++i) {
    count[s[i]] = count[s[i]] + 1 || 1;
  }
  for (let i = 0; i < s.length; ++i) {
    --count[s[i]];
    if (visited[s[i]]) {
      continue;
    }
    while (s[i] < res[res.length - 1] && count[res[res.length - 1]]) {
      visited[res[res.length - 1]] = 0;
      res.pop();
    }
    res.push(s[i]);
    visited[s[i]] = true;
  }
  return res.slice(1).join("");
};
// @lc code=end
