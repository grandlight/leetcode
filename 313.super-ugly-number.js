/*
 * @lc app=leetcode id=313 lang=javascript
 *
 * [313] Super Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const res = [1];
  const idx = Array(primes.length).fill(0);
  while (res.length < n) {
    const ugly = [];
    for (let i = 0; i < primes.length; ++i) {
      ugly.push(res[idx[i]] * primes[i]);
    }
    const minUgly = Math.min(...ugly);
    for (let i = 0; i < primes.length; ++i) {
      if (minUgly === ugly[i]) {
        ++idx[i];
      }
    }
    res.push(minUgly);
  }
  return res[res.length - 1];
};
// @lc code=end
