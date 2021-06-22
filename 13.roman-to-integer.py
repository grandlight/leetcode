#
# @lc app=leetcode id=13 lang=python3
#
# [13] Roman to Integer
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        rtoi = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        res = rtoi[s[-1]]
        for i in range(0, len(s) - 1):
            if rtoi[s[i]] < rtoi[s[i + 1]]:
                res += -rtoi[s[i]]
            else:
                res += rtoi[s[i]]
        return res


# @lc code=end
