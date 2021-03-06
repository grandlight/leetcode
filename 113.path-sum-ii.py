#
# @lc app=leetcode id=113 lang=python3
#
# [113] Path Sum II
#

# Time:  O(n)
# Space: O(h)

from typing import List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def pathSum(self, root: TreeNode, targetSum: int) -> List[List[int]]:
        def helper(cur: list, node: TreeNode, target):
            if not node:
                return
            if not node.left and not node.right and node.val == target:
                res.append(cur + [node.val])
            cur.append(node.val)
            helper(cur, node.left, target - node.val)
            helper(cur, node.right, target - node.val)
            cur.pop()

        res = []
        helper([], root, targetSum)
        return res


# @lc code=end
