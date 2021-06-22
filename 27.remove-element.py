#
# @lc app=leetcode id=27 lang=python3
#
# [27] Remove Element
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        for num in nums:
            if num != val:
                nums[i] = num
                i += 1
        return i


# @lc code=end
