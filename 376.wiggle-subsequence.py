#
# @lc app=leetcode id=376 lang=python3
#
# [376] Wiggle Subsequence
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        positive, negative = 1, 1
        for i in range(1, len(nums)):
            if nums[i - 1] < nums[i]:
                positive = negative + 1
            elif nums[i - 1] > nums[i]:
                negative = positive + 1
        return min(len(nums), max(positive, negative))


# @lc code=end
