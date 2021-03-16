#
# @lc app=leetcode id=389 lang=python3
#
# [389] Find the Difference
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        res = 0
        for c in s:
            res ^= ord(c)
        for c in t:
            res ^= ord(c)
        return chr(res)

        lookup = [0] * 26
        for c in s:
            lookup[ord(c) - 97] += 1
        for c in t:
            lookup[ord(c) - 97] -= 1
            if lookup[ord(c) - 97] < 0:
                return c


# @lc code=end
