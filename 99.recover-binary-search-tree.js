/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const helper = (node) => {
    if (!node) {
      return;
    }
    helper(node.left);
    nodes.push(node);
    values.push(node.val);
    helper(node.right);
  };
  const nodes = [];
  const values = [];
  helper(root);
  values.sort((a, b) => a - b);
  for (let i = 0; i < nodes.length; ++i) {
    nodes[i].val = values[i];
  }
};
// @lc code=end
