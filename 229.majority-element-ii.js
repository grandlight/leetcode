/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let major1;
  let major2;
  let count1 = 0;
  let count2 = 0;

  for (num of nums) {
    if (num === major1) ++count1;
    else if (num === major2) ++count2;
    else if (count1 === 0) {
      major1 = num;
      ++count1;
    } else if (count2 === 0) {
      major2 = num;
      ++count2;
    } else {
      --count1;
      --count2;
    }
  }

  count1 = 0;
  count2 = 0;
  for (num of nums) {
    if (num === major1) ++count1;
    else if (num === major2) ++count2;
  }

  let majorities = [];
  if (count1 > nums.length / 3) majorities.push(major1);
  if (count2 > nums.length / 3) majorities.push(major2);
  return majorities;
};
// @lc code=end
