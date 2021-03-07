#
# @lc app=leetcode id=173 lang=python3
#
# [173] Binary Search Tree Iterator
#

# Time:  O(1)
# Space: O(h)


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class BSTIterator:
    def __init__(self, root: TreeNode):
        self.stack = []
        self.traversalLeft(root)

    def next(self) -> int:
        node = self.stack.pop()
        self.traversalLeft(node.right)
        return node.val

    def hasNext(self) -> bool:
        return self.stack

    def traversalLeft(self, node):
        while node:
            self.stack.append(node)
            node = node.left


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()
# @lc code=end
