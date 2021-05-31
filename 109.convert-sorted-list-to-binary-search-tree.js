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
  const helper = (head, tail) => {
    if (head === tail) {
      return null;
    }
    let slow = head;
    let fast = head;
    while (fast !== tail && fast.next !== tail) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const node = new TreeNode(slow.val);
    node.left = helper(head, slow);
    node.right = helper(slow.next, tail);
    return node;
  };
  return head ? helper(head, null) : null;
};
// @lc code=end
