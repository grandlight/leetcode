/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];

  let isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left++] !== s[right--]) return false;
    }
    return true;
  };

  let dfs = (curr, idx) => {
    if (idx === s.length) {
      res.push(curr.slice());
      return;
    }
    for (let i = idx; i < s.length; ++i) {
      if (isPalindrome(idx, i)) {
        dfs(curr.concat(s.slice(idx, i + 1)), i + 1);
      }
    }
  };

  dfs([], 0);
  return res;
};
// @lc code=end
