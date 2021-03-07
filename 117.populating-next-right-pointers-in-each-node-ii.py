#
# @lc app=leetcode id=117 lang=python3
#
# [117] Populating Next Right Pointers in Each Node II
#

# Time:  O(n)
# Space: O(1)


class Node:
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


# @lc code=start
class Solution:
    def connect(self, root: "Node") -> "Node":
        node = Node()
        curr = node
        head = root
        while root:
            if root.left:
                curr.next = root.left
                curr = curr.next
            if root.right:
                curr.next = root.right
                curr = curr.next
            root = root.next
            if not root:
                curr = node
                root = node.next
                node.next = None
        return head


# @lc code=end
