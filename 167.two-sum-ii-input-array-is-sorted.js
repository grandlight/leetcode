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
  let record = new Map();
  for (let i in numbers) {
    if (record.has(target - numbers[i])) {
      return [record.get(target - numbers[i]), parseInt(i) + 1];
    }
    record.set(numbers[i], parseInt(i) + 1);
  }
};
// @lc code=end
