#
# @lc app=leetcode id=260 lang=python3
#
# [260] Single Number III
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        xy = 0
        for num in nums:
            xy ^= num

        # find lowest '1'
        bit = xy ^ (xy & (xy - 1))

        x = 0
        for num in nums:
            if num & bit:
                x ^= num
        return [x, x ^ xy]


# @lc code=end
