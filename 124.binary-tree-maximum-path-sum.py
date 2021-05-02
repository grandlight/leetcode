#
# @lc app=leetcode id=124 lang=python3
#
# [124] Binary Tree Maximum Path Sum
#

# Time:  O(n)
# Space: O(h), h is height of binary tree


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        # -> (max_without_parent, max_with_parent)
        def helper(node: TreeNode):
            if not node:
                return (float("-inf"), 0)

            max_left, curr_left = helper(node.left)
            max_right, curr_right = helper(node.right)
            root_max = max(max_left, max_right, node.val + max(curr_left, 0) + max(curr_right, 0))
            node_max = node.val + max(curr_left, curr_right, 0)
            return (root_max, node_max)

        return helper(root)[0]


# @lc code=end
