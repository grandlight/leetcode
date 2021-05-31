/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return;
  }
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null;
  let curr = slow.next;
  slow.next = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  while (head && prev) {
    const next = head.next;
    head.next = prev;
    prev = prev.next;
    head.next.next = next;
    head = next;
  }
  return;
};
// @lc code=end
