#
# @lc app=leetcode id=82 lang=python3
#
# [82] Remove Duplicates from Sorted List II
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        # iterative
        dummy = ListNode(-1, head)
        prev, curr = dummy, dummy.next
        while curr:
            if curr.next and curr.val == curr.next.val:
                dup_val = curr.val
                while curr and curr.val == dup_val:
                    curr = curr.next
                prev.next = curr
            else:
                prev.next = curr
                prev = prev.next
                curr = curr.next
        return dummy.next

        # recursive
        if head.val == head.next.val:
            while head.next and head.val == head.next.val:
                head = head.next
            return self.deleteDuplicates(head.next)

        head.next = self.deleteDuplicates(head.next)
        return head


# @lc code=end
