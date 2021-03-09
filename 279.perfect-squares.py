#
# @lc app=leetcode id=279 lang=python3
#
# [279] Perfect Squares
#

# Time:  O(n * sqrt(n))
# Space: O(n)

# @lc code=start
class Solution:
    def numSquares(self, n: int) -> int:
        dp = [0]
        while len(dp) <= n:
            dp.append(min(dp[-i * i] for i in range(1, int(len(dp) ** 0.5 + 1))) + 1)
        return dp[n]


# @lc code=end
