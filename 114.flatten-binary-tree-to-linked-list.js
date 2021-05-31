/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
var flatten = function (root) {
  if (!root) {
    return;
  }
  flatten(root.left);
  flatten(root.right);
  const tmp = root.right;
  root.right = root.left;
  root.left = null;
  while (root.right) {
    root = root.right;
  }
  root.right = tmp;
};
// @lc code=end
