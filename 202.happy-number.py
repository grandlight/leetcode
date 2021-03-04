#
# @lc app=leetcode id=202 lang=python3
#
# [202] Happy Number
#

# Time:  O(k), k is the steps to be happy number
# Space: O(k)

# @lc code=start
class Solution:
    def isHappy(self, n: int) -> bool:
        lookup = {}
        while n != 1 and n not in lookup:
            sum, lookup[n] = 0, True
            while n:
                sum += (n % 10) ** 2
                n //= 10
            n = sum
        return n == 1


# @lc code=end
