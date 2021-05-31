/*
 * @lc app=leetcode id=385 lang=javascript
 *
 * [385] Mini Parser
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if (s[0] !== "[") {
    return new NestedInteger(Number(s));
  }
  const stack = [];
  let i = 0;
  for (let j = 0; j < s.length; ++j) {
    if (s[j] === "[") {
      stack.push(new NestedInteger());
      i = j + 1;
    } else if (s[j] === "," || s[j] === "]") {
      if (s[j - 1].match(/\d/)) {
        const ni = new NestedInteger();
        ni.setInteger(Number(s.slice(i, j)));
        stack[stack.length - 1].add(ni);
      }
      if (s[j] === "]" && stack.length > 1) {
        const curr = stack.pop();
        stack[stack.length - 1].add(curr);
      }
      i = j + 1;
    }
  }
  return stack[stack.length - 1];
};
// @lc code=end
