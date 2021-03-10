#
# @lc app=leetcode id=64 lang=python3
#
# [64] Minimum Path Sum
#

# 1d dp
# Time:  O(m * n)
# Space: O(m + n)

# 2d dp
# Time:  O(m * n)
# Space: O(m * n)

from typing import List


# @lc code=start
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        # 1d dp
        dp = list(grid[0])
        for j in range(1, n):
            dp[j] = dp[j - 1] + grid[0][j]
        for i in range(1, m):
            dp[0] += grid[i][0]
            for j in range(1, n):
                dp[j] = min(dp[j - 1], dp[j]) + grid[i][j]
        return dp[-1]

        # 2d dp
        dp = [[0] * n for _ in range(m)]
        dp[0][0] = grid[0][0]
        for i in range(1, m):
            dp[i][0] = grid[i][0] + dp[i - 1][0]
        for j in range(1, n):
            dp[0][j] = grid[0][j] + dp[0][j - 1]
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = grid[i][j] + min(dp[i - 1][j], dp[i][j - 1])
        return dp[m - 1][n - 1]


# @lc code=end
