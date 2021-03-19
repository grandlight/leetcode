#
# @lc app=leetcode id=89 lang=python3
#
# [89] Gray Code
#

# Time:  O(2^n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def grayCode(self, n: int) -> List[int]:
        res = [0]
        for i in range(n):
            size = len(res)
            for j in range(size - 1, -1, -1):
                res.append(res[j] | (1 << i))
        return res

        res = []
        for i in range(2 ** n):
            res.append((i >> 1) ^ i)
        return res


# @lc code=end
