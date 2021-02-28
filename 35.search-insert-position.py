#
# @lc app=leetcode id=35 lang=python3
#
# [35] Search Insert Position
#

# Time:  O(logn)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)
        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        return right

        # Time: O(n)
        for i in range(len(nums)):
            if nums[i] >= target:
                return i
        return len(nums)


# @lc code=end
