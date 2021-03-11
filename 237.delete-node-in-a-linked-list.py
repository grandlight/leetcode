#
# @lc app=leetcode id=237 lang=python3
#
# [237] Delete Node in a Linked List
#

# Time:  O(1)
# Space: O(1)


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


# @lc code=start


class Solution:
    def deleteNode(self, node: ListNode):
        temp = node.next
        node.val = temp.val
        node.next = temp.next
        del temp


# @lc code=end
