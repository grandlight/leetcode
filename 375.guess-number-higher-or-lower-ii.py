#
# @lc app=leetcode id=375 lang=python3
#
# [375] Guess Number Higher or Lower II
#

# Time:  O(n^2)
# Space: O(n^2)

# @lc code=start
class Solution:
    def getMoneyAmount(self, n: int) -> int:
        dp = [[0] * n for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                dp[i][j] = min(k + 1 + max(dp[i][k - 1], dp[k + 1][j]) for k in range(i, j + 1))
        return dp[0][n - 1]


# @lc code=end
