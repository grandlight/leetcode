/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

// @lc code=start
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const copies = new Map([[null, null]]);
  let curr = head;
  while (curr) {
    copies.set(curr, new Node(curr.val));
    curr = curr.next;
  }
  curr = head;
  while (curr) {
    const node = copies.get(curr);
    node.next = copies.get(curr.next);
    node.random = copies.get(curr.random);
    curr = curr.next;
  }
  return copies.get(head);
};
// @lc code=end
