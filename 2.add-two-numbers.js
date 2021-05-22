/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(-1);
  let curr = dummy;
  let carry = 0;
  while (l1 || l2) {
    let value = carry;
    if (l1) {
      value += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      value += l2.val;
      l2 = l2.next;
    }
    carry = Math.trunc(value / 10);
    value %= 10;
    curr.next = new ListNode(value);
    curr = curr.next;
  }
  if (carry) {
    curr.next = new ListNode(carry);
  }
  return dummy.next;
};
// @lc code=end
