#
# @lc app=leetcode id=69 lang=python3
#
# [69] Sqrt(x)
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x

        left, right = 0, x
        while left < right:
            mid = left + (right - left) // 2
            if mid <= x // mid:
                left = mid + 1
            else:
                right = mid
        return right - 1


# @lc code=end
