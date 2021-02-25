#
# @lc app=leetcode id=219 lang=python3
#
# [219] Contains Duplicate II
#

# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        lookup = {}
        for i, num in enumerate(nums):
            if num in lookup and i - lookup[num] <= k:
                return True
            lookup[num] = i
        return False


# @lc code=end
