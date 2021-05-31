/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function (root) {
  let left = root;
  let right = root;
  let leftH = 0;
  let rightH = 0;
  while (left) {
    left = left.left;
    ++leftH;
  }
  while (right) {
    right = right.right;
    ++rightH;
  }
  if (leftH === rightH) {
    return 2 ** leftH - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
