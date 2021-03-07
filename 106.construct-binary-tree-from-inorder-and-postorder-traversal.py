#
# @lc app=leetcode id=106 lang=python3
#
# [106] Construct Binary Tree from Inorder and Postorder Traversal
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
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        def helper(start, end):
            if start > end:
                return None
            node_val = next(postorder_iter)
            node = TreeNode(node_val)
            idx = inorder_lookup[node_val]
            node.right = helper(idx + 1, end)
            node.left = helper(start, idx - 1)
            return node

        postorder_iter = iter(postorder[::-1])
        inorder_lookup = {n: i for i, n in enumerate(inorder)}
        return helper(0, len(inorder) - 1)


# @lc code=end
