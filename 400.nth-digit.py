#
# @lc app=leetcode id=400 lang=python3
#
# [400] Nth Digit
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def findNthDigit(self, n: int) -> int:
        digit_len, count, start = 1, 9, 1
        while n > digit_len * count:
            n -= digit_len * count
            digit_len += 1
            count *= 10
            start *= 10
        start += (n - 1) // digit_len
        return int(str(start)[(n - 1) % digit_len])


# @lc code=end
