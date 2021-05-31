/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let n = 0;
  let curr = [];
  const nums = [];
  const strs = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i].match(/\d/)) {
      n = n * 10 + Number(s[i]);
    } else if (s[i].match(/[A-Za-z]/)) {
      curr.push(s[i]);
    } else if (s[i] === "[") {
      nums.push(n);
      strs.push(curr);
      n = 0;
      curr = [];
    } else if (s[i] === "]") {
      for (let num = nums.pop(); num > 0; --num) {
        strs[strs.length - 1].push(...curr);
      }
      curr = strs.pop();
    }
  }
  return curr.join("");
};
// @lc code=end
