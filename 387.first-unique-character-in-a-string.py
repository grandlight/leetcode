#
# @lc app=leetcode id=387 lang=python3
#
# [387] First Unique Character in a String
#

# Time:  O(n)
# Space: O(1)

from collections import defaultdict


# @lc code=start
class Solution:
    def firstUniqChar(self, s: str) -> int:
        lookup = defaultdict(int)
        for c in s:
            lookup[c] += 1
        for i in range(len(s)):
            if lookup[s[i]] == 1:
                return i
        return -1


# @lc code=end
