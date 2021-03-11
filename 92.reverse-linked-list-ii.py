#
# @lc app=leetcode id=92 lang=python3
#
# [92] Reverse Linked List II
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        dummy = ListNode(-1, head)
        prev = dummy
        for i in range(left - 1):
            prev = prev.next
        curr = prev.next
        for i in range(left, right):
            next = curr.next
            curr.next = next.next
            next.next = prev.next
            prev.next = next
        return dummy.next


# @lc code=end
