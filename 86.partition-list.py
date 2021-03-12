#
# @lc app=leetcode id=86 lang=python3
#
# [86] Partition List
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        dummy_less, dummy = ListNode(-1), ListNode(-1)
        curr_less, curr = dummy_less, dummy
        while head:
            if head.val < x:
                curr_less.next = head
                curr_less = curr_less.next
            else:
                curr.next = head
                curr = curr.next
            head = head.next
        curr_less.next = dummy.next
        curr.next = None
        return dummy_less.next


# @lc code=end
