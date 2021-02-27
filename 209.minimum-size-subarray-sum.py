#
# @lc app=leetcode id=209 lang=python3
#
# [209] Minimum Size Subarray Sum
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left, right, sum = 0, 0, 0
        n, res = len(nums), len(nums) + 1
        while right < n:
            sum += nums[right]
            right += 1
            while sum >= target:
                res = min(res, right - left)
                sum -= nums[left]
                left += 1
        return res if res != n + 1 else 0


# @lc code=end
