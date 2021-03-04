#
# @lc app=leetcode id=326 lang=python3
#
# [326] Power of Three
#

# Time:  O(logn)
# Space: O(1)

# follow up
# Time:  O(1)
# Space: O(1)

import math


# @lc code=start
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        while n > 0 and n % 3 == 0:
            n //= 3
        return n == 1

        # follow up: log3(n) = log10(n) / log10(3)
        return n > 0 and (math.log10(n) / math.log10(3)).is_integer()


# @lc code=end
