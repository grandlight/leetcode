#
# @lc app=leetcode id=54 lang=python3
#
# [54] Spiral Matrix
#

# Time:  O(m * n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix or not matrix[0]:
            return []

        res, left, right, top, bottom = [], 0, len(matrix[0]) - 1, 0, len(matrix) - 1
        while left <= right and top <= bottom:
            for j in range(left, right + 1):
                res.append(matrix[top][j])
            top += 1
            if top > bottom:
                break

            for i in range(top, bottom + 1):
                res.append(matrix[i][right])
            right -= 1
            if right < left:
                break

            for j in range(right, left - 1, -1):
                res.append(matrix[bottom][j])
            bottom -= 1
            if bottom < top:
                break

            for i in range(bottom, top - 1, -1):
                res.append(matrix[i][left])
            left += 1
            if left > right:
                break

        return res


# @lc code=end
