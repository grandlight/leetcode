#
# @lc app=leetcode id=98 lang=python3
#
# [98] Validate Binary Search Tree
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
    def isValidBST(self, root: TreeNode) -> bool:
        def helper(node: TreeNode, mn, mx):
            if not node:
                return True
            a = mn < node.val and node.val < mx
            b = helper(node.left, mn, node.val)
            c = helper(node.right, node.val, mx)
            return a and b and c

        return helper(root, float("-inf"), float("inf"))

        # can handle left <= node, Space: O(n)
        def inorder(node: TreeNode):
            if not node:
                return
            inorder(node.left)
            vals.append(node.val)
            inorder(node.right)

        vals = []
        inorder(root)
        for i in range(len(vals) - 1):
            if vals[i] >= vals[i + 1]:
                return False
        return True


# @lc code=end
