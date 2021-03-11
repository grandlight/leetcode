#
# @lc app=leetcode id=206 lang=python3
#
# [206] Reverse Linked List
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
    def reverseList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        # iterative
        prev, curr = None, head
        while curr:
            curr.next, prev, curr = prev, curr, curr.next
        return prev

        # iterative (dummy)
        dummy = ListNode()
        while head:
            dummy.next, head.next, head = head, dummy.next, head.next
        return dummy.next

        # recursive
        new_head = self.reverseList(head.next)
        head.next.next, head.next = head, None
        return new_head


# @lc code=end
