/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
  this.tmp = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length) {
    this.tmp.push(this.queue.shift());
  }
  while (this.tmp.length > 1) {
    this.queue.push(this.tmp.shift());
  }
  return this.tmp.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue.length) {
    this.tmp.push(this.queue.shift());
  }
  while (this.tmp.length > 1) {
    this.queue.push(this.tmp.shift());
  }
  let pop = this.tmp.shift();
  this.queue.push(pop);
  return pop;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
