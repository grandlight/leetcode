#
# @lc app=leetcode id=8 lang=python3
#
# [8] String to Integer (atoi)
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def myAtoi(self, s: str) -> int:
        i, res = 0, 0
        while i < len(s) and s[i] == " ":
            i += 1
        if i == len(s):
            return res

        sign = 1
        if s[i] == "+":
            i += 1
        elif s[i] == "-":
            sign = -1
            i += 1

        INT_MAX, INT_MIN = 2147483647, -2147483648
        while i < len(s) and "0" <= s[i] <= "9":
            if res > (INT_MAX - int(s[i])) // 10:
                return INT_MAX if sign > 0 else INT_MIN
            res = res * 10 + int(s[i])
            i += 1
        return sign * res


# @lc code=end
