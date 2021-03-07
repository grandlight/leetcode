#
# @lc app=leetcode id=116 lang=python3
#
# [116] Populating Next Right Pointers in Each Node
#

# Time:  O(n)
# Space: O(1)

# iterative
# Time:  O(n)
# Space: O(logn)

import collections


class Node:
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


# @lc code=start
class Solution:
    def connect(self, root: "Node") -> "Node":
        if not root:
            return root

        # recursive
        if root.left:
            root.left.next = root.right
        if root.right and root.next:
            root.right.next = root.next.left
        self.connect(root.left)
        self.connect(root.right)
        return root

        # iterative
        queue = collections.deque([root])
        while queue:
            qsize = len(queue)
            for i in range(qsize):
                node = queue.popleft()
                if i < qsize - 1:
                    node.next = queue[0]
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return root


# @lc code=end
