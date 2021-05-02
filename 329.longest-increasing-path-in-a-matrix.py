#
# @lc app=leetcode id=329 lang=python3
#
# [329] Longest Increasing Path in a Matrix
#

# Time:  O(m * n)
# Space: O(m * n)

from typing import List


# @lc code=start
class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        m, n = len(matrix), len(matrix[0])
        directions = [(0, -1), (0, 1), (-1, 0), (1, 0)]

        def helper(i, j):
            if dp[i][j]:
                return dp[i][j]
            max_depth = 0
            for di, dj in directions:
                x, y = i + di, j + dj
                if 0 <= x < m and 0 <= y < n and matrix[x][y] < matrix[i][j]:
                    max_depth = max(max_depth, helper(x, y))
            dp[i][j] = max_depth + 1
            return dp[i][j]

        res, dp = 0, [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                res = max(res, helper(i, j))
        return res


# @lc code=end
