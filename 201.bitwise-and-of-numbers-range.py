#
# @lc app=leetcode id=201 lang=python3
#
# [201] Bitwise AND of Numbers Range
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        while left < right:
            right &= right - 1
        return right

        shift, diff = 0, right - left
        while diff:
            diff >>= 1
            shift += 1
        return right & left >> shift << shift


# @lc code=end
