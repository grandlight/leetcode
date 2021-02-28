#
# @lc app=leetcode id=383 lang=python3
#
# [383] Ransom Note
#

# Time:  O(n)
# Space: O(1)

from collections import defaultdict


# @lc code=start
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        lookup = defaultdict(int)
        for ch in magazine:
            lookup[ch] += 1
        for ch in ransomNote:
            if lookup[ch] == 0:
                return False
            lookup[ch] -= 1
        return True


# @lc code=end
