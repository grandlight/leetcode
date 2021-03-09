#
# @lc app=leetcode id=62 lang=python3
#
# [62] Unique Paths
#

# 2d dp
# Time:  O(m * n)
# Space: O(m * n)

# 1d dp
# Time:  O(m * n)
# Space: O(min(m, n))

# combinations
# Time:  O(min(m, n))
# Space: O(1)


# @lc code=start
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        m, n = max(m, n), min(m, n)

        # 2-d dp
        dp = [[1] * n for _ in range(m)]  # not [[1] * n] * m
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        return dp[m - 1][n - 1]

        # 1-d dp
        dp = [1] * n
        for i in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]
        return dp[n - 1]

        # combinations: C(a, b) = C(m+n-2, n-1)
        a = b = 1
        for i in range(n - 1):
            a *= m + n - 2 - i
            b *= i + 1
        return a // b


# @lc code=end
