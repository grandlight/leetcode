#
# @lc app=leetcode id=319 lang=python3
#
# [319] Bulb Switcher
#

# Time:  O(1)
# Space: O(1)

import math


# @lc code=start
class Solution:
    def bulbSwitch(self, n: int) -> int:
        return int(math.sqrt(n))


# @lc code=end
