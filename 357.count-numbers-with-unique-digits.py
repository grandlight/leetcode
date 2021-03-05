#
# @lc app=leetcode id=357 lang=python3
#
# [357] Count Numbers with Unique Digits
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def countNumbersWithUniqueDigits(self, n: int) -> int:
        if n == 0:
            return 1
        res, fi = 10, 9
        for i in range(2, n + 1):
            fi *= 11 - i  # 9 - (i - 2)
            res += fi
        return res


# @lc code=end
