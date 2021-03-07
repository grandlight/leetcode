#
# @lc app=leetcode id=199 lang=python3
#
# [199] Binary Tree Right Side View
#

# Time:  O(n)
# Space: O(n)

from typing import List
import collections


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        res, queue = [], collections.deque([root])
        while queue:
            res.append(queue[-1].val)
            qsize = len(queue)
            for i in range(qsize):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return res


# @lc code=end
