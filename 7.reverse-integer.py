#
# @lc app=leetcode id=7 lang=python3
#
# [7] Reverse Integer
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        res, abs_x = 0, abs(x)
        sign = -1 if x < 0 else 1
        while abs_x:
            if res > 214748364:
                return 0
            res = res * 10 + abs_x % 10
            abs_x //= 10
        return res * sign


# @lc code=end
