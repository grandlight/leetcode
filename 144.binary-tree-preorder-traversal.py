#
# @lc app=leetcode id=144 lang=python3
#
# [144] Binary Tree Preorder Traversal
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
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        res, stack = [], [(root, False)]
        while stack:
            node, is_visited = stack.pop()
            if node is None:
                continue
            if is_visited:
                res.append(node.val)
            else:
                stack.append((node.right, False))
                stack.append((node.left, False))
                stack.append((node, True))
        return res

        # recursive
        def helper(node: TreeNode):
            if not node:
                return
            res.append(node.val)
            helper(node.left)
            helper(node.right)

        res = []
        helper(root)
        return res


# @lc code=end
