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
  this.iter = iterator;
  this.kept = false;
  this.pVal;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (!this.kept) {
    this.pVal = this.iter.next();
  }
  this.kept = true;
  return this.pVal;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (!this.kept) {
    this.pVal = this.iter.next();
  }
  this.kept = false;
  return this.pVal;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  if (this.kept) return true;
  return this.iter.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end
