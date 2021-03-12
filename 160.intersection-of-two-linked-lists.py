#
# @lc app=leetcode id=160 lang=python3
#
# [160] Intersection of Two Linked Lists
#

# Time:  O(m + n)
# Space: O(1)


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


# @lc code=start


class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        currA, currB = headA, headB
        while currA != currB:
            currA = currA.next if currA else headB
            currB = currB.next if currB else headA
        return currA


# @lc code=end
