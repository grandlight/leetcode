#
# @lc app=leetcode id=365 lang=python3
#
# [365] Water and Jug Problem
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def canMeasureWater(self, x: int, y: int, z: int) -> bool:
        if z == 0:
            return True
        elif x + y < z:
            return False

        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a

        return z % gcd(x, y) == 0


# @lc code=end
