#
# @lc app=leetcode id=142 lang=python3
#
# [142] Linked List Cycle II
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


# @lc code=start
class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                break
        if not fast or not fast.next:
            return None
        slow = head
        while slow is not fast:
            slow = slow.next
            fast = fast.next
        return slow


# @lc code=end
