#
# @lc app=leetcode id=9 lang=python3
#
# [9] Palindrome Number
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        rev, xx = 0, x
        while xx:
            rev = rev * 10 + xx % 10
            xx //= 10
        return x == rev


# @lc code=end
