#
# @lc app=leetcode id=390 lang=python3
#
# [390] Elimination Game
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def lastRemaining(self, n: int) -> int:
        start, step, direction = 1, 2, 1
        while n > 1:
            start += direction * (step * (n // 2) - step // 2)
            n //= 2
            step *= 2
            direction *= -1
        return start


# @lc code=end
