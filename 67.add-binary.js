/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum = a.split("").map((ch) => parseInt(ch));
  let tmp = b.split("").map((ch) => parseInt(ch));
  if (tmp.length > sum.length) {
    [sum, tmp] = [tmp, sum];
  }
  for (let i = tmp.length - 1, j = sum.length - 1; i >= 0; --i, --j) {
    sum[j] += tmp[i];
  }

  for (let i = sum.length - 1; i >= 0; --i) {
    if (sum[i] < 2) {
      continue;
    }
    sum[i] %= 2;
    i > 0 ? ++sum[i - 1] : sum.unshift(1);
  }
  return sum.join("");
};
// @lc code=end
