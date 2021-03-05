#
# @lc app=leetcode id=166 lang=python3
#
# [166] Fraction to Recurring Decimal
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        res = ""
        if numerator > 0 and denominator < 0 or numerator < 0 and denominator > 0:
            res = "-"

        abs_n, abs_d = abs(numerator), abs(denominator)
        res += str(abs_n // abs_d)
        abs_n %= abs_d

        if abs_n > 0:
            res += "."

        lookup = {}
        while abs_n and abs_n not in lookup:
            lookup[abs_n] = len(res)
            abs_n *= 10
            res += str(abs_n // abs_d)
            abs_n %= abs_d

        if abs_n in lookup:
            res = res[: lookup[abs_n]] + "(" + res[lookup[abs_n] :] + ")"
        return res


# @lc code=end
