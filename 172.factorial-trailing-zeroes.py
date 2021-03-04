#
# @lc app=leetcode id=172 lang=python3
#
# [172] Factorial Trailing Zeroes
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def trailingZeroes(self, n: int) -> int:
        res = 0
        while n > 0:
            res += n // 5
            n //= 5
        return res

        # recursive
        return 0 if n == 0 else n // 5 + self.trailingZeroes(n // 5)


# @lc code=end
