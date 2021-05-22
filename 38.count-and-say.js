/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let res = "1";
  for (let idx = 1; idx < n; ++idx) {
    let cur = "";
    for (let i = 0; i < res.length; ++i) {
      let cnt = 1;
      while (i + 1 < res.length && res[i] === res[i + 1]) {
        ++cnt, ++i;
      }
      cur += `${cnt}${res[i]}`;
    }
    res = cur;
  }
  return res;
};
// @lc code=end
