#
# @lc app=leetcode id=59 lang=python3
#
# [59] Spiral Matrix II
#

# Time:  O(n^2)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        res, val = [[0] * n for _ in range(n)], 1
        left, right, top, bottom = 0, n - 1, 0, n - 1
        while left <= right and top <= bottom:
            for j in range(left, right + 1):
                res[top][j] = val
                val += 1
            top += 1
            if top > bottom:
                break

            for i in range(top, bottom + 1):
                res[i][right] = val
                val += 1
            right -= 1
            if right < left:
                break

            for j in range(right, left - 1, -1):
                res[bottom][j] = val
                val += 1
            bottom -= 1
            if bottom < top:
                break

            for i in range(bottom, top - 1, -1):
                res[i][left] = val
                val += 1
            left += 1
            if left > right:
                break

        return res


# @lc code=end
