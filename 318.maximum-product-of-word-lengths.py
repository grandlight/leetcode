#
# @lc app=leetcode id=318 lang=python3
#
# [318] Maximum Product of Word Lengths
#

# Time:  O(n^2)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def maxProduct(self, words: List[str]) -> int:
        res = 0
        mask = [0] * len(words)
        for i in range(len(words)):
            for c in words[i]:
                mask[i] |= 1 << (ord(c) - 97)
            for j in range(i):
                if not (mask[i] & mask[j]):
                    res = max(res, len(words[i]) * len(words[j]))
        return res


# @lc code=end
