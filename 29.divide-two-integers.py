#
# @lc app=leetcode id=29 lang=python3
#
# [29] Divide Two Integers
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if dividend == -2147483648 and divisor == -1:
            return 2147483647

        res, dvd, dvs = 0, abs(dividend), abs(divisor)
        while dvd >= dvs:
            tmp, i = dvs, 0
            while dvd >= tmp:
                dvd -= tmp
                res += 1 << i
                tmp <<= 1
                i += 1
        return -res if (dividend < 0) ^ (divisor < 0) else res


# @lc code=end
