#
# @lc app=leetcode id=372 lang=python3
#
# [372] Super Pow
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def superPow(self, a: int, b: List[int]) -> int:
        def pow(x, n):
            if x == 1 or n == 0:
                return 1
            # recursive
            if n % 2 == 0:
                return pow(x * x % 1337, n // 2) % 1337
            return x * pow(x * x % 1337, n // 2) % 1337
            # iterative
            res = 1
            while n:
                if n & 1:
                    res = res * x % 1337
                n >>= 1
                x = x * x % 1337
            return res % 1337

        res = 1
        for x in b:
            res = pow(res, 10) * pow(a, x) % 1337
        return res


# @lc code=end
