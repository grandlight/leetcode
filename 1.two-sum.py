#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#

# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lookup = {}
        for i in range(len(nums)):
            if nums[i] in lookup:
                return lookup[nums[i]], i
            lookup[target - nums[i]] = i


# @lc code=end
