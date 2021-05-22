/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let curr = 0;
  let total = 0;
  let start = 0;
  for (let i = 0; i < gas.length; ++i) {
    curr += gas[i] - cost[i];
    total += gas[i] - cost[i];
    if (curr < 0) {
      start = i + 1;
      curr = 0;
    }
  }
  return total >= 0 ? start : -1;
};
// @lc code=end
