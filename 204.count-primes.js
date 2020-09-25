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
  if (n < 3) return 0;

  let primes = new Array(n);
  primes[0] = 0;
  primes[1] = 0;
  primes[2] = 1;
  for (let i = 4; i < n; i += 2) primes[i] = 0;
  for (let i = 3; i < n; i += 2) primes[i] = 1;

  for (let i = 3; i < n; i += 2) {
    if (!primes[i]) {
      continue;
    }
    for (let j = 3; j * i < n; j += 2) {
      primes[j * i] = 0;
    }
  }

  return primes.reduce((prev, curr) => prev + curr, 0);
};
// @lc code=end
