#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(-1)
        curr, carry = dummy, 0
        while l1 or l2:
            value = carry
            if l1:
                value += l1.val
                l1 = l1.next
            if l2:
                value += l2.val
                l2 = l2.next
            carry, value = divmod(value, 10)
            curr.next = ListNode(value)
            curr = curr.next
        if carry == 1:
            curr.next = ListNode(1)
        return dummy.next


# @lc code=end
