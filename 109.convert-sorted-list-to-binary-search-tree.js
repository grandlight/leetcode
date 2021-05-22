/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);
  let prev = head;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  fast = slow.next;
  prev.next = null;
  let root = new TreeNode(slow.val);
  if (head !== slow) {
    root.left = sortedListToBST(head);
  }
  root.right = sortedListToBST(fast);
  return root;
};
// @lc code=end
