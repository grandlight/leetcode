/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head || !head.next) {
    return head;
  }
  const dummy = new ListNode(-1, head);
  let prev = dummy;
  while (prev.next && prev.next.val < x) {
    prev = prev.next;
  }
  let curr = prev;
  while (curr.next) {
    if (curr.next.val < x) {
      const next = curr.next;
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
      prev = prev.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
};
// @lc code=end
