#
# @lc app=leetcode id=222 lang=python3
#
# [222] Count Complete Tree Nodes
#

# Time:  O((logn)^2)
# Space: O(1)


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def countNodes(self, root: TreeNode) -> int:
        left, lh, right, rh = root, 0, root, 0
        while left:
            left, lh = left.left, lh + 1
        while right:
            right, rh = right.right, rh + 1
        if lh == rh:
            return 2 ** lh - 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)


# @lc code=end
