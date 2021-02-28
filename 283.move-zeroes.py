#
# @lc app=leetcode id=283 lang=python3
#
# [283] Move Zeroes
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        nz = 0  # non-zero
        for i in range(len(nums)):
            if nums[i]:
                nums[i], nums[nz] = nums[nz], nums[i]
                nz += 1


# @lc code=end
