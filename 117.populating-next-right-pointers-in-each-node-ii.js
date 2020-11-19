/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  let node = root.next;
  while (node) {
    if (node.left) {
      node = node.left;
      break;
    }
    if (node.right) {
      node = node.right;
      break;
    }
    node = node.next;
  }
  if (root.right) {
    root.right.next = node;
  }
  if (root.left) {
    root.left.next = root.right ? root.right : node;
  }
  connect(root.right);
  connect(root.left);
  return root;
};
// @lc code=end
