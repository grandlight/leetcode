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
  if (s.length !== t.length) {
    return false;
  }
  const st = {};
  const ts = {};
  for (let i = 0; i < s.length; ++i) {
    if (!(s[i] in st)) {
      if (t[i] in ts) {
        return false;
      }
      st[s[i]] = t[i];
      ts[t[i]] = s[i];
    } else if (st[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
