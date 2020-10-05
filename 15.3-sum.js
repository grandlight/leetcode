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
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);

  let target = 0;
  let triplets = [];
  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > target) {
      break;
    } else if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        triplets.push([nums[i], nums[j], nums[k]]);
        // at most 2 duplicate (nums[i], nums[j])
        while (nums[++j] === nums[j - 1]);
        while (nums[--k] === nums[k + 1]);
      } else {
        sum < target ? ++j : --k;
      }
    }
  }
  return triplets;
};
// @lc code=end
