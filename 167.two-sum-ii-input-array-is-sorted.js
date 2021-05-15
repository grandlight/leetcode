/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];
  while (left < right) {
    if (numbers[left] + numbers[right] < target) {
      ++left;
    } else if (numbers[left] + numbers[right] > target) {
      --right;
    } else {
      return [left + 1, right + 1];
    }
  }
};
// @lc code=end
