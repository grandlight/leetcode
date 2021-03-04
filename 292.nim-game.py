#
# @lc app=leetcode id=292 lang=python3
#
# [292] Nim Game
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def canWinNim(self, n: int) -> bool:
        return n % 4 != 0


# @lc code=end
