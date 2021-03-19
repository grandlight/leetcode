#
# @lc app=leetcode id=74 lang=python3
#
# [74] Search a 2D Matrix
#

# Time:  O(logm + logn)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        left, right = 0, m * n
        while left < right:
            mid = left + (right - left) // 2
            i, j = divmod(mid, n)
            if matrix[i][j] == target:
                return True
            elif matrix[i][j] < target:
                left = mid + 1
            else:
                right = mid
        return False


# @lc code=end
