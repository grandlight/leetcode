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
  const isValid = (ip) => {
    if (!ip || ip.length > 3) {
      return false;
    }
    if (ip.length > 1 && ip[0] === "0") {
      return false;
    }
    return 0 <= Number(ip) && Number(ip) <= 255;
  };
  const helper = (cur, sec, idx) => {
    if (idx > s.length) {
      return;
    }
    if (sec === 4) {
      if (idx === s.length) {
        res.push(cur);
      }
      return;
    }
    for (let i = 1; i < 4; ++i) {
      const ip = s.slice(idx, idx + i);
      if (isValid(ip)) {
        if (sec === 3) {
          helper(cur + ip, sec + 1, idx + i);
        } else {
          helper(cur + ip + ".", sec + 1, idx + i);
        }
      }
    }
  };
  const res = [];
  helper("", 0, 0);
  return res;
};
// @lc code=end
