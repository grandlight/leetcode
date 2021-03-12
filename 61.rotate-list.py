#
# @lc app=leetcode id=61 lang=python3
#
# [61] Rotate List
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if not head or not head.next:
            return head

        curr, n = head, 1
        while curr.next:
            curr, n = curr.next, n + 1
        curr.next = head

        curr, tail = head, curr
        for _ in range(n - k % n):
            tail = curr
            curr = curr.next
        tail.next = None
        return curr


# @lc code=end
