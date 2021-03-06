#
# @lc app=leetcode id=111 lang=python3
#
# [111] Minimum Depth of Binary Tree
#

# Time:  O(n)
# Space: O(h)


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        if root.left and root.right:
            return 1 + min(self.minDepth(root.left), self.minDepth(root.right))
        else:
            return 1 + max(self.minDepth(root.left), self.minDepth(root.right))


# @lc code=end
