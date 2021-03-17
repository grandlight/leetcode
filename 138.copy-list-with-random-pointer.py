#
# @lc app=leetcode id=138 lang=python3
#
# [138] Copy List with Random Pointer
#

# Time:  O(n)
# Space: O(1)

# hash
# Time:  O(n)
# Space: O(n)


class Node:
    def __init__(self, x: int, next: "Node" = None, random: "Node" = None):
        self.val = int(x)
        self.next = next
        self.random = random


# @lc code=start
class Solution:
    def copyRandomList(self, head: "Node") -> "Node":
        curr = head
        while curr:
            copied = Node(curr.val)
            copied.next = curr.next
            curr.next = copied
            curr = copied.next
        curr = head
        while curr:
            if curr.random:
                curr.next.random = curr.random.next
            curr = curr.next.next

        dummy = Node(-1)
        copied, curr = dummy, head
        while curr:
            copied.next = curr.next
            curr.next = curr.next.next
            copied, curr = copied.next, curr.next
        return dummy.next

        # hash
        dummy = Node(-1)
        curr, prev, copies = head, dummy, {}
        while curr:
            copies[curr] = Node(curr.val)
            prev.next = copies[curr]
            prev, curr = prev.next, curr.next
        curr = head
        while curr:
            if curr.random:
                copies[curr].random = copies[curr.random]
            curr = curr.next
        return dummy.next


# @lc code=end
