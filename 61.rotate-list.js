/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  let curr = head;
  let len = 1;
  while (curr.next) {
    curr = curr.next;
    ++len;
  }
  curr.next = head;
  for (let i = 0; i < len - (k % len); ++i) {
    curr = curr.next;
  }
  const newHead = curr.next;
  curr.next = null;
  return newHead;
};
// @lc code=end
