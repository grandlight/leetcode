/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const helper = (cur, node) => {
    if (!node) {
      return 0;
    }
    cur = cur * 10 + node.val;
    if (!node.left && !node.right) {
      return cur;
    }
    return helper(cur, node.left) + helper(cur, node.right);
  };
  return helper(0, root);
};
// @lc code=end
