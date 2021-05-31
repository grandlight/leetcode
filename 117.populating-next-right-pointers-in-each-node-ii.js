/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
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
  const head = root;
  const dummy = new Node(-1);
  let curr = dummy;
  while (root) {
    if (root.left) {
      curr.next = root.left;
      curr = curr.next;
    }
    if (root.right) {
      curr.next = root.right;
      curr = curr.next;
    }
    root = root.next;
    if (!root) {
      curr = dummy;
      root = dummy.next;
      dummy.next = null;
    }
  }
  return head;
};
// @lc code=end
