#
# @lc app=leetcode id=84 lang=python3
#
# [84] Largest Rectangle in Histogram
#

# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        res, i, stk = 0, 0, []
        heights.append(0)
        while i < len(heights):
            if not stk or heights[stk[-1]] < heights[i]:
                stk.append(i)
                i += 1
            else:
                h = stk.pop()
                w = i if not stk else (i - stk[-1] - 1)
                res = max(res, heights[h] * w)
        heights.pop()
        return res


# @lc code=end
