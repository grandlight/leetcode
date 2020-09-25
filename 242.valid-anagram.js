/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let count = {};
  for (let ch of s) {
    !count[ch] ? (count[ch] = 1) : ++count[ch];
  }
  for (let ch of t) {
    if (!count[ch] || --count[ch] < 0) return false;
  }
  return Object.values(count).every((n) => n === 0);
};
// @lc code=end
