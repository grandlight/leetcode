/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stk = [];
  let node = root;
  let count = 0;
  while (node || stk.length) {
    while (node) {
      stk.push(node);
      node = node.left;
    }
    node = stk.pop();
    if (++count === k) {
      return node.val;
    }
    node = node.right;
  }
  return 0;
};
// @lc code=end
