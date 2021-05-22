/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function (head) {
  const merge = (l1, l2) => {
    const dummy = new ListNode(-1);
    let curr = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
  };
  if (!head || !head.next) {
    return head;
  }
  let prev = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return merge(sortList(head), sortList(slow));
};
// @lc code=end
