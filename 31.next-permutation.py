#
# @lc app=leetcode id=31 lang=python3
#
# [31] Next Permutation
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        i, j = len(nums) - 2, len(nums) - 1
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i < 0:
            nums.reverse()
        else:
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
            nums[i + 1 :] = nums[:i:-1]


# @lc code=end
