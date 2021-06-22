#
# @lc app=leetcode id=58 lang=python3
#
# [58] Length of Last Word
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        res = 0
        for i in range(len(s) - 1, -1, -1):
            if s[i] != " ":
                res += 1
            elif res > 0:
                return res
        return res


# @lc code=end
