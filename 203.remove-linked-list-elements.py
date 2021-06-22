#
# @lc app=leetcode id=203 lang=python3
#
# [203] Remove Linked List Elements
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        # iterative
        dummy = ListNode(-1, head)
        curr = dummy
        while curr.next:
            if curr.next.val == val:
                curr.next = curr.next.next
            else:
                curr = curr.next
        return dummy.next

        # recursive
        if not head:
            return head
        head.next = self.removeElements(head.next, val)
        return head if head.val != val else head.next


# @lc code=end
