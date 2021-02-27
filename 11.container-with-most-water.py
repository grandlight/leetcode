#
# @lc app=leetcode id=11 lang=python3
#
# [11] Container With Most Water
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area, i, j = 0, 0, len(height) - 1
        while i < j:
            h = min(height[i], height[j])
            max_area = max(max_area, (j - i) * h)
            while i < j and height[i] == h:
                i += 1
            while i < j and height[j] == h:
                j -= 1
        return max_area


# @lc code=end
