#
# @lc app=leetcode id=371 lang=python3
#
# [371] Sum of Two Integers
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def getSum(self, a: int, b: int) -> int:
        mask = 0xFFFFFFFF
        while b:
            sum = (a ^ b) & mask
            carry = ((a & b) << 1) & mask
            a, b = sum, carry
        if (a >> 31) & 1:
            return ~(a ^ mask)
        return a


# @lc code=end
