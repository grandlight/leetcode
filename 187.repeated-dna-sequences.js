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
  if (s.length < 11) return [];

  let bit3 = (c) => c.charCodeAt(0).toString(2) & 7;
  let bit27 = (n) => n & 0x7ffffff;

  let cur;
  let res = [];
  let map = {};
  for (let i = 0; i < 9; ++i) {
    cur = (cur << 3) | bit3(s[i]);
  }
  for (let i = 9; i < s.length; ++i) {
    cur = (bit27(cur) << 3) | bit3(s[i]);
    if (map[cur] === undefined) {
      map[cur] = 1;
    } else {
      if (map[cur] === 1) {
        res.push(s.slice(i - 9, i + 1));
      }
      ++map[cur];
    }
  }
  return res;
};
// @lc code=end
