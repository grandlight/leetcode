#
# @lc app=leetcode id=24 lang=python3
#
# [24] Swap Nodes in Pairs
#

# iterative
# Time:  O(n)
# Space: O(1)

# recursive
# Time:  O(n)
# Space: O(n)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        # iterative
        dummy = ListNode(0, head)
        curr = dummy
        while curr.next and curr.next.next:
            next1, next2, next3 = curr.next, curr.next.next, curr.next.next.next
            curr.next = next2
            next2.next = next1
            next1.next = next3
            curr = next1
        return dummy.next

        # recursive
        next = head.next
        head.next = self.swapPairs(next.next)
        next.next = head
        return next


# @lc code=end
