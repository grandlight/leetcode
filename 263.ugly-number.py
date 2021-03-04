#
# @lc app=leetcode id=263 lang=python3
#
# [263] Ugly Number
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def isUgly(self, num: int) -> bool:
        if num < 1:
            return False
        for i in [2, 3, 5]:
            while num % i == 0:
                num //= i
        return num == 1


# @lc code=end
