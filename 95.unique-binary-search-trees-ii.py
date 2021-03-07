#
# @lc app=leetcode id=95 lang=python3
#
# [95] Unique Binary Search Trees II
#

# Time:  O(4^n / n^(3/2))
# Space: O(4^n / n^(3/2))


from typing import List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def generateTrees(self, n: int) -> List[TreeNode]:
        def helper(start, end):
            if start > end:
                return [None]
            res = []
            for i in range(start, end + 1):
                left = helper(start, i - 1)
                right = helper(i + 1, end)
                for j in left:
                    for k in right:
                        node = TreeNode(i)
                        node.left = j
                        node.right = k
                        res.append(node)
            return res

        return helper(1, n)


# @lc code=end
