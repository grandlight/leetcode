#
# @lc app=leetcode id=334 lang=python3
#
# [334] Increasing Triplet Subsequence
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first, second = float("inf"), float("inf")
        for num in nums:
            if first >= num:
                first = num
            elif second >= num:
                second = num
            else:
                return True
        return False


# @lc code=end
