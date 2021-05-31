/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const lookup = Array(10).fill(0);
  let a = 0;
  let b = 0;
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) {
      ++a;
    } else {
      if (lookup[secret[i].charCodeAt() - 48]++ < 0) {
        ++b;
      }
      if (lookup[guess[i].charCodeAt() - 48]-- > 0) {
        ++b;
      }
    }
  }
  return `${a}A${b}B`;
};
// @lc code=end
