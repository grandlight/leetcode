#
# @lc app=leetcode id=343 lang=python3
#
# [343] Integer Break
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [1] * (n + 1)
        for i in range(3, n + 1):
            for j in range(1, i):
                dp[i] = max(dp[i], j * (i - j), j * dp[i - j])
        return dp[n]

        # Time: O(logn)
        if n < 4:
            return n - 1

        res = 0
        if n % 3 == 0:
            res = 3 ** (n // 3)
        elif n % 3 == 2:
            res = 3 ** (n // 3) * 2
        else:
            res = 3 ** (n // 3 - 1) * 4
        return res


# @lc code=end
