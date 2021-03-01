#
# @lc app=leetcode id=242 lang=python3
#
# [242] Valid Anagram
#

# Time:  O(n)
# Space: O(1)

from collections import defaultdict


# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = defaultdict(int)
        for c in s:
            count[c] += 1
        for c in t:
            count[c] -= 1
            if count[c] < 0:
                return False
        return True


# @lc code=end
