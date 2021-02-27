#
# @lc app=leetcode id=152 lang=python3
#
# [152] Maximum Product Subarray
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        global_max, local_max, local_min = float("-inf"), 1, 1
        for num in nums:
            local_max, local_min = max(num, local_max * num, local_min * num), min(
                num, local_max * num, local_min * num
            )
            global_max = max(global_max, local_max)
        return global_max


# @lc code=end
