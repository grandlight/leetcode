/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];

  let isValid = (str) => {
    if (str.length === 0 || (str[0] === "0" && str.length > 1)) return false;
    return parseInt(str) < 256;
  };

  let dfs = (curr, ip, sec) => {
    if (sec === 4) {
      if (ip.length === 0) res.push(curr.slice());
      return;
    }
    for (let i = 1; i < 4 && i <= ip.length; ++i) {
      let str = ip.slice(0, i);
      if (!isValid(str)) return;
      dfs(sec === 0 ? str : `${curr}.${str}`, ip.slice(i), sec + 1);
    }
  };

  dfs("", s, 0);
  return res;
};
// @lc code=end
