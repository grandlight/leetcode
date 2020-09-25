/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let strings = s.split(" ");
  if (pattern.length !== strings.length) return false;
  let pmap = {};
  let smap = {};

  for (let i = 0; i < pattern.length; ++i) {
    if (!pmap[pattern[i]]) pmap[pattern[i]] = strings[i];
    if (!smap[strings[i]]) smap[strings[i]] = pattern[i];
    if (smap[strings[i]] !== pattern[i] || pmap[pattern[i]] !== strings[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
