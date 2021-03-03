#
# @lc app=leetcode id=258 lang=python3
#
# [258] Add Digits
#

# Time:  O(logn)
# Space: O(1)

# follow up
# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def addDigits(self, num: int) -> int:
        while num // 10:
            sum = 0
            while num:
                sum += num % 10
                num //= 10
            num = sum
        return num

        # follow up
        return (num - 1) % 9 + 1 if num != 0 else 0


# @lc code=end
