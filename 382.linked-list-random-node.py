#
# @lc app=leetcode id=382 lang=python3
#
# [382] Linked List Random Node
#

# Time:  O()
# Space: O()

import random


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def __init__(self, head: ListNode):
        self.head = head

    def getRandom(self) -> int:
        res, cnt, curr = -1, 1, self.head
        while curr:
            if random.randint(1, cnt) == 1:
                res = curr.val
            cnt, curr = cnt + 1, curr.next
        return res


# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()
# @lc code=end
