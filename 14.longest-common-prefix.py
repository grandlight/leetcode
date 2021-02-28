#
# @lc app=leetcode id=14 lang=python3
#
# [14] Longest Common Prefix
#

# Time:  O(n * k)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        for i in range(len(strs[0])):
            for j in range(1, len(strs)):
                if i >= len(strs[j]) or strs[j][i] != strs[0][i]:
                    return strs[0][:i]
        return strs[0]


# @lc code=end
