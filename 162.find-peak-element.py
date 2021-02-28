#
# @lc app=leetcode id=162 lang=python3
#
# [162] Find Peak Element
#

# Time:  O(logn)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] < nums[mid + 1]:
                left = mid + 1
            else:
                right = mid
        return right


# @lc code=end
