/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] < target) {
        ++left;
      } else if (nums[left] + nums[right] > target) {
        --right;
      } else {
        res.push([nums[i], nums[left++], nums[right--]]);
        while (left < right && nums[left] === nums[left - 1]) {
          ++left;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          --right;
        }
      }
    }
  }
  return res;
};
// @lc code=end
