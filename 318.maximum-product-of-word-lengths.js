/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let res = 0;
  const mask = Array(words.length).fill(0);
  for (let i = 0; i < words.length; ++i) {
    for (let j = 0; j < words[i].length; ++j) {
      mask[i] |= 1 << (words[i][j].charCodeAt() - 97);
    }
    for (let j = 0; j < i; ++j) {
      if (!(mask[i] & mask[j])) {
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }
  return res;
};
// @lc code=end
