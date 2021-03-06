#
# @lc app=leetcode id=226 lang=python3
#
# [226] Invert Binary Tree
#

# Time:  O(n)
# Space: O(h)

import collections


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return root

        # iterative
        queue = collections.deque([root])
        while queue:
            node = queue.popleft()
            node.left, node.right = node.right, node.left
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return root

        # recursive
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root


# @lc code=end
