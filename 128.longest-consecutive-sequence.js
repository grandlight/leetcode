/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let res = 0;
  const lookup = new Set(nums);
  for (const num of nums) {
    if (!lookup.has(num)) {
      continue;
    }
    lookup.delete(num);
    let prev = num - 1;
    let next = num + 1;
    while (lookup.has(prev)) {
      lookup.delete(prev--);
    }
    while (lookup.has(next)) {
      lookup.delete(next++);
    }
    res = Math.max(res, next - prev - 1);
  }
  return res;
};
// @lc code=end
