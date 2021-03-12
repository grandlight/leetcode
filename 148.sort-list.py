#
# @lc app=leetcode id=148 lang=python3
#
# [148] Sort List
#

# Time:  O(nlogn)
# Space: O(logn)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        def merge(l1: ListNode, l2: ListNode):
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

        if not head or not head.next:
            return head
        prev, slow, fast = None, head, head
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
        prev.next = None
        return merge(self.sortList(head), self.sortList(slow))


# @lc code=end
