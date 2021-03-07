#
# @lc app=leetcode id=230 lang=python3
#
# [230] Kth Smallest Element in a BST
#

# Time:  O(max(h, k))
# Space: O(h)


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        count, stack = 0, [(root, False)]
        while stack:
            node, is_visited = stack.pop()
            if node is None:
                continue
            if is_visited:
                count += 1
                if count == k:
                    return node.val
            else:
                stack.append((node.right, False))
                stack.append((node, True))
                stack.append((node.left, False))
        return 0

        node, stack, count = root, [], 0
        while node or stack:
            while node:
                stack.append(node)
                node = node.left
            node, count = stack.pop(), count + 1
            if count == k:
                return node.val
            node = node.right
        return 0


# @lc code=end
