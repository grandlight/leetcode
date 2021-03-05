#
# @lc app=leetcode id=397 lang=python3
#
# [397] Integer Replacement
#

# Time:  O(logn)
# Space: O(1)


# @lc code=start
class Solution:
    def integerReplacement(self, n: int) -> int:
        res = 0
        while n != 1:
            if n == 3:
                n -= 1
            elif n & 3 == 3:
                n += 1
            elif n & 3 == 1:
                n -= 1
            else:
                n //= 2
            res += 1
        return res


# @lc code=end
