/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var currA = headA;
  var currB = headB;
  while (currA !== currB) {
    currA = !currA ? headB : currA.next;
    currB = !currB ? headA : currB.next;
  }
  return currA;
};
// @lc code=end
