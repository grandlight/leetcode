/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const nodes = preorder.split(",");
  let count = 0;
  for (let i = 0; i < nodes.length - 1; ++i) {
    if (nodes[i] === "#") {
      if (count-- === 0) {
        return false;
      }
    } else {
      ++count;
    }
  }
  return count === 0 && nodes[nodes.length - 1] === "#";
};
// @lc code=end
