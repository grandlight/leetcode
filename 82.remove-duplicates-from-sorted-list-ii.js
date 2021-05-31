/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const dummy = new ListNode(-1, head);
  let prev = dummy;
  while (prev.next) {
    let curr = prev.next;
    while (curr.next && curr.val === curr.next.val) {
      curr = curr.next;
    }
    if (curr !== prev.next) {
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }
  }
  return dummy.next;
};
// @lc code=end
