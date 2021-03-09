#
# @lc app=leetcode id=120 lang=python3
#
# [120] Triangle
#

# Time:  O(m * n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        # triangle[-1] as dp table
        dp = triangle[-1][:]
        for i in range(len(triangle) - 2, -1, -1):
            for j in range(i + 1):
                dp[j] = min(dp[j], dp[j + 1]) + triangle[i][j]
        return dp[0]

        # triangle as dp table
        for i in range(1, len(triangle)):
            for j in range(len(triangle[i])):
                if j == 0:
                    triangle[i][j] += triangle[i - 1][j]
                elif j < len(triangle[i]) - 1:
                    triangle[i][j] += min(triangle[i - 1][j], triangle[i - 1][j - 1])
                else:
                    triangle[i][j] += triangle[i - 1][j - 1]
        return min(triangle[-1])


# @lc code=end
