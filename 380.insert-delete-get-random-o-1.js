/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.list = [];
  this.dict = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (val in this.dict) {
    return false;
  }
  this.list.push(val);
  this.dict[val] = this.list.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!(val in this.dict)) {
    return false;
  }

  this.dict[this.list[this.list.length - 1]] = this.dict[val];

  const temp = this.list[this.dict[val]];
  this.list[this.dict[val]] = this.list[this.list.length - 1];
  this.list[this.list.length - 1] = temp;

  delete this.dict[val];
  this.list.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.list[Math.trunc(Math.random() * this.list.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
