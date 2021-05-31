/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  const dummy = new ListNode(-1, head);
  let prev = dummy;
  while (prev.next && prev.next.next) {
    const temp = prev.next.next;
    prev.next.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
    prev = temp.next;
  }
  return dummy.next;
};
// @lc code=end
