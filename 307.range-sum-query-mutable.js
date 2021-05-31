/*
 * @lc app=leetcode id=307 lang=javascript
 *
 * [307] Range Sum Query - Mutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const n = nums.length;
  this.nums = nums;
  this.bit = Array(n + 1).fill(0);
  for (let i = 1; i < n + 1; ++i) {
    this.bit[i] = nums[i - 1] + this.bit[i - 1];
  }
  for (let i = n; i > 0; --i) {
    lastI = i - (i & -i);
    this.bit[i] -= this.bit[lastI];
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  const diff = val - this.nums[index];
  if (diff) {
    i = index + 1;
    while (i < this.bit.length) {
      this.bit[i] += diff;
      i += i & -i;
    }
    this.nums[index] = val;
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  const sum = (i) => {
    let s = 0;
    ++i;
    while (i > 0) {
      s += this.bit[i];
      i -= i & -i;
    }
    return s;
  };
  return sum(right) - sum(left - 1);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end
