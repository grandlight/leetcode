/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; ++j) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          ++left, --right;
          while (left < right && nums[left] === nums[left - 1]) {
            ++left;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            --right;
          }
        } else {
          sum < target ? ++left : --right;
        }
      }
    }
  }
  return res;
};
// @lc code=end