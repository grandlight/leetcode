/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let res = 0;
  let cur = 0;
  let num = 0;
  let op = "+";
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (c.match(/\d/)) {
      num = num * 10 + Number(c);
    }
    if ("+-*/".includes(c) || i === s.length - 1) {
      if (op === "+") {
        cur += num;
      } else if (op === "-") {
        cur -= num;
      } else if (op === "*") {
        cur *= num;
      } else if (op === "/") {
        cur = Math.trunc(cur / num);
      }
      if (c === "+" || c === "-" || i === s.length - 1) {
        res += cur;
        cur = 0;
      }
      op = c;
      num = 0;
    }
  }
  return res;
};
// @lc code=end
