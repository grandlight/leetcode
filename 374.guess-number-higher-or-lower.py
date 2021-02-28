#
# @lc app=leetcode id=374 lang=python3
#
# [374] Guess Number Higher or Lower
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:


class Solution:
    def guessNumber(self, n: int) -> int:
        left, right = 1, n
        while left < right:
            mid = left + (right - left) // 2
            if guess(mid) == 0:
                return mid
            elif guess(mid) == 1:
                left = mid + 1
            else:
                right = mid - 1
        return right


# @lc code=end
