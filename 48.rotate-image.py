#
# @lc app=leetcode id=48 lang=python3
#
# [48] Rotate Image
#

# Time:  O(n^2)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)

        def swapMatrix(i1, j1, i2, j2):
            matrix[i1][j1], matrix[i2][j2] = matrix[i2][j2], matrix[i1][j1]

        for i in range(n - 1):
            for j in range(n - i):
                swapMatrix(i, j, n - 1 - j, n - 1 - i)
        for i in range(n // 2):
            for j in range(n):
                swapMatrix(i, j, n - 1 - i, j)
        return

        for i in range(n // 2):
            for j in range(i, n - 1 - i):
                tmp = matrix[i][j]
                matrix[i][j] = matrix[n - 1 - j][i]
                matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
                matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
                matrix[j][n - 1 - i] = tmp
        return


# @lc code=end
