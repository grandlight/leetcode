#
# @lc app=leetcode id=91 lang=python3
#
# [91] Decode Ways
#

# Time:  O(n)
# Space: O(1)

# 1d dp
# Time:  O(n)
# Space: O(n)

# @lc code=start
class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == "0":
            return 0

        i_1, i_2 = 1, 0
        for i in range(len(s)):
            cur = 0
            if s[i] != "0":
                cur = i_1
            if i > 0 and (s[i - 1] == "1" or (s[i - 1] == "2" and s[i] <= "6")):
                cur += i_2
            i_1, i_2 = cur, i_1
        return i_1

        # 1d dp
        dp = [1] + [0] * len(s)
        for i in range(1, len(s) + 1):
            if s[i - 1] != "0":
                dp[i] = dp[i - 1]
            if i > 1 and (s[i - 2] == "1" or (s[i - 2] == "2" and s[i - 1] <= "6")):
                dp[i] += dp[i - 2]
        return dp[-1]


# @lc code=end
