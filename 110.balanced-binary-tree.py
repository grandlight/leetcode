#
# @lc app=leetcode id=110 lang=python3
#
# [110] Balanced Binary Tree
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
    def isBalanced(self, root: TreeNode) -> bool:
        def height(node: TreeNode):
            if not node:
                return 0
            lh, rh = height(node.left), height(node.right)
            if lh < 0 or rh < 0 or abs(lh - rh) > 1:
                return -1
            return 1 + max(lh, rh)

        return height(root) >= 0


# @lc code=end
