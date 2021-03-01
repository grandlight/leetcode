#
# @lc app=leetcode id=171 lang=python3
#
# [171] Excel Sheet Column Number
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def titleToNumber(self, s: str) -> int:
        res = 0
        for i in range(len(s)):
            res = res * 26 + ord(s[i]) - 64
        return res


# @lc code=end
