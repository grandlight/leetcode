#
# @lc app=leetcode id=109 lang=python3
#
# [109] Convert Sorted List to Binary Search Tree
#

# Time:  O(n)
# Space: O(logn)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
class Solution:
    def sortedListToBST(self, head: ListNode) -> TreeNode:
        def helper(head: ListNode, tail: ListNode):
            if head == tail:
                return None
            slow, fast = head, head
            while fast != tail and fast.next != tail:
                slow = slow.next
                fast = fast.next.next
            node = TreeNode(slow.val)
            node.left = helper(head, slow)
            node.right = helper(slow.next, tail)
            return node

        if not head:
            return None
        return helper(head, None)


# @lc code=end
