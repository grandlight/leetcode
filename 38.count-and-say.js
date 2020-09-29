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
  let cas = "1";
  while (--n) {
    let casArray = cas.split("");
    cas = "";
    let count = 1;
    for (let i = 0; i < casArray.length; ++i) {
      if (casArray[i] !== casArray[i + 1]) {
        cas += `${count}${casArray[i]}`;
        count = 1;
      } else ++count;
    }
  }
  return cas;
};
// @lc code=end
