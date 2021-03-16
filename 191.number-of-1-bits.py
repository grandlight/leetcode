#
# @lc app=leetcode id=191 lang=python3
#
# [191] Number of 1 Bits
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        for i in range(32):
            res += n & 1
            n >>= 1
        return res

        res = 0
        while n:
            res += 1
            n &= n - 1
        return res


# @lc code=end
