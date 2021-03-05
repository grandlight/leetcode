#
# @lc app=leetcode id=396 lang=python3
#
# [396] Rotate Function
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def maxRotateFunction(self, A: List[int]) -> int:
        s = sum(A)
        fi = 0
        for i in range(len(A)):
            fi += i * A[i]

        # F(i) = F(i-1) + sum - n * A[n-1]
        res = fi
        for i in range(1, len(A) + 1):
            fi += s - len(A) * A[-i]
            res = max(res, fi)
        return res


# @lc code=end
