#
# @lc app=leetcode id=149 lang=python3
#
# [149] Max Points on a Line
#

# Time:  O(n ^ 2)
# Space: O(n)

from collections import defaultdict
from typing import List


# @lc code=start
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        res = 0
        for i, start in enumerate(points):
            slope_count, same_point = defaultdict(int), 1
            for j in range(i + 1, len(points)):
                end = points[j]
                if start[0] == end[0] and start[1] == end[1]:
                    same_point += 1
                else:
                    slope = float("inf")
                    if start[0] - end[0] != 0:
                        slope = (start[1] - end[1]) * 1.0 / (start[0] - end[0])
                    slope_count[slope] += 1
            cur_max = 0
            for slope in slope_count:
                cur_max = max(cur_max, slope_count[slope])
            res = max(res, cur_max + same_point)
        return res


# @lc code=end
