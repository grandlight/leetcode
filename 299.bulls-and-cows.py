#
# @lc app=leetcode id=299 lang=python3
#
# [299] Bulls and Cows
#

# Time:  O(n)
# Space: O(1)

from collections import defaultdict


# @lc code=start
class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        lookup, a, b = defaultdict(int), 0, 0
        for s, g in zip(secret, guess):
            if s == g:
                a += 1
            else:
                b += int(lookup[s] < 0) + int(lookup[g] > 0)
                lookup[s] += 1
                lookup[g] -= 1
        return f"{a}A{b}B"


# @lc code=end
