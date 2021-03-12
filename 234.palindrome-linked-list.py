#
# @lc app=leetcode id=234 lang=python3
#
# [234] Palindrome Linked List
#

# reverse
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
    def isPalindrome(self, head: ListNode) -> bool:
        if not head or not head.next:
            return True
        slow, fast = head, head

        # reverse
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        curr = slow.next
        while curr.next:
            next = curr.next
            curr.next = next.next
            next.next = slow.next
            slow.next = next
        curr = head
        while slow.next:
            slow = slow.next
            if curr.val != slow.val:
                return False
            curr = curr.next
        return True

        # stack
        stack = [head.val]
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
            stack.append(slow.val)
        if not fast.next:
            stack.pop()
        while slow.next:
            slow = slow.next
            if stack.pop() != slow.val:
                return False
        return True


# @lc code=end
