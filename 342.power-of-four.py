#
# @lc app=leetcode id=342 lang=python3
#
# [342] Power of Four
#

# Time:  O(logn)
# Space: O(1)

# follow up
# Time:  O(1)
# Space: O(1)

import math


# @lc code=start
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        while n > 0 and n % 4 == 0:
            n //= 4
        return n == 1

        # follow up: log4(n) = log10(n) / log10(4)
        return n > 0 and (math.log10(n) / math.log10(4)).is_integer()

        # follow up: using mask 0x5...5 = 0b0101...0101
        return n > 0 and (n & (n - 1)) == 0 and ((n & 0x55555555) == n)


# @lc code=end
