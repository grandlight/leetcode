#
# @lc app=leetcode id=377 lang=python3
#
# [377] Combination Sum IV
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        dp = [1] + [0] * target
        nums.sort()
        for i in range(1, target + 1):
            for j in range(len(nums)):
                if nums[j] <= i:
                    dp[i] += dp[i - nums[j]]
                else:
                    break
        return dp[target]


# @lc code=end
