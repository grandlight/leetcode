#
# @lc app=leetcode id=129 lang=python3
#
# [129] Sum Root to Leaf Numbers
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
    def sumNumbers(self, root: TreeNode) -> int:
        def helper(cur, node: TreeNode):
            if not node:
                return 0
            cur = cur * 10 + node.val
            if not node.left and not node.right:
                return cur
            return helper(cur, node.left) + helper(cur, node.right)

        return helper(0, root)


# @lc code=end
