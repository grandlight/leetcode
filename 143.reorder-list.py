#
# @lc app=leetcode id=143 lang=python3
#
# [143] Reorder List
#

# Time:  O(n)
# Space: O(1)

# stack
# Time:  O(n)
# Space: O(n)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def reorderList(self, head: ListNode) -> None:
        if not head or not head.next:
            return head

        slow, fast = head, head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        prev, curr = None, slow.next
        slow.next = None
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        while head and prev:
            next = head.next
            head.next = prev
            prev = prev.next
            head.next.next = next
            head = next
        return

        # stack
        curr, stack = head, []
        while curr:
            stack.append(curr)
            curr = curr.next
        curr = head
        for i in range((len(stack) - 1) // 2):
            node = stack.pop()
            next = curr.next
            curr.next = node
            node.next = next
            curr = next
        stack[-1].next = None


# @lc code=end
