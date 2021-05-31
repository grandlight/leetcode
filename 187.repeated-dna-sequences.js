/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const res = [];
  const lookup = new Set();
  for (let i = 0; i + 9 < s.length; ++i) {
    const t = s.slice(i, i + 10);
    if (!lookup.has(t)) {
      lookup.add(t);
    } else if (!res.includes(t)) {
      res.push(t);
    }
  }
  return res;
};
// @lc code=end
