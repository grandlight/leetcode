#
# @lc app=leetcode id=50 lang=python3
#
# [50] Pow(x, n)
#

# Time:  O(logn)
# Time:  O(logn)

# @lc code=start
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == -1:
            return 1 / x
        if n == 0:
            return 1
        half = self.myPow(x, n // 2)
        if n % 2 == 0:
            return half * half
        return half * half * x


# @lc code=end
