#
# @lc app=leetcode id=367 lang=python3
#
# [367] Valid Perfect Square
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True

        left, right = 0, num
        while left < right:
            mid = left + (right - left) // 2
            if mid < num // mid:
                left = mid + 1
            else:
                right = mid
        return right * right == num


# @lc code=end
