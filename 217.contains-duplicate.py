#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#

# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        lookup = {}
        for num in nums:
            if num in lookup:
                return True
            lookup[num] = 1
        return False

        # another solution
        return len(nums) > len(set(nums))


# @lc code=end
