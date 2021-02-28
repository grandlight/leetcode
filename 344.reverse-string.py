#
# @lc app=leetcode id=344 lang=python3
#
# [344] Reverse String
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def reverseString(self, s: List[str]) -> None:
        for i in range(len(s) // 2):
            s[i], s[len(s) - i - 1] = s[len(s) - i - 1], s[i]


# @lc code=end
