/*
 * @lc app=leetcode id=398 lang=javascript
 *
 * [398] Random Pick Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let res = -1;
  let cnt = 1;
  for (let i = 0; i < this.nums.length; ++i) {
    if (this.nums[i] !== target) {
      continue;
    }
    if (Math.trunc(Math.random() * cnt) === 0) {
      res = i;
    }
    ++cnt;
  }
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end
