#
# @lc app=leetcode id=55 lang=python3
#
# [55] Jump Game
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        reach = 0
        for i, jump in enumerate(nums):
            if i > reach:
                break
            reach = max(reach, i + jump)
        return reach >= len(nums) - 1


# @lc code=end
