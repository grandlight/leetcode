#
# @lc app=leetcode id=94 lang=python3
#
# [94] Binary Tree Inorder Traversal
#

# Time:  O(n)
# Space: O(h)

# recursive
# Time:  O(n)
# Space: O(1)

from typing import List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res, stack = [], [(root, False)]
        while stack:
            node, is_visited = stack.pop()
            if node is None:
                continue
            if is_visited:
                res.append(node.val)
            else:
                stack.append((node.right, False))
                stack.append((node, True))
                stack.append((node.left, False))
        return res

        # recursive
        def helper(node: TreeNode):
            if not node:
                return
            helper(node.left)
            res.append(node.val)
            helper(node.right)

        res = []
        helper(root)
        return res


# @lc code=end
