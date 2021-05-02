#
# @lc app=leetcode id=41 lang=python3
#
# [41] First Missing Positive
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            while nums[i] > 0 and nums[i] - 1 < len(nums) and nums[i] != nums[nums[i] - 1]:
                nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
        for i in range(len(nums)):
            if nums[i] != i + 1:
                return i + 1
        return len(nums) + 1


# @lc code=end
