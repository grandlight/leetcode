#
# @lc app=leetcode id=23 lang=python3
#
# [23] Merge k Sorted Lists
#

# Time:  O(nlogk)
# Space: O(1)

from typing import List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists:
            return None

        def merge2Lists(l1: ListNode, l2: ListNode) -> ListNode:
            dummy = ListNode(-1)
            curr = dummy
            while l1 and l2:
                if l1.val < l2.val:
                    curr.next = l1
                    l1 = l1.next
                else:
                    curr.next = l2
                    l2 = l2.next
                curr = curr.next
            curr.next = l1 or l2
            return dummy.next

        def helper(left, right):
            if left == right:
                return lists[left]
            if left + 1 == right:
                return merge2Lists(lists[left], lists[right])
            mid = left + (right - left) // 2
            return merge2Lists(helper(left, mid), helper(mid + 1, right))

        return helper(0, len(lists) - 1)


# @lc code=end
