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
  let n = nums.length;
  if (n < 4) return [];
  nums.sort((a, b) => a - b);

  let sum4nums = (i, j, k, l) => {
    return nums[i] + nums[j] + nums[k] + nums[l];
  };

  let quadruplets = [];
  for (let i = 0; i < n - 3; ++i) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    if (sum4nums(i, i + 1, i + 2, i + 3) > target) break;
    if (sum4nums(i, n - 3, n - 2, n - 1) < target) continue;
    for (let j = i + 1; j < n - 2; ++j) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      if (sum4nums(i, j, j + 1, j + 2) > target) break;
      if (sum4nums(i, j, n - 2, n - 1) < target) continue;
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = sum4nums(i, j, k, l);
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[k], nums[l]]);
          while (nums[++k] == nums[k - 1]);
          while (nums[--l] == nums[l + 1]);
        } else {
          sum < target ? ++k : --l;
        }
      }
    }
  }
  return quadruplets;
};
// @lc code=end
