#
# @lc app=leetcode id=75 lang=python3
#
# [75] Sort Colors
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        i, red, blue = 0, 0, len(nums) - 1
        while i <= blue:
            if nums[i] == 0:
                nums[i], nums[red] = nums[red], nums[i]
                red += 1
                i += 1
            elif nums[i] == 2:
                nums[i], nums[blue] = nums[blue], nums[i]
                blue -= 1
            else:
                i += 1


# @lc code=end
