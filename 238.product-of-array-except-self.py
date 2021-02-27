#
# @lc app=leetcode id=238 lang=python3
#
# [238] Product of Array Except Self
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left_product = [1] * len(nums)
        for i in range(1, len(nums)):
            left_product[i] = left_product[i - 1] * nums[i - 1]

        right_product = 1
        for i in range(len(nums) - 2, -1, -1):
            right_product *= nums[i + 1]
            left_product[i] *= right_product

        return left_product


# @lc code=end
