/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = [];
  intervals = intervals.sort((a, b) =>
    a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
  );
  for (const itvl of intervals) {
    if (!res.length || res[res.length - 1][1] < itvl[0]) {
      res.push(itvl);
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], itvl[1]);
    }
  }
  return res;
};
// @lc code=end
