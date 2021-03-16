#
# @lc app=leetcode id=268 lang=python3
#
# [268] Missing Number
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        res = 0
        for i in range(len(nums)):
            res ^= (i + 1) ^ nums[i]
        return res

        n = len(nums)
        return (n + 1) * n // 2 - sum(nums)


# @lc code=end
