#
# @lc app=leetcode id=105 lang=python3
#
# [105] Construct Binary Tree from Preorder and Inorder Traversal
#

# Time:  O(n)
# Space: O(n)

from typing import List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        def helper(start, end):
            if start > end:
                return None
            node_val = next(preorder_iter)
            node = TreeNode(node_val)
            idx = inorder_lookup[node_val]
            node.left = helper(start, idx - 1)
            node.right = helper(idx + 1, end)
            return node

        preorder_iter = iter(preorder)
        inorder_lookup = {n: i for i, n in enumerate(inorder)}
        return helper(0, len(inorder) - 1)


# @lc code=end
