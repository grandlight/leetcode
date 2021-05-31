/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function (head) {
  const dummy = new ListNode(-1);
  while (head) {
    const next = head.next;
    let curr = dummy;
    while (curr.next && curr.next.val <= head.val) {
      curr = curr.next;
    }
    head.next = curr.next;
    curr.next = head;
    head = next;
  }
  return dummy.next;
};
// @lc code=end
