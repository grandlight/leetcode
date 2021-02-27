#
# @lc app=leetcode id=287 lang=python3
#
# [287] Find the Duplicate Number
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast, head = 0, 0, 0
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        while True:
            slow = nums[slow]
            head = nums[head]
            if slow == head:
                break
        return head


# @lc code=end
