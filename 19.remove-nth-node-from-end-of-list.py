#
# @lc app=leetcode id=19 lang=python3
#
# [19] Remove Nth Node From End of List
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(-1, head)
        slow, fast = dummy, dummy
        for i in range(n):
            fast = fast.next
        while fast.next:
            slow, fast = slow.next, fast.next

        d_node = slow.next
        slow.next = slow.next.next
        del d_node

        return dummy.next


# @lc code=end
