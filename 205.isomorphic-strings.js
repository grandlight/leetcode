/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; ++i) {
    if (!sMap[s[i]]) {
      sMap[s[i]] = t[i];
    }
    if (!tMap[t[i]]) {
      tMap[t[i]] = s[i];
    }
    if (sMap[s[i]] !== t[i] || tMap[t[i]] != s[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
