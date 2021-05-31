/*
 * @lc app=leetcode id=284 lang=javascript
 *
 * [284] Peeking Iterator
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.val = null;
  this._hasNext = iterator.hasNext();
  this._hasPeek = false;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (!this._hasPeek) {
    this._hasPeek = true;
    this.val = this.iterator.next();
  }
  return this.val;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  this.val = this.peek();
  this._hasPeek = false;
  this._hasNext = this.iterator.hasNext();
  return this.val;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this._hasNext;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end
