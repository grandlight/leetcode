/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let i = 0;
  let j = 0;
  while (i < version1.length || j < version2.length) {
    let v1 = 0;
    let v2 = 0;
    while (i < version1.length && version1[i] !== ".") {
      v1 = v1 * 10 + Number(version1[i++]);
    }
    while (j < version2.length && version2[j] !== ".") {
      v2 = v2 * 10 + Number(version2[j++]);
    }
    if (v1 !== v2) {
      return v1 > v2 ? 1 : -1;
    }
    ++i, ++j;
  }
  return 0;
};
// @lc code=end
