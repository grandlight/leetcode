/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root;
  }
  if (root.left) {
    root.left.next = root.right;
  }
  if (root.right && root.next) {
    root.right.next = root.next.left;
  }
  connect(root.left);
  connect(root.right);
  return root;
};
// @lc code=end
