#
# @lc app=leetcode id=147 lang=python3
#
# [147] Insertion Sort List
#

# Time:  O(n^2)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        dummy = ListNode(-1)
        while head:
            next = head.next
            curr = dummy
            while curr.next and curr.next.val <= head.val:
                curr = curr.next
            head.next = curr.next
            curr.next = head
            head = next
        return dummy.next


# @lc code=end
