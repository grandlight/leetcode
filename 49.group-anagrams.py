#
# @lc app=leetcode id=49 lang=python3
#
# [49] Group Anagrams
#

# Time:  O(n * aloga), a is max anagram string length
# Space: O(n)

from typing import List
from collections import defaultdict


# @lc code=start
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_map = defaultdict(list)
        for str in strs:
            anagrams_map["".join(sorted(str))].append(str)
        return list(anagrams_map.values())


# @lc code=end
