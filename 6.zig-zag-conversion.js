/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let res = "";
  const step = numRows * 2 - 2;
  for (let i = 0; i < numRows; ++i) {
    for (let j = i; j < s.length; j += step) {
      res += s[j];
      if (0 < i && i < numRows - 1 && j + step - i * 2 < s.length) {
        res += s[j + step - i * 2];
      }
    }
  }
  return res;
};
// @lc code=end
