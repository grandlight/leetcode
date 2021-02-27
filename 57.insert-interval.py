#
# @lc app=leetcode id=57 lang=python3
#
# [57] Insert Interval
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        res = []
        i, n = 0, len(intervals)
        #          |new|
        # |itv[i]|
        while i < n and intervals[i][1] < newInterval[0]:
            res.append(intervals[i])
            i += 1
        #  |new|        |new|        |new| |   new   |
        #    |itv[i]|  |itv[i]|  |itv[i]|   |itv[i]|
        while i < n and intervals[i][0] <= newInterval[1]:
            newInterval = [min(intervals[i][0], newInterval[0]), max(intervals[i][1], newInterval[1])]
            i += 1
        res.append(newInterval)
        res.extend(intervals[i:])
        return res


# @lc code=end
