#
# @lc app=leetcode id=12 lang=python3
#
# [12] Integer to Roman
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def intToRoman(self, num: int) -> str:
        res = ""
        val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        for i in range(len(val)):
            while num >= val[i]:
                num -= val[i]
                res += rom[i]
        return res


# @lc code=end
