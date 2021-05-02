#
# @lc app=leetcode id=10 lang=python3
#
# [10] Regular Expression Matching
#

# https://www.youtube.com/watch?v=c5vsle60Uw8

# Time:  O(m * n)
# Space: O(m * n)

# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        dp = [[False] * (len(p) + 1) for _ in range((len(s) + 1))]
        dp[0][0] = True
        for i in range(2, len(p) + 1):
            if p[i - 1] == "*":
                dp[0][i] = dp[0][i - 2]
        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j - 1] == s[i - 1] or p[j - 1] == ".":
                    dp[i][j] = dp[i - 1][j - 1]
                elif p[j - 1] == "*":
                    if p[j - 2] == s[i - 1] or p[j - 2] == ".":
                        dp[i][j] = dp[i][j - 1] or dp[i - 1][j] or dp[i][j - 2]
                    else:
                        dp[i][j] = dp[i][j - 2]
        return dp[-1][-1]


# @lc code=end
