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
  const isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left++] !== s[right--]) {
        return false;
      }
    }
    return true;
  };

  const helper = (cur, idx) => {
    if (idx === s.length) {
      res.push(cur.slice());
      return;
    }
    for (let end = idx + 1; end < s.length + 1; ++end) {
      if (isPalindrome(idx, end - 1)) {
        cur.push(s.slice(idx, end));
        helper(cur, end);
        cur.pop();
      }
    }
  };
  const res = [];
  helper([], 0);
  return res;
};
// @lc code=end
