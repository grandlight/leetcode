/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = [];
  const n = intervals.length;
  let i = 0;
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i++]);
  }
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(intervals[i][0], newInterval[0]),
      Math.max(intervals[i++][1], newInterval[1]),
    ];
  }
  res.push(newInterval);
  res.push(...intervals.slice(i));
  return res;
};
// @lc code=end
