/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const swap = (i, j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };
  const n = nums.length;
  let i = n - 2;
  let j = n - 1;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    --i;
  }
  if (i >= 0) {
    while (nums[j] <= nums[i]) {
      --j;
    }
    swap(i, j);
  }
  for (++i, j = n - 1; i < j; ++i, --j) {
    swap(i, j);
  }
};
// @lc code=end
