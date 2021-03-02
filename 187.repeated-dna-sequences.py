#
# @lc app=leetcode id=187 lang=python3
#
# [187] Repeated DNA Sequences
#

# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        res, lookup = set(), set()
        if len(s) < 10:
            return []
        for i in range(len(s) - 9):
            j = i + 10
            if s[i:j] in lookup:
                res.add(s[i:j])
            else:
                lookup.add(s[i:j])
        return list(res)


# @lc code=end
