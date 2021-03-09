#
# @lc app=leetcode id=139 lang=python3
#
# [139] Word Break
#

# Time:  O(n * w^2)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [True] + [False] * len(s)
        for i in range(1, len(s) + 1):
            for j in range(i):
                if dp[j] and s[j:i] in wordDict:
                    dp[i] = True
                    break
        return dp[len(s)]


# @lc code=end
