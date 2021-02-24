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
        res = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[res] = nums[i]
                res += 1
        return res


# @lc code=end
