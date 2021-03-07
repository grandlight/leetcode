#
# @lc app=leetcode id=235 lang=python3
#
# [235] Lowest Common Ancestor of a Binary Search Tree
#

# Time:  O(n)
# Space: O(1)


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


# @lc code=start
class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        left, right = sorted([p.val, q.val])
        while left > root.val or root.val > right:
            root = root.left if left <= root.val else root.right
        return root


# @lc code=end
