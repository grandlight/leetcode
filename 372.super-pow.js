/*
 * @lc app=leetcode id=372 lang=javascript
 *
 * [372] Super Pow
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  const helper = (x, n) => {
    if (n === 0) {
      return 1;
    }
    if (n === 1) {
      return x % 1337;
    }
    return (
      (helper(x % 1337, Math.trunc(n / 2)) *
        helper(x % 1337, n - Math.trunc(n / 2))) %
      1337
    );
  };
  let res = 1;
  for (const x of b) {
    res = (helper(res, 10) * helper(a, x)) % 1337;
  }
  return res;
};
// @lc code=end
