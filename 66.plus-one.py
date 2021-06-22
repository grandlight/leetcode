#
# @lc app=leetcode id=66 lang=python3
#
# [66] Plus One
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        digits[0] = 1
        digits.append(0)
        return digits


# @lc code=end
