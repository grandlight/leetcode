/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const eHead = head.next;
  let o = head;
  let e = head.next;
  while (e && e.next) {
    o.next = e.next;
    o = o.next;
    e.next = o.next;
    e = e.next;
  }
  o.next = eHead;
  return head;
};
// @lc code=end
