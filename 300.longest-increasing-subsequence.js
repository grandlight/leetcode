/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const res = [nums[0]];
  for (const num of nums) {
    if (num < res[0]) {
      res[0] = num;
    } else if (num > res[res.length - 1]) {
      res.push(num);
    } else {
      let left = 0;
      let right = res.length;
      while (left < right) {
        const mid = left + Math.trunc((right - left) / 2);
        if (res[mid] < num) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      res[right] = num;
    }
  }
  return res.length;
};
// @lc code=end
