#
# @lc app=leetcode id=240 lang=python3
#
# [240] Search a 2D Matrix II
#

# Time:  O(m + n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        i, j = 0, len(matrix[0]) - 1
        while i < len(matrix) and j >= 0:
            if matrix[i][j] == target:
                return True
            elif matrix[i][j] > target:
                j -= 1
            else:
                i += 1
        return False


# @lc code=end
