/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  res = 0;
  const primes = new Array(n).fill(true);
  for (let i = 2; i < n; ++i) {
    if (!primes[i]) {
      continue;
    }
    ++res;
    for (let j = 2; i * j < n; ++j) {
      primes[i * j] = false;
    }
  }
  return res;
};
// @lc code=end
