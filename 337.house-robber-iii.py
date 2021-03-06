#
# @lc app=leetcode id=337 lang=python3
#
# [337] House Robber III
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
    def rob(self, root: TreeNode) -> int:
        def helper(node: TreeNode):  # -> (node is robbed, node is not robbed)
            if not node:
                return (0, 0)
            left, right = helper(node.left), helper(node.right)
            return (node.val + left[1] + right[1], max(left) + max(right))

        return max(helper(root))


# @lc code=end
