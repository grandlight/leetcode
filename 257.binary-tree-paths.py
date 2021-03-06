#
# @lc app=leetcode id=257 lang=python3
#
# [257] Binary Tree Paths
#

# Time:  O(n * h)
# Space: O(h)

from typing import List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        def helper(node: TreeNode, path):
            if not node.left and not node.right:
                res.append(path + str(node.val))
            if node.left:
                helper(node.left, path + str(node.val) + "->")
            if node.right:
                helper(node.right, path + str(node.val) + "->")

        res = []
        if root:
            helper(root, "")
        return res


# @lc code=end
