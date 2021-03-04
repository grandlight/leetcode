#
# @lc app=leetcode id=231 lang=python3
#
# [231] Power of Two
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        res = 0
        while n > 0:
            res += n & 1
            n >>= 1
        return res == 1

        # follow up
        return n > 0 and n & (n - 1) == 0


# @lc code=end
