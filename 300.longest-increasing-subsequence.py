#
# @lc app=leetcode id=300 lang=python3
#
# [300] Longest Increasing Subsequence
#

# binary search
# Time:  O(nlogn)
# Space: O(n)

# dp
# Time:  O(n^2)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return 0
        res = [nums[0]]
        for num in nums:
            if num < res[0]:
                res[0] = num
            elif num > res[-1]:
                res.append(num)
            else:
                left, right = 0, len(res)
                while left < right:
                    mid = left + (right - left) // 2
                    if res[mid] < num:
                        left = mid + 1
                    else:
                        right = mid
                res[right] = num
        return len(res)

        dp = [1] * len(nums)
        for i in range(len(nums)):
            for j in range(i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[i], dp[j] + 1)
        return max(dp)


# @lc code=end
