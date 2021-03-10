#
# @lc app=leetcode id=213 lang=python3
#
# [213] House Robber II
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
        def helper(start, end):
            if end - start < 2:
                return nums[start]

            # rob last or current house
            last, curr = 0, nums[start]
            for i in range(start + 1, end):
                last, curr = curr, max(last + nums[i], curr)
            return curr

            # 1d dp
            dp = [0] * end
            dp[start] = nums[start]
            dp[start + 1] = max(nums[start], nums[start + 1])
            for i in range(start + 2, end):
                dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])
            return dp[-1]

        if len(nums) < 2:
            return 0 if not nums else nums[0]
        return max(helper(0, len(nums) - 1), helper(1, len(nums)))


# @lc code=end
