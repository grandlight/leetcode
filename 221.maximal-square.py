#
# @lc app=leetcode id=221 lang=python3
#
# [221] Maximal Square
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
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        m, n, res = len(matrix), len(matrix[0]), 0

        # 1d dp
        dp, pre = [0] * (m + 1), 0
        for j in range(n):
            for i in range(1, m + 1):
                t = dp[i]
                if matrix[i - 1][j] == "1":
                    dp[i] = 1 + min(dp[i], dp[i - 1], pre)
                    res = max(res, dp[i])
                else:
                    dp[i] = 0
                pre = t
        return res * res

        # 2d dp
        dp = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if i == 0 or j == 0:
                    dp[i][j] = int(matrix[i][j])
                elif matrix[i][j] == "1":
                    dp[i][j] = 1 + min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j])
                res = max(res, dp[i][j])
        return res * res


# @lc code=end
