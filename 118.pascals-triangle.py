#
# @lc app=leetcode id=118 lang=python3
#
# [118] Pascal's Triangle
#

# Time:  O(n^2)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        res = []
        for i in range(numRows):
            res.append([1] * (i + 1))
            for j in range(1, i):
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
        return res


# @lc code=end
