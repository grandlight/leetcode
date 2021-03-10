#
# @lc app=leetcode id=198 lang=python3
#
# [198] House Robber
#

# Time:  O(n)
# Space: O(1)

# 1d dp
# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def rob(self, nums: List[int]) -> int:
        last, curr = 0, 0  # rob last or current house
        for num in nums:
            last, curr = curr, max(last + num, curr)
        return curr

        if len(nums) < 2:
            return 0 if not nums else nums[0]

        # 1d dp
        dp = [nums[0], max(nums[0], nums[1])] + [0] * (len(nums) - 2)
        for i in range(2, len(nums)):
            dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])
        return dp[-1]


# @lc code=end
