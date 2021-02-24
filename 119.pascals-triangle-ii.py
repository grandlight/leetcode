#
# @lc app=leetcode id=119 lang=python3
#
# [119] Pascal's Triangle II
#

# Time:  O(n^2)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        res = [1] + [0] * rowIndex
        for i in range(1, rowIndex + 1):
            for j in range(i, 0, -1):
                res[j] += res[j - 1]
        return res


# @lc code=end
