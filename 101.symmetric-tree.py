#
# @lc app=leetcode id=101 lang=python3
#
# [101] Symmetric Tree
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
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root:
            return True

        # recursive
        def helper(p: TreeNode, q: TreeNode):
            if not p and not q:
                return True
            if (p and not q) or (not p and q) or (p.val != q.val):
                return False
            return helper(p.left, q.right) and helper(p.right, q.left)

        return helper(root.left, root.right)

        # iterative
        stack = [root.left, root.right]
        while stack:
            p, q = stack.pop(), stack.pop()
            if not p and not q:
                continue
            if (p and not q) or (not p and q) or (p.val != q.val):
                return False
            stack.append(p.left)
            stack.append(q.right)
            stack.append(p.right)
            stack.append(q.left)
        return True


# @lc code=end
