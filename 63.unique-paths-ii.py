#
# @lc app=leetcode id=63 lang=python3
#
# [63] Unique Paths II
#

# 2d dp
# Time:  O(m * n)
# Space: O(m * n)

# 1d dp
# Time:  O(m * n)
# Space: O(min(m, n))

from typing import List


# @lc code=start
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if not obstacleGrid or not obstacleGrid[0] or obstacleGrid[0][0] == 1:
            return 0
        m, n = len(obstacleGrid), len(obstacleGrid[0])

        # 2d dp
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        dp[0][1] = 1  # or dp[1][0] = 1
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if obstacleGrid[i - 1][j - 1] == 1:
                    continue
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        return dp[m][n]

        # 1d dp
        dp = [1] + [0] * (n - 1)
        for i in range(m):
            for j in range(n):
                if obstacleGrid[i][j] == 1:
                    dp[j] = 0
                elif j > 0:
                    dp[j] += dp[j - 1]
        return dp[n - 1]


# @lc code=end
