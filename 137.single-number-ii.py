#
# @lc app=leetcode id=137 lang=python3
#
# [137] Single Number II
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        one, two, three = 0, 0, 0
        for i in range(len(nums)):
            two |= one & nums[i]
            one ^= nums[i]
            three = one & two
            one &= ~three
            two &= ~three
        return one

        res = 0
        for i in range(32):
            sum = 0
            for j in range(len(nums)):
                sum += (nums[j] >> i) & 1
            res |= (sum % 3) << i
        return res if res < 2 ** 31 else res - 2 ** 32


# @lc code=end
