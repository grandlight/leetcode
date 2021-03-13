#
# @lc app=leetcode id=73 lang=python3
#
# [73] Set Matrix Zeroes
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        m, n = len(matrix), len(matrix[0])
        row0_zero, col0_zero = False, False
        for i in range(m):
            if matrix[i][0] == 0:
                col0_zero = True
        for j in range(n):
            if matrix[0][j] == 0:
                row0_zero = True
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[i][0] = 0
                    matrix[0][j] = 0
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0
        if col0_zero:
            for i in range(m):
                matrix[i][0] = 0
        if row0_zero:
            for j in range(n):
                matrix[0][j] = 0


# @lc code=end
