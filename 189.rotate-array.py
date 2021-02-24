#
# @lc app=leetcode id=189 lang=python3
#
# [189] Rotate Array
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        if not nums or k % len(nums) == 0:
            return

        def reverse(begin, end):
            while begin < end:
                nums[begin], nums[end - 1] = nums[end - 1], nums[begin]
                begin += 1
                end -= 1

        k %= len(nums)
        reverse(0, len(nums))
        reverse(0, k)
        reverse(k, len(nums))


# @lc code=end
