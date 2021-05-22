/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const helper = (left, right) => {
    const pivot = nums[left];
    let i = left + 1;
    let j = right;
    while (i <= j) {
      if (nums[i] < pivot && pivot < nums[j]) {
        const tmp = nums[i];
        nums[i++] = nums[j];
        nums[j--] = tmp;
      }
      if (nums[i] >= pivot) {
        ++i;
      }
      if (nums[j] <= pivot) {
        --j;
      }
    }
    [nums[left], nums[j]] = [nums[j], nums[left]];
    return j;
  };
  let left = 0;
  let right = nums.length - 1;
  while (true) {
    const pos = helper(left, right);
    if (pos === k - 1) {
      return nums[pos];
    }
    pos < k - 1 ? (left = pos + 1) : (right = pos - 1);
  }
};
// @lc code=end
