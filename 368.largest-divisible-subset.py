#
# @lc app=leetcode id=368 lang=python3
#
# [368] Largest Divisible Subset
#

# Time:  O(n^2)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        nums.sort()
        n, max_idx = len(nums), 0
        dp, prev = [1] * n, [-1] * n
        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j] == 0:
                    if dp[i] < dp[j] + 1:
                        dp[i] = dp[j] + 1
                        prev[i] = j
            if dp[max_idx] < dp[i]:
                max_idx = i

        res, i = [], max_idx
        while i != -1:
            res.append(nums[i])
            i = prev[i]
        return res[::-1]


# @lc code=end
