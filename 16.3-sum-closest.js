/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closet = Infinity;
  for (let i = 0; i < nums.length - 2; ++i) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        return target;
      }
      if (Math.abs(target - sum) < Math.abs(target - closet)) {
        closet = sum;
      }
      sum < target ? ++j : --k;
    }
  }
  return closet;
};
// @lc code=end
